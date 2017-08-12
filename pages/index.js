import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const getPosts = () => ([
  { id: 'hello-next-js', title: 'Hello Next.js' },
  { id: 'learn-next-js', title: 'Learn Next.js is Awesome' },
  { id: 'deploy-next-js', title: 'Deploy Apps with Zeit' },
])

const PostLink = ({ id, title }) => (
  <li>
    <Link
      as={`/post/${id}`}
      href={`/post?id=${id}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>

    <ul>
      {getPosts().map((post) => (
        <PostLink
          key={post.id}
          {...post} />
      ))}
    </ul>

    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

export default Index
