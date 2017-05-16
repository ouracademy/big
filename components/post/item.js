import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

export default ({ post }) => (
    <Card style={{ width: 500 }} className="md-block-centered">
        <Media>
            <img src={post.imageURL} role="presentation" />
            <MediaOverlay>
                <CardTitle title={post.title}>
                    <Button className="md-cell--right" icon>keyboard_arrow_right</Button>
                </CardTitle>
            </MediaOverlay>
        </Media>
        <CardTitle
            avatar={<Avatar src={post.author.avatar} role="presentation" />}
            title={post.author.name}
        />
    </Card>
)