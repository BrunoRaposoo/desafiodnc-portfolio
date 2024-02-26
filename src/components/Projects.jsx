import { Card } from '../elements/Card'
import styles from './Projects.module.css'
import weather from '../assets/weather.svg'
import portfolio from '../assets/portfolio.svg'
import todo from '../assets/todo.svg'
import { useState } from 'react'

export function Projects() {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [animate, setAnimate] = useState(false)

  const handleNewComment = e => {
    setNewComment(e.target.value)
  }

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments(prevComments => [...prevComments, newComment])
      setNewComment('')
    }
  }

  const handleAnimateButton = () => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 100)
  }

  const onClickButton = () => {
    addComment()
    handleAnimateButton()
  }
  return (
    <div className={styles.projects} id='projects'>
      <h3>Projetos</h3>

      <Card 
        title='DNC Weather' 
        site={'https://dazzling-custard-4f6da6.netlify.app/'}
        description={'Página que fornece informações sobre endereço e meteorologia utilizando API ViaCEP e Open-Meteo'}
        img={weather}
      />
      <Card 
        title='Portfólio' 
        site={'https://brunoraposo.vercel.app/'}
        description={'Portfólio profissional de projetos desenvolvidos.'}
        img={portfolio}
      />
      <Card 
        title='ToDo List' 
        site={'https://todo-list-wheat-ten.vercel.app/'}
        description={'site ToDo em que o usuário pode organizar suas tarefas e acompanhar o que foi realizado e suas pendências.'}
        img={todo}
      />

      <div className={styles.comment}>
        <div className={styles.textarea}>
          <textarea value={newComment} onChange={handleNewComment} name="" id="" cols="30" rows="10" placeholder='Adicione seu comentário'></textarea>
          <button className={animate ? styles['button-animation'] : ''} onClick={onClickButton}>Adicionar comentário</button>
        </div>

        <div className={styles.commentList}>
          <h2>Comentários:</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}