import { BlogCard } from '../elements/BlogCard'
import styles from './Blog.module.css'

export function Blog() {
  return (
    <div className={styles.blog} id='blog'>
      <h3>Blog</h3>
      <div className={styles.blogCards}>
        <BlogCard 
          title={'Fazendo um portfólio do zero'} 
          date={'26 feb 2024'} 
          category={'Desenvolvimento Web'} 
          description={'Desenvolver um site de portfólio é uma tarefa que envolve criar uma vitrine digital para exibir suas habilidades, projetos e experiências como profissional'}
        />

        <BlogCard 
          title={'Criando uma página de endereços e metereologia '}
          date={'26 feb 2024'} 
          category={'Desenvolvimento Web'} 
          description={'Desenvolver um sistema interno para os funcionários, que os ajudará a acessar informações críticas sobre endereços e previsões meteorológicas de maneira eficiente.'}
        />

      </div>
    </div>
  )
}