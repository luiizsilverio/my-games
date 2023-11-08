"use client"
import { FormEvent, useState } from "react"
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MyInput() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(ev: FormEvent) {
    ev.preventDefault();

    if (!input) return;

    router.push(`/game/search/${input}`);
  }

  return ( 
    <form onSubmit={handleSearch} 
      className={`
        w-full bg-slate-200 my-5 flex gap-2 items-center justify-between
        rounded-lg p-2
      `}
    >
      <input 
        type="text"
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-200 outline-none w-11/12"
      />
      <button type="submit">
        <Search size={24} className="text-amber-600" />
      </button>
    </form>
  )
}