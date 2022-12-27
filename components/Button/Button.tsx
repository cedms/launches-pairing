import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

export enum ButtonSize {
  Small,
  Medium,
  Large
}

export enum ButtonColor {
  Primary,
  Secondary,
}

interface ButtonProps {
  className?: String;
  onClick?: () => void;
  text: String;
  size?: ButtonSize;
  color?: ButtonColor;
}

const getStyleBySize = (styles, size) => {
  if (size===ButtonSize.Small) return styles.small;
  if (size===ButtonSize.Medium) return styles.medium;
  if (size===ButtonSize.Large) return styles.large;
}

const getStyleByColor = (styles, color) => {
  if (color===ButtonColor.Primary) return styles.primary;
  if (color===ButtonColor.Secondary) return styles.secondary;
}

export default function Button({
  className,
  color=ButtonColor.Primary,
  onClick,
  size=ButtonSize.Medium,
  text,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        getStyleBySize(styles, size),
        getStyleByColor(styles, color),
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
