import TituloPaginaInterna from '@/components/shared/interna/titulo'

export default function Page(props: any) {
   return (
      <div>
         <TituloPaginaInterna
            texto="Rota Dinâmica #2"
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
