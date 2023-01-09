import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils'
 import styles from  './styles.module.css';

interface IProps extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  disabled?: boolean
}

const Button:React.FC<IProps> = ({ children, className='', disabled, ...props}: IProps) => {
  const classes = classNames(styles.btn, className)
  return (
    <button className={classes} disabled={disabled} {...props}>
       { children }
    </button>
  )
}

export default Button;