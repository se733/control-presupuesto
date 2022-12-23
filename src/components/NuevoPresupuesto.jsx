import React from 'react'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
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
        </form>
    </div>
  )
}
