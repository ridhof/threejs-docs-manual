import {
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

function initRenderer() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  return new WebGLRenderer({ canvas });
}

function initCamera() {
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  return new PerspectiveCamera(fov, aspect, near, far);
}

function initBoxGeometry() {
  const width = 1;
  const height = 1;
  const depth = 1;
  return new BoxGeometry(width, height, depth);
}

function initLight() {
  const color = 0xFFFFFF;
  const intensity = 1;
  return new DirectionalLight(color, intensity);
}

function initInstance(scene, geometry, color, x) {
  const material = new MeshPhongMaterial({ color: color });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  cube.position.x = x;
  return cube;
}

function main() {
  const renderer = initRenderer();
  const camera = initCamera();
  camera.position.z = 2;

  const scene = new Scene();

  const geometry = initBoxGeometry();

  const cubes = [
    initInstance(scene, geometry, 0x44aa88, 0),
    initInstance(scene, geometry, 0x8844aa, -2),
    initInstance(scene, geometry, 0xaa8844, 2),
  ];

  const light = initLight();
  light.position.set(-1, 2, 4);
  scene.add(light);

  renderer.render(scene, camera);

  function render(time) {
    time *= 0.001;

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

export function renderFundamental() {
  main();
}
