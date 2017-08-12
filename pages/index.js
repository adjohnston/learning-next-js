import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>

    <ul>
      {props.shows.map(({ show: { id, name } }) => (
        <li key={id}>
          <Link
            as={`/post/${id}`}
            href={`/post?id=${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
