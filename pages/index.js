import Link from 'next/link'
import Layout from '../components/Layout'

const links = [
  {
    slug: 'hello-next-js',
    title: 'Hello Next.js',
  },
  {
    slug: 'learning-next-js-is-awesome',
    title: 'Learning Next.js is awesome',
  },
  {
    slug: 'deploy-apps-with-zeit',
    title: 'Deploy apps with Zeit',
  },
]

const PostLink = ({ slug, title }) => (
  <li>
    <Link
      as={`/post/${slug}`}
      href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>

    <ul>
      {links.map(({ slug, title }) => (
        <PostLink
          key={slug}
          slug={slug}
          title={title} />
      ))}
    </ul>
  </Layout>
)
