import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

import Page from '../layouts/main'
import PostArticle from '../components/post/article'

const Post = ({ data }) => {
  const page = data.loading ? {
    title: 'Cargando Post',
    content: <div>Loading</div>
  } : {
      title: data.Post.title,
      content: <PostArticle post={data.Post} />
    }

  return (
    <Page title={page.title}>
      <Page.Header />
      {page.content}
    </Page>
  )
}

const postQuery = gql`
    query post($slug: String!) {
        Post(slug: $slug) {
            slug
            title
            content
            author {
              name
              avatar
            }
            publishedAt
            tags {
              id
              name
            }
        }
    }
`

const PostPage = graphql(postQuery, {
  options: ({ slug }) => ({ variables: { slug } }),
  props: ({ data }) => ({ data })
})(Post)

export default withData(({ url }) => (
  <PostPage slug={url.query.slug} />
))