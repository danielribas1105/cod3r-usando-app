'use client'
import Btn from '@/components/shared/btn'
import TituloPaginaInterna from '@/components/shared/interna/titulo'
import DiaContext from '@/contexts/DiaContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function Page() {
   const { dia, diaAnterior, proximoDia } = useContext(DiaContext)

   return (
      <div className="flex flex-col gap-10">
         <TituloPaginaInterna
            texto="Usando Contexto"
            legenda="Componente utilizando Context"
         />
         <div className="flex flex-col gap-5">
            <span className="text-7xl font-black">{dia}</span>
            <div className="flex gap-3">
               <Btn onClick={diaAnterior}>Anterior</Btn>
               <Btn onClick={proximoDia} destacado>
                  Próximo
               </Btn>
            </div>
            <Link href="/contexto/a">Ir para a página A</Link>
         </div>
      </div>
   )
}
