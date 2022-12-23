import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Control de gastos mensuales</h1>
        <NuevoPresupuesto
                presupuesto={presupuesto} 
                setPresupuesto={setPresupuesto} 
        />
    </header>
    )
}
