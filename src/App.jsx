import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'
import styles from './styles/app.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author:{
      name: 'Fernanda Mendonça de Pinho',
      role: 'Desenvolvedora',
      avatarUrl: 'https://avatars.githubusercontent.com/u/81486566?v=4'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishAt: new Date('2023-06-08 15:41:00'),
  },
  {
    id: 2,
    author:{
      name: 'Leonardo Dias Lissone Santomero',
      role: 'Desenvolvedor',
      avatarUrl: 'https://avatars.githubusercontent.com/u/57052110?v=4'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      {type: 'link', content: '👉 devonlane.design'}
    ],
    publishAt: new Date('2023-06-01 15:41:00'),
  },
]

function App() {

  return (
    <>
     <Header />
     
     <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })
        }
      </main>
     </div>
    </>
  )
}

export default App
