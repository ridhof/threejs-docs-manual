// officially borked, will be fixed later on. thanks fp.
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

function meshBasicMaterial(color) {
  return new MeshBasicMaterial({ color });
}

export function setupCube() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
  );

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(1, 1, 1);
  const greenMaterial = meshBasicMaterial(0x00ff00);
  const redMaterial = meshBasicMaterial(0xff0000);
  const greenCube = new Mesh(geometry, greenMaterial);
  const redCube = new Mesh(geometry, redMaterial);
  const yellowCube = new Mesh(
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

  return { 
    greenCube, 
    redCube, 
    yellowCube, 
    scene, 
    camera, 
    renderer 
  };
}

function rotate(cube, x, y) {
  cube.rotation.x += x;
  cube.rotation.y += y;
};

export function animateCube(
  greenCube,
  redCube,
  yellowCube,
  scene,
  camera,
  renderer,
) {
  requestAnimationFrame(animateCube);

  rotate(greenCube, 0.01, 0.01);
  rotate(redCube, 0.01, 0.01);
  rotate(yellowCube, 0.01, 0.01);

  renderer.render(scene, camera);
}

