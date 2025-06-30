import Exercicio from '@/components/exercicio'
import TituloPaginaInterna from '@/components/shared/interna/titulo'
import { IconBug, IconLoader } from '@tabler/icons-react'

export default function HomePage() {
   return (
      <div>
         <TituloPaginaInterna
            texto="Área do Aluno"
            legenda="Lista de todos os exercícios implementados"
         />
         <div className="grid grid-cols-4 gap-5 mt-10">
            <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
            <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
            <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
            <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
            <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
            <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
            <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
            <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
         </div>
      </div>
   )
}
