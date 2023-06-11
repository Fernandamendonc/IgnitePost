import { PencilLine } from 'phosphor-react'

import styles from '../Sidebar/styles.module.css'
import { Avatar } from '../Avatar'
import React from 'react'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50' />
      
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/81486566?v=4"/>
        <strong>Fernanda Mendonça</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}