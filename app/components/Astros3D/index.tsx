import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Astros3D() {
    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!container.current) return

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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.rotateSpeed = 0.4

        renderer.render(scene, camera)

        textureLoader.load('EarthTexture.jpg', (texture) => {
            material.map = texture
            material.needsUpdate = true
        })

        function animate() {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)

        }

        animate()

        function handleResize() {
            if (!container.current) return
            renderer.setSize(container.current.clientWidth, container.current.clientHeight)
            camera.aspect = container.current.clientWidth / container.current.clientHeight
            camera.updateProjectionMatrix()

            controls.update()
            renderer.render(scene, camera)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            container.current?.removeChild(renderer.domElement)
            controls.dispose()
            renderer.dispose()
        }
    }, [])

    return <div ref={container} className="lg:w-[33%]" />
}
