import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Im a Dev</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header