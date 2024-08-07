import React, { Component } from 'react'

class Equipe extends Component {

  render() {
    return (
      <div>
        <Sobre {...this.props}></Sobre>
        <Social {...this.props}></Social>
      </div>
    )
  }
}

class Sobre extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.nome}</h2>
        <h3>Olá, meu nome é {this.props.nome}, o cargo que ocupo é {this.props.cargo} e minha idade é {this.props.idade}</h3>
        <hr />
      </div>
    )
  }
}

class Social extends Component {

  render() {
    return (
      <div>
        <a href={this.props.facebook}>Facebook</a>
        <a href={this.props.instagram}>Instagram</a>
      </div>
    )
  }
}


function ComponenteClasse() {
  return (
    <div>

      <h1>Nossa Equipe</h1>
      <hr />

      <Equipe
        nome="Joãozinho"
        cargo="Auxiliar Administrativo"
        idade="29"
        facebook="https://facebook.com/joaozinho"
        instagram="https://instagram.com/joaozinho"
      />

      <Equipe
        nome="Maria Santos"
        cargo="Secretária"
        idade="29"
        facebook="https://facebook.com/mariasantos"
        instagram="https://instagram.com/mariasantos"
      />
    </div>
  )
}

export default ComponenteClasse
