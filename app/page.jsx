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
    </div>
  )
}
