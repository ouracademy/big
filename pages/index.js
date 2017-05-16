import Page from '../layouts/main'
import PostList from '../components/post/list'

import Button from 'react-md/lib/Buttons'
// https://api.graph.cool/simple/v1/cj2i3es3zjoo80122iz4zzjph


export default () => (
  <Page>
    <Page.Header />
    <Slider />
    <PostList />
  </Page>
)

const Slider = () => (
  <section title="slogan" className="cover">
    <div className="slogan">
      <h1>El mundo espera por ti</h1>
      <h3>Aprende con nosotros y crea tu futuro</h3>
      <Button raised primary label="Empieza ahora!" iconBefore={false}>arrow_forward</Button>
    </div>
    <style jsx>{`
        .cover {
            width:100%;
            height:500px;
            background-image: url('/static/big-cover.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
        }

        .slogan {
            text-align: center;
        }

        .slogan h1 {
          font-size: 4rem;
          color: white;
        }

        .slogan h3 {
          font-size: 2rem;
          color: #d2d2d2;
        }
        `}</style>
  </section>
)