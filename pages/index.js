import Link from 'next/link'
import Layout from '../components/Layout'

const titles = [
  'Hello Next.js',
  'Learn Next.js is awesome',
  'Deploy apps with Zeit'
]

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>

    <ul>
      {titles.map(title => (
        <PostLink
          key={title}
          title={title} />
      ))}
    </ul>
  </Layout>
)
