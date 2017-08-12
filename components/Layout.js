import Header from './Header'

const layoutStyles = {
  margin: '1.5rem',
  padding: '1.5rem',
  border: '1px solid #ddd'
}

export default function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <Header />

      {children}
    </div>
  )
}
