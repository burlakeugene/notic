import './index.scss';

const getStyle = function (elem, rule) {
  var result = '';
  if (document.defaultView && document.defaultView.getComputedStyle) {
    result = document.defaultView
      .getComputedStyle(elem, '')
      .getPropertyValue(rule);
  } else if (elem.currentStyle) {
    rule = rule.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();
    });
    result = elem.currentStyle[rule];
  }
  return result;
};

export default class Notic {
  constructor(props = {}) {
    this.animationTime = props.animationTime || 300;
    this.types = {
      default: 'info',
      list: {
        loading: {
          icon:
            '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/><animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/></circle></svg>',
        },
        success: {
          icon:
            '<svg viewBox="0 0 512 512"><path d="M387.106,167.497c-5.857-5.857-15.354-5.858-21.212,0.001L220.705,312.685l-74.599-74.597 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0,21.213l85.205,85.203c2.929,2.929,6.768,4.393,10.606,4.393 c3.839,0,7.678-1.464,10.606-4.394L387.106,188.71C392.964,182.853,392.964,173.355,387.106,167.497z"/><path d="M437.019,74.981C388.667,26.629,324.379,0,256,0C187.62,0,123.333,26.629,74.981,74.981C26.628,123.334,0,187.621,0,256 c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,256,512s132.667-26.628,181.019-74.98 C485.371,388.668,512,324.381,512,256C512,187.621,485.371,123.334,437.019,74.981z M256,482C131.383,482,30,380.617,30,256 S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/></svg>',
        },
        error: {
          icon:
            '<svg viewBox="0 0 475.2 475.2"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>',
        },
        info: {
          icon:
            '<svg viewBox="0 0 512 512"><path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"/><path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"/><path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"/></svg>',
        },
      },
    };
    this.state = {
      loading: false,
      messages: {
        list: [],
      },
    };
    this.rootDOM = null;
    this.init();
  }
  setTransition(elem, time = this.animationTime) {
    if (!elem) return;
    elem.style.transition = 'all ' + time / 1000 + 's';
    elem.style.webkitTransition = 'all ' + time / 1000 + 's';
  }
  build() {
    let { types } = this;
    this.rootDOM = document.createElement('div');
    this.rootDOM.classList.add('notic');
    this.setTransition(this.rootDOM);
    this.loadingDom = document.createElement('div');
    this.loadingDom.classList.add('notic-loading');
    this.loadingDom.innerHTML = types.list['loading'].icon;
    this.setTransition(this.loadingDom);
    this.rootDOM.appendChild(this.loadingDom);
    document.body.appendChild(this.rootDOM);
  }
  destroy() {
    if (this.rootDOM) {
      this.rootDOM.parentNode.removeChild(this.rootDOM);
    }
  }
  init() {
    this.destroy();
    this.build();
  }
  addMessage(message) {
    let { types } = this,
      { messages } = this.state;
    messages.list.push(message);
    this.buildMessage(message);
  }
  buildMessage(message) {
    if (!message) return;
    let { rootDOM, types } = this,
      messageDom = document.createElement('div'),
      messageDomInner = document.createElement('div'),
      messageDomInnerIcon = document.createElement('div'),
      messageDomInnerText = document.createElement('div');
    message.type = types.list[message.type] ? message.type : types.default;
    message.id = +new Date();
    messageDom.classList.add('notic-message');
    messageDom.classList.add('notic-message__' + message.type);
    if (!message.message) messageDom.classList.add('notic-message__empty');
    messageDomInner.classList.add('notic-message-inner');
    messageDomInnerIcon.classList.add('notic-message-icon');
    messageDomInnerText.classList.add('notic-message-text');
    messageDomInnerIcon.innerHTML = types.list[message.type].icon;
    messageDomInnerText.innerHTML = message.message;
    messageDomInner.appendChild(messageDomInnerIcon);
    messageDomInner.appendChild(messageDomInnerText);
    messageDom.appendChild(messageDomInner);
    this.setTransition(messageDom);
    message.dom = messageDom;
    rootDOM.appendChild(message.dom);
    message.height = 0;
    message.visibleHeight =
      parseFloat(messageDomInner.clientHeight) +
      parseFloat(getStyle(messageDomInner, 'margin-top').replace('px', '')) +
      parseFloat(getStyle(messageDomInner, 'margin-bottom').replace('px', ''));
    message.dom.style.height = message.height;
    message.dom.onclick = () => {
      this.hideMessage(message);
    };
    this.showMessage(message);
  }
  showMessage(message) {
    setTimeout(() => {
      message.height = message.visibleHeight;
      message.dom.style.height = message.height + 'px';
      message.dom.classList.add('notic-message__visible');
      if (message.delay) {
        message.timeout = setTimeout(() => {
          this.hideMessage(message);
        }, message.delay);
      }
    }, 50);
  }
  hideMessages() {
    let { messages } = this.state;
    messages.list.forEach((message, index) => {
      setTimeout(() => {
        this.hideMessage(message);
      }, index * this.animationTime);
    });
  }
  hideMessage(message) {
    if (!message.dom) return;
    clearTimeout(message.timeout);
    message.dom.classList.remove('notic-message__visible');
    message.dom.style.height = 0;
    setTimeout(() => {
      this.removeMessage(message);
    }, this.animationTime);
  }
  removeMessage(message) {
    let { messages } = this.state,
      index = messages.list.findIndex((item) => {
        return item.id === message.id;
      });
    messages.list.splice(index, 1);
    message.dom && message.dom.parentNode.removeChild(message.dom);
    message.dom = null;
  }
  loadingOn() {
    if (this.state.loading) return;
    clearTimeout(this.loaderTimeout);
    this.state.loading = true;
    this.rootDOM.classList.add('notic__loading');
    this.loaderTimeout = setTimeout(() => {
      this.loadingDom.classList.add('notic-loading__show');
    }, this.animationTime);
  }
  loadingOff() {
    if (!this.state.loading) return;
    clearTimeout(this.loaderTimeout);
    this.state.loading = false;
    this.loadingDom.classList.remove('notic-loading__show');
    this.loaderTimeout = setTimeout(() => {
      this.rootDOM.classList.remove('notic__loading');
    }, this.animationTime);
  }
  clear() {
    this.loadingOff();
    this.hideMessages();
  }
}
