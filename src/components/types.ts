import type { Game, GridCell } from '../types'

export type GridCellProps = {
  cell: GridCell
}

export type GridRowProps = {
  row: GridCell[]
  rowIndex: number
}

export type GameGridProps = {
  game: Game
}