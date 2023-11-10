"use client"

import { useState } from "react";
import { FileEdit, X } from "lucide-react"

export default function FaveCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");

  function handleEdit() {
    setShowInput((prev) => !prev);

    if (!!input) {
      setName(input);
    }

    setInput("");
  }

  return ( 
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input type="text" 
            value={input} 
            onChange={(ev) => setInput(ev.target.value)} 
            className="w-full rounded-md h-8 text-black px-2"
          />
          <button>
            <X size={24} color="#FFF" onClick={handleEdit} />
          </button>
        </div>
      ) : (        
        <button 
          onClick={handleEdit}
          className="self-start hover:scale-110 duration-200 transition-all"
        >
          <FileEdit size={24} className="text-white hover:text-amber-500" />
        </button>
      )}

      {name && (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="font-bold text-white">{ name }</p>
        </div>
      )}

      {!name && (
        <p className="font-bold text-white">Adicionar jogo</p>
      )}
    </div>
  )
}