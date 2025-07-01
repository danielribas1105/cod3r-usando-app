import TituloPaginaInterna from '@/components/shared/interna/titulo'

async function obterProdutos() {
   const url = 'http://localhost:3000/dados/produtos'
   const produtos = await fetch(url, {
      cache: 'no-store',
      next: {
         revalidate: 0,
      },
   })
   return produtos.json()
}

export default async function Page() {
   const produtos = await obterProdutos()

   return (
      <div className="flex flex-col gap-10">
         <TituloPaginaInterna
            texto="Usando API"
            legenda="Componente com dados de uma API"
         />
         <div>
            {produtos.map((produto: any) => (
               <div
                  key={produto.id}
                  className="flex justify-between text-xl odd:bg-zinc-800 even:bg-zinc-700 px-5 py-2.5"
               >
                  <span>{produto.id}</span>
                  <span>{produto.nome}</span>
                  <span>{new Date(produto.data).toLocaleTimeString()}</span>
                  <span>R$ {produto.preco}</span>
               </div>
            ))}
         </div>
      </div>
   )
}
