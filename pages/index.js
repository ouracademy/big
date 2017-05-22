import Page from '../layouts/main'
import PostList from '../components/post/list'
import Slider from '../components/home/slider'
import withData from '../lib/withData'
import 'rxjs'
import { Observable } from 'rxjs/Observable';

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
      <Page title="Aprende y crea tu futuro">
        {
          this.state.isServer ? <div>Loading</div> : <Page.Header alternate={this.state.alternate} />
        }
        <Slider />
        <PostList />
      </Page>
    )
  }
}

export default withData(HomePage)