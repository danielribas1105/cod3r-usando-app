import Image from 'next/image'

interface MenuUsuarioPaginaInternaProps {
   nome: string
   email: string
   imagem: string
}

export default function MenuUsuarioPaginaInterna(
   props: MenuUsuarioPaginaInternaProps,
) {
   return (
      <div className="flex items-center gap-2">
         <div className="flex flex-col">
            <span className="text-zinc-300 text-lg font-bold">
               {props.nome}
            </span>
            <span className="text-zinc-500 text-sm">{props.email}</span>
         </div>
         <Image
            src={props.imagem}
            alt="Imagem do usuário"
            width={40}
            height={40}
            className="rounded-full"
         />
      </div>
   )
}
