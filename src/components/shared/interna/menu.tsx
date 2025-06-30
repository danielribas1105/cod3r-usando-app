'use client'
import { IconBug, IconLayoutDashboard, IconLoader } from '@tabler/icons-react'
import MenuItemPaginaInterna from './menu-item'
import MenuGroupPaginaInterna from './menu-group'
import { usePathname } from 'next/navigation'

export default function MenuPaginaInterna() {
   const url = usePathname()
   return (
      <nav className="flex flex-col gap-4">
         <MenuItemPaginaInterna
            url="/home"
            texto="Início"
            icone={<IconLayoutDashboard />}
            selecionado={url === '/home'}
         />
         <MenuGroupPaginaInterna titulo="Exercícios">
            <MenuItemPaginaInterna
               url="/loading"
               texto="Loading"
               icone={<IconLoader />}
               selecionado={url === '/loading'}
            />
            <MenuItemPaginaInterna
               url="/erro"
               texto="Erro"
               icone={<IconBug />}
               selecionado={url === '/erro'}
            />
         </MenuGroupPaginaInterna>
      </nav>
   )
}
