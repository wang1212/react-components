/**
 * Adaptive adjustment of text width in fixed width container.
 *
 * * Scene 1, the text is only one line, adaptively shrink when it exceeds the width of the container.
 * ```
 * <div style={{ width: '100px' }}>
 *  <TextWidthAdaptive>
 *    $1234567.89
 *  </TextWidthAdaptive>
 * </div>
 * ```
 *
 * * Scene 2, the text may have multiple lines, and the first line will be adaptively reduced when the width of
 * * the first line does not exceed the specified ratio threshold, otherwise it will not be processed
 * ```
 * <div style={{ width: '100px' }}>
 *  <TextWidthAdaptive text"Some very long text" widthRatioThreshold="1.2" />
 * </div>
 * ```
 */
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

type Props = {
  children: React.ReactNode[];
  text?: string;
  widthRatioThreshold?: number;
};

const TextWidthAdaptive: React.FunctionComponent<Props> = ({ children, text, widthRatioThreshold }) => {
  //
  const $dom = useRef<HTMLElement>();
  const [style, setStyle] = useState({});
  const [scale, setScale] = useState(true);

  useEffect(() => {
    const $parent = $dom.current?.parentElement;

    if (!$parent) return;

    const width = $dom.current?.getBoundingClientRect().width;
    const parentWidth = $parent.getBoundingClientRect().width;

    if (width > parentWidth) {
      if (!text || width / parentWidth <= widthRatioThreshold) {
        setStyle({ transform: `scale(${parentWidth / width})`, transformOrigin: 'left' });
      } else {
        setScale(false);
      }
    } else {
      setScale(false);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      setStyle({});
      setScale(true);
    };
  }, [children, text, widthRatioThreshold]);

  if (!scale) return children || text;

  // prettier-ignore
  return (
    <span ref={ $dom } className={ styles['m-text'] } style={ style }>
      { children || text }
    </span>
  );
};

export default TextWidthAdaptive;
