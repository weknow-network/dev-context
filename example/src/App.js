import React, { Component } from "react";

import ExampleComponent from "dev-context";

export default class App extends Component {
  render() {
    return (
      <DevContext.Provider value={true}>
        <div>
          <ExampleComponent text="Modern React component module" />
          <TextField
            variant="outlined"
            margin="dense"
            placeholder="Enter text and watch the render count (set debug context to true)"
            InputProps={{
              endAdornment: endIcon ? endIcon : <RenderCountAdornment />
            }}
          />
        </div>
      </DevContext.Provider>
    );
  }
}
