import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Contexto } from "../contexto/Contexto"

export const Final = () => {

  const {laCorrecta} = useContext(Contexto);

  const navegacion = useNavigate();
  return (
    <section className="final">
      <h1>Vaya, respuesta incorrecta!</h1>
      <h2>La respuesta correcta era : <strong>{laCorrecta}</strong></h2>
      <div className="imagen">
        <img src={'/images/el_ahorcado6.png'} alt=""  />
        <button onClick={() => navegacion('/juego')}>Volver a jugar</button>
      </div>
    </section>
  )
}
