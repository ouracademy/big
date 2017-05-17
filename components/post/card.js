import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons'
import Link from 'next/link'
import Meta from './meta'

export default ({ post }) => (
    <Card style={{ width: 500 }} className="md-block-centered">
        <Media>
            <Link as={`/post/${post.slug}`} href={`/post?slug=${post.slug}`}>
                <a>
                    <img src={post.imageURL} role="presentation" />
                    <MediaOverlay>
                        <CardTitle title={post.title}>
                            <Button className="md-cell--right" icon>keyboard_arrow_right</Button>
                        </CardTitle>
                    </MediaOverlay>
                </a>
            </Link>
        </Media>
        <Meta author={post.author} publishedAt={post.publishedAt} />
    </Card>
)

// we call use momentjs or FormatJS of React...this second will be oyr next option
const toddmmyyyy = (stringDate) => {
    const pad = s => s < 10 ? `0${s}` : s
    const date = new Date(stringDate)

    return [pad(date.getDate()), pad(date.getMonth() + 1), date.getFullYear()].join('/');
}