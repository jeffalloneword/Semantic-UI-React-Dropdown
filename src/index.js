import React, { Component } from "react";
import { render } from "react-dom";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    const options = [
      {
        image: { avatar: true, src: "https://alloneword.com/images/julia.jpg" },
        text: "Davey Jones",
        value: "userone"
      },
      {
        image: {
          avatar: true,
          src: "https://alloneword.com/images/gengar.png"
        },
        text: "Gengar",
        value: "usertwo"
      },
      {
        image: {
          avatar: true,
          src: "https://alloneword.com/images/fbooth.png"
        },
        text: "Frank Booth",
        value: "fbooth"
      }
    ];

    return (
      <div className="container">
        <div>
          <p>&nbsp;</p>
          <h2>Semantic-UI-React Dropdown</h2>
          <p>&nbsp;</p>
        </div>

        <div>
          <Dropdown
            placeholder="Select user..."
            fluid
            selection
            scrolling
            options={options}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
