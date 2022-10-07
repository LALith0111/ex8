import React, { Component } from "react";
import ToggleSwitch from "./toggle";

class App extends Component {
render() {
 return (
 <React.Fragment>
  <b><ToggleSwitch label="Do you like Cars" /></b>
  <b><ToggleSwitch label="Do you like Bikes" /></b>
 </React.Fragment>

 );
}
}
export default App;