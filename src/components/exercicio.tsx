import Link from 'next/link'
import React from 'react'

interface ExercicioProps {
   url: string
   titulo: string
   icone: any
}

export default function Exercicio(props: ExercicioProps) {
   return (
      <Link
         href={props.url}
         className="flex flex-col border border-zinc-700 rounded-lg items-center"
      >
         {React.cloneElement(props.icone, {
            size: 80,
            stroke: 1,
            className: 'py-3',
         })}
         <h3 className="bg-black w-full p-3 flex justify-center rounded-b-lg">
            {props.titulo}
         </h3>
      </Link>
   )
}
