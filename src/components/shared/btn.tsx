import Link from 'next/link'

interface BtnProps {
   url?: string
   onClick?: () => void
   destacado?: boolean
   children?: any
}

export default function Btn(props: BtnProps) {
   function renderizarBtn() {
      return (
         <button
            className={`${
               props.destacado
                  ? 'bg-zinc-100 text-black hover:bg-zinc-300'
                  : 'bg-black text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300'
            } border border-zinc-400 px-3 py-1 rounded-md text-xl`}
            onClick={props.onClick}
         >
            {props.children}
         </button>
      )
   }

   return props.url ? (
      <Link href={props.url}>{renderizarBtn()}</Link>
   ) : (
      renderizarBtn()
   )
}
