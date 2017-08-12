import Layout from '../components/Layout'

const Content = ({ query }) => (
  <div>
    <h1>{query.title}</h1>
    <p>This is a blog post.</p>
  </div>
)

export default ({ url }) => (
  <Layout>
    <Content query={url.query} />
  </Layout>
)
