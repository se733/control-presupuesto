import React, { useState } from 'react'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {


    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
      e.preventDefault()

      if(!Number(presupuesto) || Number(presupuesto) < 0){
       setMensaje('invalido');
      } else {
        console.log('valido');
      }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
          <div className='campo'>
            <label>Defina su presupuesto</label>
            <input 
              className='nuevo-presupuesto'
              type='text'
              placeholder='añadir presupuesto'
              value={presupuesto}
              onChange={e => setPresupuesto(e.target.value)}
            />
          </div>
            <input type="submit" value='Añadir' />
            {
              mensaje && <Mensaje tipo="error">{children}</Mensaje >
            }
        </form>
    </div>
  )
}
