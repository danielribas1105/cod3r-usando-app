import { IconBug, IconLayoutDashboard, IconLoader } from '@tabler/icons-react'
import MenuItemPaginaInterna from './menu-item'
import MenuItem from './menu-item'
import MenuGroupPaginaInterna from './menu-group'

export default function MenuPaginaInterna() {
   return (
      <nav className="flex flex-col gap-4">
         <MenuItemPaginaInterna
            url="/home"
            texto="Início"
            icone={<IconLayoutDashboard />}
         />
         <MenuGroupPaginaInterna titulo="Exercícios">
            <MenuItemPaginaInterna
               url="/loading"
               texto="Loading"
               icone={<IconLoader />}
            />
            <MenuItemPaginaInterna
               url="/erro"
               texto="Erro"
               icone={<IconBug />}
            />
         </MenuGroupPaginaInterna>
      </nav>
   )
}
