import Page from '../layouts/main'
import PostList from '../components/post/list'
import Slider from '../components/home/slider'
import withData from '../lib/withData'
import 'rxjs'
import { Observable } from 'rxjs/Observable';

import Head from '../components/head'

const isScrollInSlider = (element) => element.scrollTop <= 400

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = { isServer: true }
  }

  componentDidMount() {
    this.setState((prevState, props) => ({ isServer: false, alternate: isScrollInSlider(document.body) }))

    this.scrollSub = Observable.fromEvent(window, 'scroll')
      .map(event => isScrollInSlider(event.target.body))
      .distinctUntilChanged()
      .subscribe(isScrollInSlider =>
        this.setState((prevState, props) => Object.assign(prevState, { alternate: isScrollInSlider })))
  }

  componentWillUnmount() {
    this.scrollSub.unsubscribe()
  }

  render() {
    return (
      <Page>
        {
          !this.state.isServer && <Page.Header alternate={this.state.alternate} />
        }
        <Slider />
        <PostList />
      </Page>
    )
  }
}

export default withData(({ serverState }) => (
  <div>
    {serverState && <Head />}
    <HomePage />
  </div>
))