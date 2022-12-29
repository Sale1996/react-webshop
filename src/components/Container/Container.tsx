import React, { FunctionComponent, ReactNode} from 'react';
import styles from './styles.module.css'
import { classNames } from 'utils';
interface IProps {
    className?:string,
    children:ReactNode
    size?:'xs' | 'sm' | 'md' | 'xl'
}
const Container:FunctionComponent<IProps> = ({children, className='', size='xl'}) => {
  
  return (
    <div className={classNames(styles.container, styles[size], className)}>{children}</div>
  );
};

export default Container;
