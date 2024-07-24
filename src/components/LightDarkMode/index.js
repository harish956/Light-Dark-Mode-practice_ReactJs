import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  onChange = () =>
    this.setState(prevState => ({isClicked: !prevState.isClicked}))

  render() {
    const {isClicked} = this.state
    const styleClass = isClicked ? 'darkMode-container' : 'lightMode-container'
    const text = isClicked ? 'Light Mode' : 'Dark Mode'
    console.log(isClicked)
    return (
      <div className="bg-container">
        <div className={`container ${styleClass}`}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.onChange} type="button" className="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
