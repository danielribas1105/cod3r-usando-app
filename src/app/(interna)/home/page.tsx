import Exercicio from '@/components/exercicio'
import TituloPaginaInterna from '@/components/shared/interna/titulo'
import {
   IconApi,
   IconArrowsJoin2,
   IconBug,
   IconChartDots3,
   IconDatabase,
   IconLoader,
   IconRoute,
   IconRoute2,
} from '@tabler/icons-react'

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
            <Exercicio
               url="/dinamica/blog/123"
               titulo="Rotas Dinâmicas #1"
               icone={<IconRoute />}
            />
            <Exercicio
               url="/dinamica/curso/html-basico?esconderAulasConcluidas=true"
               titulo="Rotas Dinâmicas #2"
               icone={<IconRoute2 />}
            />
            <Exercicio
               url="/paralelas"
               titulo="Rotas Paralelas #1"
               icone={<IconArrowsJoin2 />}
            />
            <Exercicio
               url="/estado"
               titulo="Usando Estado"
               icone={<IconDatabase />}
            />
            <Exercicio url="/dados" titulo="Usando API" icone={<IconApi />} />
            <Exercicio
               url="/contexto/a"
               titulo="Usando Contexto"
               icone={<IconChartDots3 />}
            />
         </div>
      </div>
   )
}
