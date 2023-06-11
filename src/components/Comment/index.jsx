import { Avatar } from '../Avatar'
import styles from '../Comment/styles.module.css'

import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment({ content }) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/81486566?v=4' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernanda Mendonça</strong>
              <span className={styles.time}>2023-06-08</span>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}