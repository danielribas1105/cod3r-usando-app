import MenuItem from './menu-item'

export default function Menu() {
  return (
    <nav className="flex items-center gap-5">
      <MenuItem url="/" texto="Produtos" />
      <MenuItem url="/" texto="Blog" />
      <MenuItem url="/" texto="Clientes" />
      <MenuItem url="/" texto="Empresa" />
    </nav>
  )
}
