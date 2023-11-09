import Container from "@/components/Container";
import GameCard from "@/components/GameCard";
import MyInput from "@/components/MyInput";
import { GameProps } from "@/utils/types/game";

interface Props {
  params: {
    title: string;
  }
}

async function getGames(title: string) {
  try {    
    const decodedTitle = decodeURI(title);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_GAME}&title=${decodedTitle}`);
    return res.json();
  } catch(err) {
    // throw new Error("Erro ao buscar os Jogos")
    return [];
  }
}

export default async function Search({ params: { title }}: Props) {
  const games: GameProps[] = await getGames(title);

  return ( 
    <main className="w-full text-black">
      <Container>
        <MyInput />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontrei para você:
        </h1>

        {!games && (
          <p>Esse jogo não foi encontrado!</p>
        )}

        <section className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {games && games.map((game) => (
            <GameCard key={ game.id } data={game} />
          ))}
        </section>
      </Container>
    </main>
  )
}