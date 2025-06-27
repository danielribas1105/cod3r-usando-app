import Btn from './btn'
import Logo from './logo'
import Menu from './menu'

export default function Cabecalho() {
  return (
    <header className="flex justify-center items-center h-[64px] fixed top-0 left-0 right-0 border-b border-zinc-800 bg-black/60 backdrop-blur-[4px]">
      <div className="flex items-center gap-12 w-[1400px] h-full">
        <Logo />
        <Menu />
        <div className="flex-1"></div>
        <div className="flex gap-4">
          <Btn url="/home">Entrar</Btn>
          <Btn url="/home" destacado>
            Registrar
          </Btn>
        </div>
      </div>
    </header>
  )
}
