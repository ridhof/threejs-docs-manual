import { 
  Color,
  PerspectiveCamera, 
  Scene, 
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function setupModel() {
  const scene = new Scene();
  scene.background = new Color(0xffaa00);
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load('shiba/shiba.gltf', function (gltf) {
    scene.add(gltf.scene);
    console.log(gltf);
    camera.position.z = 2;
    camera.position.x = 1;
    camera.position.y = 0;
    camera.rotation.y = 1;
    renderer.render(scene, camera);
  }, undefined, function (error) {
    console.error(error);
  });
  return { renderer, scene, camera };
}

export function animateModel() {
  const { renderer, scene, camera } = setupModel();
  renderer.render(scene, camera);
}
