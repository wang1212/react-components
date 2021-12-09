# TextWidthAdaptive

Adaptive adjustment of text width in fixed width container.

> Story: The amount of money is displayed in a fixed-width container, but the initial font size is large, and only a maximum of 100,000 is allowed. Once it reaches this magnitude, the text will exceed the container and affect the overall layout. Therefore, the component is created, and only when the width of the text exceeds the container, the CSS property `transform: scale(n)` is used to scale to fit the width of the container.

> Another story, a fixed-width container needs to display a text that may occupy multiple lines. If the text just occupies one line and exceeds a few characters, do not display it in a new line. Therefore, a limit is provided for the width ratio of the first line of text. When the ratio is less than or equal to this ratio, it will be scaled to allow only one line to be displayed. Otherwise, no special processing will be performed and the display will be automatically wrapped.

## Usage

### Scene 1

Single line of text.

Source:

```
<div style={{ width: '100px' }}>
  $1234567.89
</div>
```

To:

```
<div style={{ width: '100px' }}>
  <TextWidthAdaptive>
    $1234567.89
  </TextWidthAdaptive>
</div>
```

### Scene 2

Multiline text.

Source:

```
<div style={{ width: '100px' }}>
  Some very long text
</div>
```

To:

```
<div style={{ width: '100px' }}>
  <TextWidthAdaptive text"Some very long text" widthRatioThreshold="1.2" />
</div>
```
