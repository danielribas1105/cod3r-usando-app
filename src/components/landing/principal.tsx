import Btn from '../shared/btn'

export default function Principal() {
   return (
      <div className="flex flex-col gap-10 justify-center items-center h-[450px]">
         <h1 className="font-black text-6xl leading-[70px] bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-400">
            Landing Page com Next.js
         </h1>
         <h2 className="text-3xl text-center text-zinc-500 w-3/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor.
         </h2>
         <div className="flex gap-3">
            <Btn url="/home" destacado>
               Iniciar Aqui
            </Btn>
            <Btn url="/home">Sobre Nós</Btn>
         </div>
      </div>
   )
}
