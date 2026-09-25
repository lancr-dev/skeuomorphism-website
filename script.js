// Native buttons, checkboxes, ranges, and details keep the controls usable
// with a mouse, keyboard, or touch. JavaScript adds feedback to the workshop.
(() => {
  const panel = document.querySelector('.workshop-panel');

  if (!panel) return;

  const shutter = panel.querySelector('[data-shutter]');
  const shutterStatus = panel.querySelector('[data-shutter-status]');
  const lamp = panel.querySelector('[data-lamp]');
  const lampStatus = panel.querySelector('[data-lamp-status]');
  const panelIndicator = panel.querySelector('.workshop-panel-indicator');
  const level = panel.querySelector('[data-level]');
  const levelOutput = panel.querySelector('[data-level-output]');

  if (shutter && shutterStatus) {
    let pressCount = 0;
    let releaseTimer;

    shutter.addEventListener('click', () => {
      pressCount += 1;
      shutterStatus.textContent = `Shutter pressed ${pressCount} ${pressCount === 1 ? 'time' : 'times'}`;

      window.clearTimeout(releaseTimer);
      shutter.classList.add('is-pressed');
      releaseTimer = window.setTimeout(() => {
        shutter.classList.remove('is-pressed');
      }, 180);
    });
  }

  if (lamp && lampStatus && panelIndicator) {
    const updateLamp = () => {
      panel.classList.toggle('is-lamp-on', lamp.checked);
      lampStatus.textContent = lamp.checked ? 'Lamp on' : 'Lamp off';
      panelIndicator.textContent = lamp.checked ? 'LAMP ON' : 'LAMP OFF';
    };

    lamp.addEventListener('change', updateLamp);
    updateLamp();
  }

  if (level && levelOutput) {
    const updateLevel = () => {
      levelOutput.value = level.value;
      levelOutput.textContent = level.value;
    };

    level.addEventListener('input', updateLevel);
    level.addEventListener('change', updateLevel);
    updateLevel();
  }
})();
