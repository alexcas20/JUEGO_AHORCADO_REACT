import { useState } from "react"
import { Contexto } from "./Contexto"

export const Provider = ({ children }) => {

    const [laCorrecta, setCorrecta] = useState('');

    const escribirCorrecta = (aGuardar = "") => {
        setCorrecta(aGuardar);
    }


  return (
    <Contexto.Provider value={{laCorrecta, escribirCorrecta}}>
        {  children  }
    </Contexto.Provider>
  )
}
