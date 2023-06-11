import styles from './styles.module.css'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState([])

  const publishdDateFormatted = format(publishAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishdDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments, comments.lenght + 1])
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <div className={styles.time} title={publishdDateFormatted}>{publishdDateRelativeToNow}</div>
      </header>

      <div className={styles.content}>
        {content.map(line =>{
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          }else if(line.type === 'link'){
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />
        
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(coment =>{
          return (
          <Comment 
            content={comment}
          />)
        })}
      </div>
    </article>
  )
}