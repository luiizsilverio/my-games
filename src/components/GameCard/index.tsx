import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightCircle } from 'lucide-react';
import { GameProps } from '@/utils/types/game';

interface Props {
  data: GameProps
}

export default function GameCard({ data }: Props) {
  return ( 
    <Link href={`/game/${data.id}`}>
      <section className='w-full bg-slate-200 rounded-lg p-4 mb-5'>
        <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
          <Image
            src={data.image_url}
            alt={data.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            fill
            quality={70}
            className='rounded-lg object-cover'
          />
          { data.title }
        </div>

        <div className='flex items-center justify-between mt-4 '>
          <p className='text-sm font-bold px-2 text-[#475569] truncate'>
            { data.title }
          </p>
          <ChevronRightCircle size={24} color="#475569" />
        </div>
      </section>
    </Link>
  )
}