import { useState } from 'react'

import { GameGrid } from './GameGrid'

import { getGame, getGameList } from '../utils/games'

type GameSelectorProps = {
  selectedGame: number
  onChange: (index: number) => void
}

const Header = () => {
  const title = 'Queens'
  const description = 'My hand made queens player and solver'

  return (
    <header className="pt-4 pb-8 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="pt-4 text-xl font-semibold">{description}</h2>
    </header>
  )
}

const GameSelector = ({ selectedGame, onChange }: GameSelectorProps) => (
  <select
    value={selectedGame}
    className="rounded-md border px-4 py-2 font-bold"
    onChange={(e) => onChange(Number(e.target.value))}
  >
    {getGameList().map((game) => (
      <option key={game.index} value={game.index}>
        {game.name} ({game.size})
      </option>
    ))}
  </select>
)

export const PageWrapper = () => {
  const [selectedGame, setSelectedGame] = useState(0)

  return (
    <main className="flex flex-col items-center">
      <Header />
      <GameSelector selectedGame={selectedGame} onChange={setSelectedGame} />
      <GameGrid key={selectedGame} game={getGame(selectedGame)} />
    </main>
  )
}
