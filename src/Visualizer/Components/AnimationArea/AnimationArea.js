import React, { Component } from "react";

import Matrix from "./Matrix/Matrix";

class AnimationArea extends Component {
  render() {
    return (
      <div>
        <Matrix
          matrix={this.props.matrix}
          refers={this.props.refers}
          startNode={this.props.startNode}
          endNode={this.props.endNode}
        />
      </div>
    );
  }
}

export default AnimationArea;
