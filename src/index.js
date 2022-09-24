import css from './style.css';
import { 
  animateModel,
  checkWebGL, 
  setupDomText, 
  setupLine, 
  setupTextGeometry 
} from './js';

function main() {
  checkWebGL();
  // setupLine();
  // setupDomText();
  // setupTextGeometry();
  animateModel();
}

main();
