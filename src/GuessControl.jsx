import React, { useState } from "react";
import Button from "./Button";

class GuessControlOld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitGuess = this.onSubmitGuess.bind(this);
  }

  handleInputChange(event) {
    this.setState({ currentGuess: event.target.value });
  }

  onSubmitGuess() {
    this.props.onGuess(Number(this.state.currentGuess));
    this.setState({ currentGuess: "" });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.currentGuess}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.onSubmitGuess}>Submit Guess</Button>
      </div>
    );
  }
}

// New functional component version
const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState(""); 

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value); 
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess)); 
    setCurrentGuess(""); 
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange} 
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
