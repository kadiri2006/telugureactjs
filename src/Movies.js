

import react from 'react';

class Movies extends react.Component {
    render() {
        return (
            <div>
        <img src={require("./assets/images/1.svg").default}/>
            </div>
        );
    }
}

export default Movies;

/* import {Component  } from "react";
export class Movies extends Component {
  render() {
    return (
      <div>
        <img src={require("./assets/images/1.svg").default} />
      </div>
    );
  }
}
  *///inthis case we does not export by default so we have to import by using exact name and by placing within curely braces only
