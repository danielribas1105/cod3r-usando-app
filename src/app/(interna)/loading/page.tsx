import TituloPaginaInterna from '@/components/shared/interna/titulo'

function carregarNumeroPesado(): Promise<number> {
   return new Promise((resolve) => {
      setTimeout(() => resolve(100), 5000)
   })
}

export default async function Loading() {
   const numeroPesado = await carregarNumeroPesado()
   return (
      <div>
         <TituloPaginaInterna
            texto="Página de Loading"
            legenda="Demostrando o uso de loading em uma página"
         />
         <div className="flex flex-col justify-center items-center h-96">
            <span className="text-7xl font-black">{numeroPesado}</span>
            <span className="text-zinc-500">Demorou 5 segundos</span>
         </div>
      </div>
   )
}
