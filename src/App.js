import React, { Component } from 'react';
import ValidateComp from './ValidationComponent/ValidationComponent';
import CharComps from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
    state = {
        userInput: ''
    };

    changeHandler = (event) =>{
        this.setState({userInput: event.target.value});
    };

    deleteHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    };


  render() {
      let renderChars = null;
      let stringArray = this.state.userInput.split('');
      if (stringArray.length > 0){
          renderChars = (
              <div>
                  {stringArray.map((letter,index) => {
                      return <CharComps
                          letter={letter}
                          key={index}
                          clicked={() => this.deleteHandler(index)}/>
                  })}
              </div>
          );
      }

    return (

      <div>
          <input type="text" onChange={this.changeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput.length}</p>
          <ValidateComp length={this.state.userInput.length}/>
          {renderChars}
          <hr/>
          <ol>
              <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
              <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
              <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
              <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
              <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
              <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
