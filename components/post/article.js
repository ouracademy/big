import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Avatar from 'react-md/lib/Avatars'

export default ({ data: { Post, loading } }) => (
    <article>
        <header>
            <Card style={{ maxWidth: 600 }} className="md-block-centered">
                <CardTitle
                    avatar={<Avatar src={Post.author.avatar} role="presentation" />}
                    title={Post.author.name}
                    subtitle={toddmmyyyy(Post.publishedAt)}
                />
            </Card>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: Post.content }}></div>
    </article>
)

// we call use momentjs or FormatJS of React...this second will be oyr next option
const toddmmyyyy = (stringDate) => {
    const pad = s => s < 10 ? `0${s}` : s
    const date = new Date(stringDate)

    return [pad(date.getDate()), pad(date.getMonth() + 1)].join('/');
}