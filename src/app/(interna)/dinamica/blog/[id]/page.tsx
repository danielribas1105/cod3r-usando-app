import TituloPaginaInterna from '@/components/shared/interna/titulo'

export default function Page(props: any) {
   /* Exemplo url: http://localhost:3000/dinamica/blog/abc?filtro=ativo&estado=RJ,SP */
   return (
      <div>
         <TituloPaginaInterna
            texto="Rota Dinâmica #1"
            legenda="Exibindo os parâmetros passados na rota"
         />
         <div className="flex flex-col gap-5 mt-10">
            <span className="text-3xl">ID: {props.params.id}</span>
            <code>
               <pre className="text-2xl bg-black p-5 rounded-lg">
                  {JSON.stringify(props, null, 4)}
               </pre>
            </code>
         </div>
      </div>
   )
}
