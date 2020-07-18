import Notifier from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let notifier = new Notifier(),
    buttons = document.querySelectorAll('[data-notifier-type]');
  window.n = notifier;
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let type = button.getAttribute('data-notifier-type'),
        message = button.getAttribute('data-notifier-message'),
        delay = button.getAttribute('data-notifier-delay');
      if (type === 'loading-on') {
        notifier.loadingOn();
      } else if (type === 'loading-off') {
        notifier.loadingOff();
      } else {
        let newMessage = {
          message,
          type
        };
        if(delay) newMessage.delay = delay;
        notifier.addMessage(newMessage);
      }
    });
  });
  document.querySelectorAll('[data-notifier-clear]').forEach((button) => {
    button.addEventListener('click', () => {
      notifier.clear();
    });
  })
});