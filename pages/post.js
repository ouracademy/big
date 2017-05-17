import Page from '../layouts/main'
import withData from '../lib/withData'

import PostArticle from '../components/post/article'

const Post = {
    author: {
        name: 'André Mauricio',
        avatar: 'https://cdn-images-1.medium.com/fit/c/36/36/0*xglPHAK2mBHb5cPI.'
    },
    content: `
        <h1>¿Qué es una Startup?</h1>
        <figure>
            <img src="https://cdn-images-1.medium.com/max/800/1*7dyvm84Y8I1_4aJu-q7R-A.jpeg"/>
        </figure>
        <p>Es una palabra muy usada en estos días para referirse a “empresas nuevas” formadas por jóvenes que aman la tecnología y que piensan cambiar al mundo. Otros piensan que una startup es una versión pequeña de una empresa, pero todo esto no es verdad.</p>
        <p>Entonces, ¿Qué es una Startup ?</p>
        <p>Según <strong>Steve Blank</strong>; quien inicio el movimiento Lean Startup; afirma que:</p>
        <blockquote>“Una Startup es una organización temporal en búsqueda de un modelo de negocio escalable, repetitivo y rentable.”</blockquote>
        <p>De la definición anterior, podemos entender que una Startup es una organización que primero es temporal, y segundo que se encuentra en la “búsqueda de un modelo de negocio”, lo que significa que los fundadores no saben <strong>como van a ganar dinero</strong>. En un inicio el modelo de negocio de una Startup es sólo un conjunto de ideas e hipótesis que residen en la mente de los fundadores, sin clientes y sin saber cual es mercado a donde se dirigirán.</p>
        <p>Por otro lado, las empresas ya establecidas conocen su modelo de negocio, sus clientes y mercado. Por esta razón <strong>Eric Ries</strong>, en su libro “Lean Startup” ,afirma:</p>
        <blockquote>“Las Startups todavía no saben quiénes serán sus consumidores o cuáles serán sus productos. A medida que el mundo se vuelve más incierto, cada vez es más difícil predecir el futuro. Los antiguos métodos de management no sirven para esta tarea. Las planificaciones y previsiones sólo son precisas si se basan en una historia de funcionamiento larga y estable y requieren un entorno relativamente estático. Las Startups no tienen ninguna de estas dos cosas”</blockquote>
        <h2>Conclusión</h2>
        <p>Podemos decir que una startup es una organización en la que se busca brindar una solución a un problema particular, en donde no se sabe el producto y/o servicio a ofrecer, los clientes y el mercado a donde se dirigirá. Además se busca que el modelo de negocio sea escalable. Para que está tenga una correcta gestión no se debe aplicar los métodos tradicionales del management sino otras metodología como lo son: El <strong>Customer development</strong>, el <strong>Lean Startup</strong>, entre otras.</p>
        <h3>Recursos</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vesQ0WSv9LM" frameborder="0" allowfullscreen></iframe>
    `,
    publishedAt: '2017-01-23T05:00:00.000Z'
}

export default withData(() => (
  <Page>
    <Page.Header />
    <div>
        <PostArticle data={{Post}}/>
    </div>
  </Page>
))