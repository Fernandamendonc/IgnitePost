import styles from './styles.module.css'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'
import React from 'react'

interface Author {
  readonly name: string;
  readonly role: string;
  readonly avatarUrl: string;
}

interface Content {
  readonly type: 'paragraph' | 'link'
  readonly content: string;
}

export interface PostType {
  readonly id: number
  readonly author: Author
  readonly content: Content[]
  readonly publishAt: Date
}

interface PostProps {
  post: PostType
}


export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e: FormEvent){
    e.preventDefault()

    setComments((oldState) =>[...oldState, newCommentText])
  
    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value)
  }

  function DeleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comments => {
      return comments !== commentToDelete
    })
    
    setComments(commentsWithoutDeleteOne)
  }

  const isCommentNewEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <div className={styles.time} title={publishedDateFormatted}>{publishedDateRelativeToNow}</div>
      </header>

      <div className={styles.content}>
        {post.content.map(line =>{
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link'){
            return <p key={line.content} ><a href='' target="_blank">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          value={newCommentText}
          //Toda vez que o estado mudar a textarea vai refletir nessa ação do value
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          // required - html
        />
        
        <footer>
          <button disabled={isCommentNewEmpty} type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{
          return (
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={DeleteComment}
          />)
        })}
      </div>
    </article>
  )
}