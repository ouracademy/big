import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

import Page from '../layouts/main'
import PostArticle from '../components/post/article'
import Head from '../components/head'

const Post = ({ data: { loading, Post }, serverState }) => {
  return (
    <Page>
      {
        (serverState && !loading) &&
        <Head
          title={Post.title}
          meta={{ description: Post.summary, og: { type: 'article', image: Post.imageURL } }}
        />
      }
      <Page.Header />
      {!loading && <PostArticle post={Post} />}
      <style jsx global>{`
        body {
          padding-top: 64px;
        }
      `}</style>
    </Page>
  )
}

const postQuery = gql`
    query post($slug: String!) {
        Post(slug: $slug) {
            slug
            title
            summary
            imageURL
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

export default withData(({ serverState, url }) => (
  <PostPage serverState={serverState} slug={url.query.slug} />
))