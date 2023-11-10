import Image from "next/image";
import { Metadata } from "next";
import { Share2 } from "lucide-react";

import Container from "@/components/Container";
import userImg from '@/../public/user.png';
import FaveCard from "@/components/FaveCard";

export const metadata: Metadata = {
  title: "Meu perfil - My-Games",
  description: "Perfil My-Games - Sua plataforma de jogos"
}

export default function Profile() {
  return ( 
    <main className="w-full text-black">
      <Container>
        <section className={`
          mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row
        `}>
          <div className={`
            w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal
          `}>
            <Image
              src={userImg}
              alt="Foto do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Luiiz Dev</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 mt-2 flex items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 text-white rounded-lg">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <Share2 size={24} color="#FFF" fill="#FFF" />
            </button>
          </div>    
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FaveCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FaveCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FaveCard />
          </div>
        </section>
      </Container>
    </main>
  )
}