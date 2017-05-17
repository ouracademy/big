import CardTitle from 'react-md/lib/Cards/CardTitle'
import Avatar from 'react-md/lib/Avatars'

export default ({author, publishedAt}) => (
    <CardTitle
        avatar={<Avatar src={author.avatar} role="presentation" />}
        title={author.name}
        subtitle={toddmmyyyy(publishedAt)}
    />
)

// we call use momentjs or FormatJS of React...this second will be oyr next option
const toddmmyyyy = (stringDate) => {
    const pad = s => s < 10 ? `0${s}` : s
    const date = new Date(stringDate)

    return [pad(date.getDate()), pad(date.getMonth() + 1)].join('/');
}