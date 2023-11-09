import Image from "next/image";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import Container from "@/components/Container";
import { GameProps } from "@/utils/types/game";
import MyLabel from "@/components/MyLabel";
import GameCard from "@/components/GameCard";

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {    
    const response: GameProps = await fetch(`${process.env.NEXT_PUBLIC_URL_GAME}&id=${params.id}`)
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "My-Games - Descubra jogos incríveis para se divertir."          
        }
      })

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url]
      }
    }

  } catch(err) {
    return {
      title: "My-Games - Descubra jogos incríveis para se divertir."
    }
  }
}

async function getGame(id: string) {
  try {    
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_GAME}&id=${id}`, { cache: "no-store" });
    return res.json();    
  } catch(err) {
    throw new Error("Erro ao buscar o Jogo");
  }
}

async function getRandomGame() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DAILY_GAME}`, { cache: "no-store" });
    return res.json();
  } catch(err) {
    throw new Error("Erro ao buscar o jogo recomendado")
  }
}

export default async function Game({ params: { id }}: Props) {
  const game: GameProps = await getGame(id);
  const randomGame: GameProps = await getRandomGame();

  if (!game) {
    redirect("/");
  }

  return ( 
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-80"
          src={game.image_url}
          alt={game.title}
          priority={true}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{ game.title }</h1>
        <p>{ game.description }</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {game.categories?.map(item => (
            <MyLabel name={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {game.platforms?.map(item => (
            <MyLabel name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento:</strong> { game.release }
        </p>
        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>
        <div className="flex">
          <div className="flex-grow max-w-2xl">
            <GameCard data={randomGame}/>
          </div>
        </div>
      </Container>
    </main>
  )
}