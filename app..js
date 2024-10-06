// Three.js setup for a simple 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a basic planet (sphere)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x0077be });
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.01;  // Make the planet spin
    renderer.render(scene, camera);
}

animate();
