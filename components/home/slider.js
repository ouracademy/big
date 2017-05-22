import Button from 'react-md/lib/Buttons'

export default () => (
    <section className="cover">
        <div className="slogan">
            <h1>El mundo espera por ti</h1>
            <h3>Aprende con nosotros y crea tu futuro</h3>
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
          font-size: 4.5rem;
          color: white;
          padding-bottom: 10px;
        }

        .slogan h3 {
          font-size: 2rem;
          color: #d2d2d2;
          padding-bottom: 5px;
        }
        `}</style>
    </section>
)