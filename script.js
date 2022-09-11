function meshBasicMaterial(color) {
  return new THREE.MeshBasicMaterial({ color });
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const greenMaterial = meshBasicMaterial(0x00ff00);
const redMaterial = meshBasicMaterial(0xff0000);
const greenCube = new THREE.Mesh(geometry, greenMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const yellowCube = new THREE.Mesh(
  geometry, 
  meshBasicMaterial(0xffff00)
);
scene.add(greenCube);
scene.add(redCube);
scene.add(yellowCube);

greenCube.position.x = -1.5;
redCube.position.x = 1.5;
yellowCube.position.y = -1.5;
camera.position.z = 5;

function rotate(cube, x, y) {
  cube.rotation.x += x;
  cube.rotation.y += y;
};

function animate() {
  requestAnimationFrame(animate);

  rotate(greenCube, 0.01, 0.01);
  rotate(redCube, 0.01, 0.01);
  rotate(yellowCube, 0.01, 0.01);

  renderer.render(scene, camera);
}

animate();
