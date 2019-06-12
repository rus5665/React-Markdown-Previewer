import React from 'react'
import './App.css'

export default class App extends React.Component {
  state = {
    textareaText: ''
  }

  textareaRef = React.createRef()

  handleTextareaChange = () => {
    this.setState({
      textareaText: this.textareaRef.current.value
    })
  }

  render() {
    const { textareaText } = this.state
    //console.log(this.state.textareaText)
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <textarea cols="80" rows="20" value={textareaText} ref={this.textareaRef} onChange={this.handleTextareaChange}
                  placeholder="Type here, stupid..."/>
         <p>{textareaText}</p>
      </div>
    )
  }
}

