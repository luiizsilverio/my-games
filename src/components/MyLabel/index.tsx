interface Props {
  name: string;
}

export default function MyLabel({ name }: Props) {
  return ( 
    <div className={`
      flex-grow sm:flex-grow-0 py-1 px-3 mb-3 bg-slate-200 text-black text-center 
      rounded-lg hover:bg-amber-500
    `}>
      {name}
    </div>
  )
}