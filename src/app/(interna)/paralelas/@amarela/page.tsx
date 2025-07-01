function carregarTexto(): Promise<string> {
   return new Promise((resolve) => {
      setTimeout(() => resolve('Amarela'), 5000)
   })
}

export default async function Page() {
   const texto = await carregarTexto()
   return <span>{texto}</span>
}
