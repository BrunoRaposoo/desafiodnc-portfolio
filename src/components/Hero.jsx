import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import curriculo from '../../curriculoDev.pdf'

export function Hero() {
  const [text, setText] = useState('')
  const toChange = ['Bruno Rapôso', 'Desenvolvedor full-stack']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100
  const [delta, setDelta] = useState(100)

  useEffect(() => {
    let ticker =setInterval(() => {
      toType()
    }, delta);
    return() => {clearInterval(ticker)}
  }, [text])

  const toType = () => {
    let i = loop % toChange.length
    let fullText = toChange[i]
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updateText)

    if(!isDeleting && updateText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false)
      setDelta(period)
      setLoop(loop+1)
    }
  }

  const handleDownload = () => {
    const pdfUrl = {curriculo};
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Curriculo_Bruno_Raposo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.hero}>
      <h1>Olá, eu sou {text}</h1>
      <p>
        Construo soluções completas, do front-end ao back-end. Transformo código 
        em experiências incríveis. Sou o profissional versátil que une tecnologia 
        e usabilidade. Vamos criar algo incrível  e desafiador juntos!
      </p>
      <button onClick={handleDownload}>Download resumo</button>
    </div>
  )
}