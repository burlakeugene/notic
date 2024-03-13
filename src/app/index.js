import Notic from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let notic = new Notic(),
    buttons = document.querySelectorAll(
      '[data-notic-message], [data-notic-type]'
    );
  window.n = notic;
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let type = button.getAttribute('data-notic-type'),
        message = button.getAttribute('data-notic-message'),
        delay = button.getAttribute('data-notic-delay');
      if (type === 'loading-on') {
        notic.loadingOn();
      } else if (type === 'loading-off') {
        notic.loadingOff();
      } else {
        let newMessage = {
          message,
          type,
        };
        if (delay) newMessage.delay = delay;
        notic.addMessage(newMessage);
      }
    });
  });
  document.querySelectorAll('[data-notic-clear]').forEach((button) => {
    button.addEventListener('click', () => {
      notic.clear();
    });
  });
});
