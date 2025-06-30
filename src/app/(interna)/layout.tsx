import CabecalhoPaginaInterna from '@/components/shared/interna/cabecalho'
import MenuPaginaInterna from '@/components/shared/interna/menu'
import Logo from '@/components/shared/logo'

export default function Layout(props: any) {
   return (
      <div className="flex bg-zinc-900 min-h-screen">
         <aside className="flex flex-col gap-10 bg-black w-72 p-7">
            <Logo />
            <MenuPaginaInterna />
         </aside>
         <div className="flex flex-col flex-1">
            <CabecalhoPaginaInterna />
            <main className="flex-1 p-7">{props.children}</main>
         </div>
      </div>
   )
}
