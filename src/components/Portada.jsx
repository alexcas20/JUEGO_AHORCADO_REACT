import { useNavigate } from "react-router-dom"

export const Portada = () => {

  const navegacion = useNavigate();

  return (
    <>
    <section>
    <h1>BIENVENIDO/A</h1>
    <button className="boton-portada" onClick={() => navegacion("/juego")}>Jugar</button>
    </section>
     
    
    </>
  )
}
