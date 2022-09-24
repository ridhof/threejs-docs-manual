import { default as WebGL } from 'three/examples/jsm/capabilities/WebGL';

export function checkWebGL() {
  if (!WebGL.isWebGLAvailable()) {
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
    throw new Error(warning);
  }
}
