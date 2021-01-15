import React, { useContext } from 'react'
import { CgMenuHotdog } from 'react-icons/cg'
import { MenuContext } from './MenuProvider'
import styles from '../../styles/MenuBtn.module.css'

const MenuBtn = _ => {
  const { menuBtnProps: { toggleMenu } } = useContext(MenuContext)

  return (
    <div className={styles.menuBtn} onClick={toggleMenu}>
      <CgMenuHotdog size="4rem" />
    </div>
  )
}

export default MenuBtn