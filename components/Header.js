import Link from 'next/link'

const linkStyles = {
  margin: '0 1rem 0 0'
}

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a style={linkStyles}>Home</a>
      </Link>

      <Link href="/about">
        <a style={linkStyles}>About</a>
      </Link>
    </header>
  )
}
