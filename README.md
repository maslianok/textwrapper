##jQuery плагин для обертки текста

######Плагин размещает текст в блоке с максимально возможным размером шрифта.

Примеры использования:

*Стандартные настройки:*

```javascript
$('#tw1').textwrapper();
```

*Расширенные настройки:*

```javascript
$('#tw2').textwrapper({fontSizeMax:24, fontSizeMin:12, width:'50%', height:'200px'});
```

где
  * **fontSizeMax** - максимальный размер шрифта в px (int)
  * **fontSizeMin** - минимальный размер шрифта в px (int)
  * **width** - ширина блока (str)
  * **height** - высота блока (str)

![пример использования](http://s7.postimage.org/fnyjlq9gr/image.png "пример использования")
