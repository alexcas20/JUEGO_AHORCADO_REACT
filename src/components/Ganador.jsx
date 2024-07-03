import { useNavigate } from "react-router-dom"

export const Ganador = () => {
  const navegacion = useNavigate();
  return (
    <section className="ganador">
    <h2>Muy bien, has ganado! y continuas manteniendo tu cabeza sobre los hombros</h2>
    <img src={'/images/el_ahorcado1.png'} alt="" />
    <button onClick={() => navegacion('/')}>Volver a jugar</button>
  </section>
  )
}
