import games from '../games.json'

import type { Game, GameListItem } from '../types'

export function getGameList(): GameListItem[] {
  return games.map((game, gameIndex) => ({
    index: gameIndex,
    name: game.name,
    size: game.size,
  }))
}

export function getGame(gameIndex: number): Game {
  return games[gameIndex] as Game
}
