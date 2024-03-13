
## Notic

Demo:
[burlakeugene.github.io/notic](https://burlakeugene.github.io/notic/)

Usage:
```
npm i notic

import Notic from 'notic';

const Notification = new Notic({
  close: {
    button: true,
    area: true,
  },
  animation: {
    time: 300
  },
  classNames: {
    container: ['notic']
  }
});

Notification.addMessage({
  message: 'Success message',
  type: 'success',
  delay: 3000,
});
```