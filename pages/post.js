import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

import Page from '../layouts/main'
import PostArticle from '../components/post/article'

const Post = ({ data }) => {
  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <Page>
      <Page.Header />
      <div>
        <PostArticle post={data.Post} />
      </div>
    </Page>
  )
}

const postQuery = gql`
    query post($slug: String!) {
        Post(slug: $slug) {
            slug
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