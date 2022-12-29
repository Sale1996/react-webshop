import React from 'react'
import styles from './styles.module.css';

interface IProps {
    title:string;
}
const Headline = ({title}:IProps) => {
  
  return (
    <h1 className={styles.headline}>{title}</h1>
  )
}

export default Headline