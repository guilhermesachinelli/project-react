import styles from './page.module.css'
import './globals.css'
export default function Home() {
  return (
    <div className={styles.container}>
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
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h1>Acessibilidade</h1>
          <p>Nossa plataforma foi projetada com o usuário em mente, tornando a programação acessível a todos, independentemente de seu nível de conhecimento prévio.</p>
        </div>
        <div className={styles.card}>
          <h1>Variedade de Linguagens e Tecnologias</h1>
          <p> Temos uma ampla gama de linguagens e tecnologias. Desde linguagens populares como Python, JavaScript e Java até frameworks e bibliotecas de última geração.</p>
        </div>
        <div className={styles.card}>
          <h1>Aprendizado Interativo e Prático</h1>
          <p>Acreditamos que a melhor maneira de aprender programação é na prática. Oferecemos uma experiência de aprendizado, na qual você pode escrever código real desde o início. </p>
          </div>
      </div>
      <div className={styles.kalix}>

      </div>
    </div>
  )
}
