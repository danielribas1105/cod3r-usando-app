import Numero from '@/components/shared/interna/numero'
import TituloPaginaInterna from '@/components/shared/interna/titulo'

export default function Page() {
   return (
      <div className="flex flex-col">
         <TituloPaginaInterna
            texto="Usando Estado"
            legenda="Componente react com use State"
         />
         <div className="mt-10">
            <Numero />
         </div>
      </div>
   )
}
