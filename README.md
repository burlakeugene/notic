
## Maskit

Demo:
[burlakeugene.github.io/maskit](https://burlakeugene.github.io/maskit/)
```
npm i --save maskit
```
```
0 - any number
A - any char
Ы - any cyrillic char
?+-()[]{}.,\\/-=_~`|'"  - autofilled chars, also you can wrap any symbol in brackets "{someChar}", and it will be autofilled
In other cases mask will be waiting for same char
```

```
<input type="text" data-maskit="+{7}(000) 000-00-00">
<input type="text" data-maskit="000 / 000">
```

```
document.querySelectorAll('input[data-maskit]').forEach((input, index) => {
  new Maskit(input, {
    mask: input.getAttribute('data-maskit'),
    notFilledClear: true,
    onFilled: scope => {},
    offFilled: scope => {},
    onBlur: scope => {},
    onChange: scope => {},
    onInit: scope => {}
  });
});
```
