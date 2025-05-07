import React from "react";

export const NotionKanban =   () => {
    return <div className="h-screen w-full bg-neutral-900 text-neutral-50"></div>
}

const Board = () => {
     const [cards, setCards] = useState([]);

     return <div className="flex h-full w-full gap-3 overflow-scroll p-12"></div>
}