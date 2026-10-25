import { useState } from 'react'

import { GameGrid } from './GameGrid'
import { GameOptions } from './GameOptions'
import { GameSelector } from './GameSelector'
import { Header } from './Header'

import { getGame } from '../utils/games'
import {
  checkGameState,
  initializeGameState,
  printGameState,
  resetGameState,
} from '../utils/gameState'

export const PageWrapper = () => {
  const [selectedGame, setSelectedGame] = useState(0)

  const [grid, setGrid] = useState(() =>
    initializeGameState(getGame(selectedGame).regions),
  )

  const changeGame = (index: number) => {
    setSelectedGame(index)
    setGrid(initializeGameState(getGame(index).regions))
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-stretch gap-8">
      <Header />
      <GameSelector selectedGame={selectedGame} onChange={changeGame} />
      <GameGrid key={selectedGame} grid={grid} setGrid={setGrid} />
      <GameOptions
        resetGameState={() => setGrid((prev) => resetGameState(prev))}
        printGameState={() => printGameState(grid)}
        checkGameState={() => checkGameState(grid)}
      />
    </main>
  )
}
