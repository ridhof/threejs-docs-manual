import { 
  Color, 
  DirectionalLight,
  Fog, 
  Group, 
  Mesh, 
  MeshPhongMaterial, 
  PerspectiveCamera,
  PointLight,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export function setupDomText() {
  const div = document.createElement('div');
  div.id = 'info';
  div.innerText = 'Description';
  document.body.appendChild(div);
}

export function setupTextGeometry() {
  const camera = new PerspectiveCamera(
    30, 
    window.innerWidth / window.innerHeight,
    1,
    1500
  );
  camera.position.set(0, 400, 700);
  const cameraTarget = new Vector3(0, 150, 0);

  const scene = new Scene();
  scene.background = new Color(0x000000);
  scene.fog = new Fog(0x000000, 250, 1400);

  const dirLight = new DirectionalLight(0xffffff, 0.125);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);

  const pointLight = new PointLight(0xffffff, 1.5);
  pointLight.position.set(0, 100, 90);
  scene.add(pointLight);

  const container = document.createElement('div');
  document.body.appendChild(container);

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const loader = new FontLoader();
  loader.load('../helvetiker_regular.typeface.json', function (font) {
    const geometry = new TextGeometry('Hello three.js!', {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    geometry.computeBoundingBox();
    const centerOffset = - 0.5 * (geometry.boundingBox.max.x- geometry.boundingBox.min.x);
    const materials = [
      new MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
      new MeshPhongMaterial({ color: 0xffffff }),
    ];
    
    const textMesh = new Mesh(geometry, materials);
    textMesh.position.x = centerOffset;
    textMesh.position.y = 30;
    textMesh.position.z = 0;

    textMesh.rotation.x = 0;
    textMesh.rotation.y = Math.PI * 2;

    const group = new Group();
    group.position.y = 100;
    group.add(textMesh);

    scene.add(group);
    camera.lookAt(cameraTarget);

    renderer.clear();
    renderer.render(scene, camera);
  });
}
