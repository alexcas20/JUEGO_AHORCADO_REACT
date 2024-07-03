import { useContext, useEffect, useState } from "react";
import { PALABRAS } from "../assets/PALABRAS";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../contexto/Contexto";

export const Juego = () => {
  const [nmAleatorio, setNmAleatorio] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);

  //control de fallos
  const [imagen, setImagen] = useState(1);

  //context 
  const {escribirCorrecta} = useContext(Contexto);

  const navegacion = useNavigate();

  //colores para botones
  const misColores = [
    { backgroundColor: "white" },
    { backgroundColor: "green", color: "white" },
    { backgroundColor: "red", color: "white" },
  ];

  //array para letras correctas
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  // letras incorrectas
  const [letrasIncorrectas, setLetrasInorrectas] = useState([]);

  //letras botones
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // string => array
  const letras_array = letras.split("");

  useEffect(() => {
    setNmAleatorio(Math.floor(Math.random() * PALABRAS.length));
  }, []);

  //Cuando numAleatorio ya este seteado
  useEffect(() => {
    console.log(nmAleatorio);
    setPalabra(PALABRAS[nmAleatorio].palabra.split(""));
    escribirCorrecta(PALABRAS[nmAleatorio].palabra);
  }, [nmAleatorio]);

 

  const letraPulsada = (e) => {
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, letra]);
    if (palabra.indexOf(letra) >= 0) {
      setLetrasCorrectas([...letrasCorrectas, letra]);
    } else {
      setLetrasInorrectas([...letrasIncorrectas, letra]);
      if(imagen > 5){
        navegacion('/final')
      } else 
      setImagen(imagen + 1);
    } 
  };

   // para setear letras correctas
   useEffect(() => {
    let noEncontrado = 0;
    palabra.map((p) => {
      if(misLetras.find(e => e === p) === undefined){
        noEncontrado++;
      }
   })
   if(noEncontrado === 0 && letrasCorrectas.length > 0){
    navegacion('/ganado');
   }
  }, [letrasCorrectas])

  console.log("Palabra => ", palabra);
  console.log(misLetras);

  return (
    <>
      <article className="cont-pregunta">
        {PALABRAS[nmAleatorio].pregunta}:
      </article>
      <section className="cont-palabra">
        {palabra.map((letra, i) =>
          misLetras.indexOf(letra) === -1 ? (
            <div className="raya" key={i}></div>
          ) : (
            <div className="raya" key={i}>
              {letra.toUpperCase()}
            </div>
          )
        )}
      </section>
      <section className="cont-botones">
        {letras_array.map((letra) =>
          letrasCorrectas.find((e) => e === letra) ? (
            <button style={misColores[1]} key={letra}>
              {letra}
            </button>
          ) : letrasIncorrectas.find((e) => e === letra) ? (
            <button style={misColores[2]} key={letra}>
              {letra}
            </button>
          ) : (
            <button style={misColores[0]} onClick={letraPulsada} key={letra}>
              {letra}
            </button>
          )
        )}
      </section>
      <section className="cont-imagen">
        <img src={(`/images/el_ahorcado${imagen}.png`)} alt="" />
      </section>
    </>
  );
};
