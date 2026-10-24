export const Header = () => {
  const title = 'Queens'
  const description = 'My hand made queens player and solver'

  return (
    <header className="pt-4 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="pt-4 text-xl font-semibold">{description}</h2>
    </header>
  )
}
