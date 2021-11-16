/**
 * Adaptive adjustment of text width in fixed width container.
 * 固定宽度容器中的文字宽度自适应调整
 */
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.css';

type Props = {
  children: React.ReactNode[];
};

const TextWidthAdaptive: React.FunctionComponent<Props> = ({ children }) => {
  //
  const $dom = useRef<HTMLElement>();
  const [style, setStyle] = useState({});

  useEffect(() => {
    const $parent = $dom.current?.parentElement;

    if (!$parent) return;

    const width = $dom.current?.getBoundingClientRect().width;
    const parentWidth = $parent.getBoundingClientRect().width;

    if (width > parentWidth) {
      setStyle({ transform: `scale(${parentWidth / width})`, transformOrigin: 'left' });
    }

    // eslint-disable-next-line consistent-return
    return () => {
      setStyle({});
    };
  }, [children]);

  // prettier-ignore
  return (
    <span ref={ $dom } className={ styles['m-text'] } style={ style }>
      { children }
    </span>
  )
};

export default TextWidthAdaptive;
