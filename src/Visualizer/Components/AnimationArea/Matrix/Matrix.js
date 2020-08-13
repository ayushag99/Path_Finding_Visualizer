import React, { Component } from "react";
import styles from "./Matrix.module.css";

import Block from "./Block/Block";

class Matrix extends Component {
  render() {
    return (
      <div className={styles.area}>
        {this.props.matrix.map((row, index1) => {
          return (
            <div className={styles.row} key={index1}>
              {row.map((block_type, index2) => {
                // HERE: in the array of array the value stored is the React reference, that will be assigned to respective block element
                // <Block className={styles.block} key={`${index1}-${index2}`} refereces = {block_reference}/>

                  return <Block
                    className={styles.block}
                    key={`${index1}-${index2}`}
                    type={block_type}
                  />
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Matrix;
