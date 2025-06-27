import Image from 'next/image'

interface RecursoProps {
   titulo: string
   texto: string
   imagem: string
}

export default function Recurso(props: RecursoProps) {
   return (
      <div className="flex flex-col border border-zinc-700 p-5 rounded-lg">
         <Image
            src={props.imagem}
            alt="Imagem do recurso"
            width={250}
            height={300}
            className="self-center mb-7"
         />
         <h3 className="text-xl font-semibold mb-1">{props.titulo}</h3>
         <p className="text-zinc-500 text-sm">{props.texto}</p>
      </div>
   )
}
