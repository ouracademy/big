import Head from 'next/head'

const defaultMeta = {
    description: "Aprende en una comunidad que se dedica a brindar educación de calidad a personas que desean crear su futuro.",
    og: {
        type: 'website',
        image: 'http://businessideasgroup.com.pe/static/big.png'
    }
}

export default ({ title = 'Aprende y crea tu futuro', meta = defaultMeta }) => {
    const titleText = `${title} | BIG`

    return (
        <Head>
            <title>{titleText}</title>
            <meta name="description" content={meta.description} />
            <meta property="og:type" content={meta.og.type} />
            <meta property="og:title" content={titleText} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.og.image} />
        </Head>
    )
}