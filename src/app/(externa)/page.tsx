import Principal from '@/components/landing/principal'
import Recursos from '@/components/landing/recursos'
import Titulo from '@/components/shared/titulo'

export default function LandingPage() {
   return (
      <div className="flex flex-col">
         <Principal />
         <Titulo
            texto="Nossos Recursos"
            legenda="Lorem ipsum dolor sit amet"
            classname="mb-7"
         />
         <Recursos />
      </div>
   )
}
