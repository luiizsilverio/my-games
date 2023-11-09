import { Gamepad, Gamepad2, UserCircle2 } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return ( 
    <header className="w-full h-28 px-4 bg-slate-100 text-black">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">

        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <div className="flex items-center gap-1 w-full">
              <Gamepad2 className="w-10 h-10 text-amber-600" />
              <h1 className="text-3xl font-bold">My
                <span className="text-amber-600">Games</span>
              </h1>
            </div>
          </Link>

          <Link href="/" className="hover:text-amber-600">Games</Link>
          <Link href="/profile" className="hover:text-amber-600">Perfil</Link>
        </nav>

        <div className="hidden sm:flex">
          <Link href="/profile">
            <UserCircle2 size={32} className="text-[#475569] hover:text-amber-600" />
          </Link>
        </div>
      </div>
    </header>
  )
}