import { IconCircleFilled, IconSquare } from '@tabler/icons-react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-5">
      <div className="relative w-10 h-10 flex justify-center items-center rotate-45">
        <IconSquare stroke={3} size={40} className="absolute text-zinc-600" />
        <IconSquare stroke={5} size={20} className="absolute text-zinc-400" />
        <IconCircleFilled size={8} className="absolute text-zinc-100" />
      </div>
      <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-400">
        Minha App
      </span>
    </Link>
  )
}
