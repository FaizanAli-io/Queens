import type { GridCellMatrix, GridCellStateMatrix } from '../types'

export function initializeGameState(grid: GridCellMatrix): GridCellStateMatrix {
  return grid.map((row) =>
    row.map((cell) => ({ region: cell, isClicked: false })),
  )
}

export function resetGameState(grid: GridCellStateMatrix): GridCellStateMatrix {
  return grid.map((row) => row.map((cell) => ({ ...cell, isClicked: false })))
}
