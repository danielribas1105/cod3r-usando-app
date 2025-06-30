import { IconMenu2 } from '@tabler/icons-react'
import MenuUsuarioPaginaInterna from './menu-usuario'

export default function CabecalhoPaginaInterna() {
   return (
      <header className="flex items-center justify-between p-7 h-20 bg-zinc-950">
         <IconMenu2 className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
         <MenuUsuarioPaginaInterna
            nome="Usuário mock"
            email="usuario.mock@gmail.com"
            imagem="https://picsum.photos/250/301?grayscale"
         />
      </header>
   )
}
