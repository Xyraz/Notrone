import React from "react";

export const NotionKanban =   () => {
    return <div className="h-screen w-full bg-neutral-900 text-neutral-50"></div>
}

const Board = () => {
     const [cards, setCards] = useState([]);

     return <div className="flex h-full w-full gap-3 overflow-scroll p-12"></div>
}

const Column = ({title,headingColor,column,cards,
    setCards}) => {
        return <div className ="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column
            title="Backlog"
            column="backlog"
            headingColor="text-neutral-500"
            cards={cards}
            setCards={setCards}
            />
            <Column
            title="TODO"
            column="todo"
            headingColor="text-yellow-200"
            cards={cards}
            setCards={setCards}
            />
            <Column
            title="In progress"
            column="doing"
            headingColor="text-blue-200"
            cards={cards}
            setCards={setCards}
            />
            <Column
            title="Complete"
            column="complete"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
            />
        </div>

}