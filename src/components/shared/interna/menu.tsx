'use client'
import {
   IconApi,
   IconArrowsJoin2,
   IconBug,
   IconChartDots3,
   IconDatabase,
   IconLayoutDashboard,
   IconLoader,
   IconRoute,
   IconRoute2,
} from '@tabler/icons-react'
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
            <MenuItemPaginaInterna
               url="/dinamica/blog/abc?filtros=inativos"
               texto="Rota Dinâmica #1"
               icone={<IconRoute />}
               selecionado={url === '/dinamica/blog/abc'}
            />
            <MenuItemPaginaInterna
               url="/dinamica/curso/react/config-ambiente/123"
               texto="Rota Dinâmica #2"
               icone={<IconRoute2 />}
               selecionado={url === '/dinamica/curso/react/config-ambiente/123'}
            />
            <MenuItemPaginaInterna
               url="/paralelas"
               texto="Rotas Paralelas #1"
               icone={<IconArrowsJoin2 />}
               selecionado={url === '/paralelas'}
            />
            <MenuItemPaginaInterna
               url="/estado"
               texto="Usando Estado"
               icone={<IconDatabase />}
               selecionado={url === '/estado'}
            />
            <MenuItemPaginaInterna
               url="/dados"
               texto="Usando API"
               icone={<IconApi />}
               selecionado={url === '/dados'}
            />
            <MenuItemPaginaInterna
               url="/contexto/a"
               texto="Usando Contexto"
               icone={<IconChartDots3 />}
               selecionado={url === '/contexto/a' || url === '/contexto/b'}
            />
         </MenuGroupPaginaInterna>
      </nav>
   )
}
