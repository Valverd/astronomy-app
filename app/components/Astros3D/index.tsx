import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export default function Astros3D({ planet }: { planet: string }) {
    const container = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        if (!container.current) return

        const duplicated_canvas = container.current.querySelector('canvas')
        if (duplicated_canvas) container.current.removeChild(duplicated_canvas)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(50, container.current.clientWidth / container.current.clientHeight, 0.1, 1000)
        camera.position.z = 3

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(container.current.clientWidth, container.current.clientHeight)
        renderer.setClearColor(0x000000, 0)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap


        container.current.appendChild(renderer.domElement)

        const textureLoader = new THREE.TextureLoader()
        const planet_texture = textureLoader.load(`${planet}-texture.jpg`)

        const geometry = new THREE.SphereGeometry(1, 64, 64)

        const material = new THREE.MeshStandardMaterial({
            map: planet_texture
        })

        const saturnRingsTexture = new THREE.TextureLoader().load('SaturnRings.png');
        const saturnRingsGeometry = new THREE.RingGeometry(1.2, 2, 64);

        // Corrigir UVs para que a textura percorra a circunferência corretamente
        const pos = saturnRingsGeometry.attributes.position;
        const uv = saturnRingsGeometry.attributes.uv;

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);

            // Calcular ângulo e raio
            const angle = Math.atan2(y, x);
            const radius = Math.sqrt(x * x + y * y);

            // U: percorre a circunferência de 0 a 1 (normalizado)
            const u = (angle + Math.PI) / (2 * Math.PI);

            // V: vai do interno (0) ao externo (1)
            const v = 1 - (radius - 1.2) / (2 - 1.2);

            uv.setXY(i, u, v);
        }

        uv.needsUpdate = true;

        const SaturnRingsMaterial = new THREE.MeshStandardMaterial({
            transparent: true,
            map: saturnRingsTexture,
            side: THREE.DoubleSide,
            emissive: 0x222222,
            emissiveIntensity: 1
        });

        const rings = new THREE.Mesh(saturnRingsGeometry, SaturnRingsMaterial);
        rings.castShadow = true
        rings.receiveShadow = true;
        rings.rotation.x = Math.PI / 2.001;

        const astro = new THREE.Mesh(geometry, material)
        astro.castShadow = true
        astro.receiveShadow = true
        scene.add(astro)

        if (planet == 'Saturn') {
            scene.add(rings)
            camera.position.z = 4.9

        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
        directionalLight.position.set(5, 1, 5)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.width = 4096
        directionalLight.shadow.mapSize.height = 4096
        scene.add(directionalLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.maxTargetRadius = 0
        controls.rotateSpeed = 0.4

        function animate() {
            requestAnimationFrame(animate)
            astro.rotation.y += 0.001
            controls.update()
            renderer.render(scene, camera)
        }

        animate()

        const resizeObserver = new ResizeObserver(() => {
            if (!container.current) return
            renderer.setSize(container.current.clientWidth, container.current.clientHeight)
            camera.aspect = container.current.clientWidth / container.current.clientHeight
            camera.updateProjectionMatrix()

            controls.update()
            renderer.render(scene, camera)
        })

        resizeObserver.observe(container.current)

        return () => {

            resizeObserver.disconnect()

            scene.clear()
        }

    }, [planet])

    // return <div ref={container} className='w-[50%] h-[300px] lg:w-[40%] lg:h-auto' />
    return <div ref={container} className='w-[90%] h-[400px] md:h-[500px] lg:w-[50%] lg:h-auto' />
}
