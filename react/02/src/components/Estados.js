import React, { Component } from 'react'

export default class Estados extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: 'Joãozinho',
      contador: 0
    }

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar() {
    console.log("aumentar")
    let state = this.state;
    state.contador += 1;
    this.setState(state)
  }

  diminuir() {
    console.log("diminuir")
    let state = this.state;
    if (state.contador == 0) {
      alert("Contador zerado")
      return
    }
    state.contador -= 1;
    this.setState(state)
  }


  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h1>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h1>
      </div>
    )
  }
}

