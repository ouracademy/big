import Button from 'react-md/lib/Buttons'

export default () => (
    <section className="cover">
        <div className="slogan">
            <h1>El mundo espera por ti</h1>
            <h3>Aprende con nosotros y crea tu futuro</h3>
        </div>
        <style jsx>{`
            .cover {
                height:400px;
                background-image: url('/static/big-cover.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;
                background-position-x: -650px;
            }

            .slogan {
                text-align: center;
                width: 100%;
            }

            .slogan h1 {
                font-size: 3rem;
                color: white;
                padding-bottom: 10px;
            }
            
            .slogan h3 {
                font-size: 1.5rem;
                color: #d2d2d2;
                padding-bottom: 5px;
                white-space: normal;
            }

            @media only screen and (min-width: 600px) {
                .cover {
                    height:500px;
                    background-position: 0;
                }

                .slogan h1 {
                    font-size: 4.5rem;
                }

                .slogan h3 {
                    font-size: 2rem;
                }
            }

        `}</style>
    </section>
)