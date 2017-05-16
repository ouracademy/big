import PostItem from './item'

const allPosts = [
    {
        id: 2,
        title: 'Ágil versus Lean',
        author: {
            name: 'Arthur Mauricio',
            avatar: 'https://cdn-images-1.medium.com/fit/c/36/36/1*nNStMm8JvNW7ffS-Rd8Y6A.jpeg'
        },
        publishedAt: new Date(27, 1, 2017),
        imageURL: 'https://cdn-images-1.medium.com/max/1400/gradv/29/81/30/darken/25/1*54pHcxqh1jDmaXzWlh9p-w.jpeg'
    },
    {
        id: 1,
        title: '¿Qué es una startup?',
        author: {
            name: 'André Mauricio',
            avatar: 'https://cdn-images-1.medium.com/fit/c/36/36/0*xglPHAK2mBHb5cPI.'
        },
        publishedAt: new Date(23, 1, 2017),
        imageURL: 'https://cdn-images-1.medium.com/max/1400/gradv/29/81/30/darken/25/1*7dyvm84Y8I1_4aJu-q7R-A.jpeg'
    }
]

export default () => (
    <section title="posts">
        {
            allPosts.map(post => (
                <PostItem key={post.id} post={post} />
            ))
        }
    </section>
)