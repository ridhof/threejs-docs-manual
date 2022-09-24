import css from './style.css';
import { checkWebGL, setupDomText, setupLine, setupTextGeometry } from './js';

function main() {
  checkWebGL();
  // setupLine();
  // setupDomText();
  setupTextGeometry();
}

main();
