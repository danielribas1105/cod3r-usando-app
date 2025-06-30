interface MenuGroupPaginaInternaProps {
   titulo: string
   children: any
}

export default function MenuGroupPaginaInterna(
   props: MenuGroupPaginaInternaProps,
) {
   return (
      <div className="flex flex-col py-3 gap-5">
         <h3 className="text-zinc-500">{props.titulo}</h3>
         <div className="flex flex-col gap-2">{props.children}</div>
      </div>
   )
}
