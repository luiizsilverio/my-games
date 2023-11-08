import Image from 'next/image'
import Link from 'next/link';
import { ArrowRightSquare } from 'lucide-react';

import Container from '@/components/Container'
import { GameProps } from '@/utils/types/game';
import MyInput from '@/components/MyInput';

async function getDailyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DAILY_GAME}`, { next: { revalidate: 60 * 5 }});
    return res.json();
  } catch(err) {
    throw new Error("Erro ao buscar Daily Game")
  }
}
export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();

  return (
    <main className="w-full">
      <Container>
        <h1 className='text-center font-bold text-xl mt-8 mb-5'>
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-xl">
            <div className="w-full max-h-96 h-96 relative rounded-xl">
              <div className='absolute z-10 bottom-0 p-3 flex items-center gap-2'>
                <p className='font-bold text-xl text-white'>
                  {dailyGame.title}
                </p>
                <ArrowRightSquare 
                  size={24} color='#fff' 
                  className='hover:scale-125 transition-all duration-300' 
                />
              </div>
              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                quality={100}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className='max-h-96 object-cover rounded-xl opacity-70 hover:opacity-100 transition-all duration-300'
              />
            </div>
          </section>
        </Link>

        <MyInput />
        
      </Container>
    </main>
  )
}
