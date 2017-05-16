import { gql, graphql } from 'react-apollo'
import PostItem from './item'

const PostList = ({ data: { allPosts, loading } }) => (
    <section>
        {
            allPosts.map(post => (
                <PostItem key={post.id} post={post} />
            ))
        }
    </section>
)

const allPosts = gql`
  query allPosts($first: Int!) {
    allPosts(orderBy: publishedAt_DESC, first: $first) {
        id
        title
        slug
        publishedAt
        imageURL
        author {
            name
            avatar
        }
    }
  }
`

const POSTS_PER_PAGE = 4

export default graphql(allPosts, {
    options: { variables: { first: POSTS_PER_PAGE } },
    props: ({ data }) => ({ data })
})(PostList)