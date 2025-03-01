import { Home, UserRoundPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/public/logo.svg'

import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Image priority src={logoImg} width={120} alt="logo" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
          >
            <Home className="h-4 w-4" />
            Inicio
          </Link>
          <Link
            href="/user/create"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
          >
            <UserRoundPlus className="h-4 w-4" />
            Cadastrar usuário
          </Link>
        </nav>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
