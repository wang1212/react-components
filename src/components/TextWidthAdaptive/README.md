# TextWidthAdaptive

Adaptive adjustment of text width in fixed width container.

> Story: The amount of money is displayed in a fixed-width container, but the initial font size is large, and only a maximum of 100,000 is allowed. Once it reaches this magnitude, the text will exceed the container and affect the overall layout. Therefore, the component is created, and only when the width of the text exceeds the container, the CSS property `transform: scale(n)` is used to scale to fit the width of the container.

## Usage

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
