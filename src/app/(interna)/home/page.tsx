import TituloPaginaInterna from '@/components/shared/interna/titulo'

export default function HomePage() {
   return (
      <div>
         <TituloPaginaInterna
            texto="Área do Aluno"
            legenda="Lista de todos os exercícios implementados"
         />
         <div className="py-10">Página Interna</div>
      </div>
   )
}
