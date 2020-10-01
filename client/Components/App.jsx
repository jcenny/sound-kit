import React from 'react';
import { sampleSounds } from '../sampleSounds.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keys: sampleSounds,
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const { keys } = this.state;
    return (
      <div>
        {keys.map((set) => {
          let { key, sound } = set;
          return (
            <div>
              <div data-key={key}>
                <kbd>{key.toUpperCase()}</kbd>
              </div>
              <audio data-key={key} src={`./sounds/${sound}`}></audio>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;