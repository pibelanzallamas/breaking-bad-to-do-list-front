import { useState } from 'react'
import './styles/app.css'

function App() {
  const [count, setCount] = useState(0)
  const usuario = "Brandon"
  const [dark, setDark] = useState(false)
  const [eng, setEng] = useState(false)

  function handleDarkMode(){
    setDark(!dark)
  }

  return (
    <main className={dark ? "main-dark" : "main-light"}>
        <h1><span>T</span><span>o</span> <span>D</span><span>o</span> <span>L</span><span>i</span><span>s</span><span>t</span></h1>

        <h2>Buen día {usuario},<span className='second-line'>
          <span>¿</span><span>Q</span><span>u</span><span>é</span> <span>d</span><span>e</span><span>s</span><span>e</span>a <span>h</span><span>a</span><span>c</span><span>e</span><span>r</span> <span>h</span><span>o</span><span>y</span>?</span> </h2>
          {/* ¿Qué desea hacer hoy?</span></h2> */}
        <input ty>
        
        </input>

        <button onClick={()=>handleDarkMode()}> {dark? "Modo Claro" : "Moso Oscuro"}</button>
    </main>
  )
}

export default App
