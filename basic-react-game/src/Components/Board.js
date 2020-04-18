import React, { Component } from 'react'
import Square from './Square'
export default class Board extends Component{
   
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} />
    }

   /*  createGrid = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 5; j++) {
            children.push(this.renderSquare(j))
          }
          //Create the parent and add the children
          table.push(<div className="border-row">{children}</div>)
        }
        return table
      } */



render(){
    return(
        <div>
          <div className="border-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
          </div>
          <div className="border-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
          </div>
          <div className="border-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
        

        </div>
    )
}
}