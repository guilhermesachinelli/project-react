"use client"
import styles from './page.module.css'
import './globals.css'
import { Header } from './components/header/Header'
import { useState } from 'react'
import  Comment  from 'models/Comment'
import { CommentList } from 'models/CommentList'

export default function Home() {
  const newComment = new Comment('');
  const [comments, setComments] = useState(newComment);
  const listComments = new CommentList();
  const [commentList, setCommentList] = useState(listComments);
  const addComeent = (e) => {
    e.preventDefault();
    listComments.addComment(comments);
    setCommentList(listComments);
  }
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.starter}>
        <div className={styles.contentTittle}>
          <span>🖐<b>"Hello World"</b></span>
          <h1>Tudo que você precisa pra evoluir</h1>
          <h1>em programação em um só lugar</h1>
          <section>
            <h3>Domine os fundamentos e torne-se um dev especializado nas tecnologias</h3>
            <h3> mais modernas e acesse as melhores oportunidades do mercado.</h3>
          </section>
        </div>
      </div>
      <h2>Somos uma plataforma completa de</h2>
      <h2> aprendizado em programação</h2>
      <div className={styles.card}>
        <h1>Acessibilidade</h1>
        <p>Nossa plataforma foi projetada com o usuário em mente, tornando a programação acessível a todos, independentemente de seu nível de conhecimento prévio.</p>
        <hr />
        <h1>Aprendizado Interativo e Prático</h1>
        <p>Acreditamos que a melhor maneira de aprender programação é na prática. Oferecemos uma experiência de aprendizado, na qual você pode escrever código real desde o início. </p>
        <hr />
        <h1>Variedade de Linguagens e Tecnologias</h1>
        <p> Temos uma ampla gama de linguagens e tecnologias. Desde linguagens populares como Python, JavaScript e Java até frameworks e bibliotecas.</p>
      </div>
      <div className={styles.kalix}>
        <h2>Método de aprendizado</h2>
        <div className={styles.cardContainer}>
          <div className={styles.kalixCard}>
            <h1>Foco</h1>
            <p>Programação é um universo infinito, logo ter foco é essencial. Nós vamos direto ao ponto no que realmente importa para você dominar as ferramentas.</p>
          </div>
          <hr />
          <div className={styles.kalixCard}>
            <h1>Prática</h1>
            <p>A programação é uma disciplina prática. São as horas de código que vão te preparar e dar a experiência necessária para tomar as melhores decisões no mundo real.</p>
          </div>
          <hr />
          <div className={styles.kalixCard}>
            <h1>Grupo</h1>
            <p>A conexão entre Devs impulsiona seu repertório técnico, suas habilidades comportamentais e sua rede de contatos. Além de ajudar a assimilar e fixar todo aprendizado.</p>
          </div>
        </div>
      </div>
      <form onSubmit={addComeent}>
        <input type="text" onChange={(e) => setComments(e.target.value)} />
        <button type="submit">É ISSO MANÉ</button>
      </form>
      {
        commentList.comments.map((comment) => (
          <div key={comment.id}>
            <h1>{comment.comment}</h1>
            
          </div>
        ))
      }
    </div>
  )
}
