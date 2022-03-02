import { AppBoard } from './AppBoard.js';
import singleSpaHtml from 'single-spa-html';

customElements.define('app-board', AppBoard);
const htmlLifecycles = singleSpaHtml({
  template: '<app-board></app-board>',
})

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;

