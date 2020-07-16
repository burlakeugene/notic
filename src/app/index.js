import Notifier from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let notifier = new Notifier(),
    buttons = document.querySelectorAll('[data-notifier-type]');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let type = button.getAttribute('data-notifier-type'),
        message = button.getAttribute('data-notifier-message');
        console.log(message);
      if (type === 'loading-on') {
        notifier.loadingOn();
      } else if (type === 'loading-off') {
        notifier.loadingOff();
      } else {
        notifier.addMessage({
          message,
          type,
        });
      }
    });
  });
});
