import { COLOR_MAP } from './constants'

export type GameListItem = {
  index: number
  name: string
  size: number
}

export type GridCell = keyof typeof COLOR_MAP

export type Game = {
  id: number
  name: string
  size: number
  regions: GridCell[][]
  solutions: number[][]
}
