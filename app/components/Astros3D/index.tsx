import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Astros3D({ planet }: { planet: string }) {
    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!container.current) return

        const duplicated_canvas = container.current.querySelector('canvas')
        if (duplicated_canvas) container.current.removeChild(duplicated_canvas)

        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, container.current.clientWidth / container.current.clientHeight, 0.1, 1000)
        camera.position.z = 2

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(container.current.clientWidth, container.current.clientHeight)
        renderer.setClearColor(0x000000, 0)
        container.current.appendChild(renderer.domElement)

        const textureLoader = new THREE.TextureLoader()

        const geometry = new THREE.SphereGeometry(1, 64, 64)

        const material = new THREE.MeshStandardMaterial()

        const astro = new THREE.Mesh(geometry, material)
        astro.castShadow = true
        scene.add(astro)

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
        directionalLight.position.set(5, 1, 5)
        scene.add(directionalLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.rotateSpeed = 0.4

        renderer.render(scene, camera)

        textureLoader.load(`${planet}.jpg`, (texture) => {
            material.map = texture
            material.needsUpdate = true
        })

        // textureLoader.load('earthcloudmaptrans.jpg', (texture) => {
        //     material.bumpMap = texture
        // })

        function animate() {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)

        }

        animate()

        const resizeObserver = new ResizeObserver(() => {
            if (!container.current) return
            renderer.setSize(container.current.clientWidth, container.current.clientHeight)
            camera.aspect = container.current.clientWidth / container.current.clientHeight
            camera.updateProjectionMatrix()
            console.log("teste")

            controls.update()
            renderer.render(scene, camera)
        })

        resizeObserver.observe(container.current)

        return () => {

            resizeObserver.disconnect()
            if (container.current) {
                const duplicated_canvas = container.current.querySelector('canvas')
                if (duplicated_canvas) container.current.removeChild(duplicated_canvas)

            }

            scene.clear()
        }

    }, [planet])

    return <div ref={container} className='w-full h-[300px] lg:w-[40%] lg:h-auto' />
}
