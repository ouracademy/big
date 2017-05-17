import Divider from 'react-md/lib/Dividers'
import Chip from 'react-md/lib/Chips'
import Meta from './meta'

export default ({ post }) => (
    <article className="aligner">
        <div className="aligner-item">
            <header>
                <Meta author={post.author} publishedAt={post.publishedAt} />
            </header>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <footer>
                <div className="tags">
                    {
                        post.tags.map(tag => (
                            <Chip key={tag.id} className="tag" label={tag.name} />
                        ))
                    }
                </div>
                <Divider />
            </footer>
        </div>
        <style jsx>{`
            .aligner {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .aligner-item {
               max-width: 52%;
            }

            article {
                margin-bottom: 2rem;
            }

            .content {
                padding-bottom: 1rem;
            }

            footer {
                height: 4rem;
            }
        `}</style>
        <style global jsx>{`
            .md-card-title {
                padding-left: 0;
            }

            .tags {
                padding-bottom: 1rem;
            }

            .tag {
                margin-right: 0.5rem;
            }

            .md-chip {
                border-radius: 5px;
                background-color: #ececec;
            }

            figure {
                margin-left: 0;
                margin-right: 0;
            }

            figure img {
                width: 100%;
            }

            strong {
                font-weight: 500;
            }

            p, blockquote {
                font-size: 1.30rem;
                line-height: 1.58;
                margin-top: 2rem;
            }

            blockquote {
                border-left: 3px solid rgba(0,0,0,.8);
                padding-left: 1rem;
                margin-left: -0.6rem;
                padding-bottom: 0.1rem;
                letter-spacing: -.003em;
                font-style: italic;
            }

            iframe {
                width: 100%;
                height: 25rem;
            }

            figure, iframe {
                margin-top: 2.5rem;
            }
            
            h1 {
                font-size: 2.8rem;
            }

            h2 {
                margin-top: 3rem;
                font-size: 2rem;
            }

            h1, h2 {
                font-weight: 500;
            }
        `}</style>
    </article>
)