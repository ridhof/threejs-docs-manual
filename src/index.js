import css from './style.css';
import { checkWebGL, setupDomText, setupLine } from './js';

function main() {
  checkWebGL();
  setupLine();
  setupDomText();
}

main();
