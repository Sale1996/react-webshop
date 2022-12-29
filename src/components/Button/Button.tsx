import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils'
 import styles from  './styles.module.css';

interface IProps extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
}

const Button:React.FC<IProps> = ({ children, className='', ...props}) => {
  const classes = classNames(styles.btn, className)
  return (
    <button className={classes} {...props}>
       { children }
    </button>
  )
}

export default Button;