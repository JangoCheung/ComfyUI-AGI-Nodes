import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

const NAME = "EasyNodes.Main";

app.registerExtension({
  name: NAME,
  async init() {
    console.log('init');
  },

  async setup() {
    const menu = document.querySelector('.comfy-menu');

    // hook restart
    const rebootBtn = document.createElement('button');

    rebootBtn.textContent = 'Restart';
    rebootBtn.onclick = () => {
      api.fetchApi('/agi/reboot', { method: 'post'});
    };

    menu.appendChild(rebootBtn);
  }
});