import React from "react";

const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem vindo {props.nome}</h2>
      <h3>Tenho {props.idade} anos de idade</h3>
    </div>
  )
}

const Equipe = (props) => {
  return (
    <div>
      <hr />
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social facebook={props.facebook} instagram={props.instagram} />
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>{props.nome}</h2>
      <h3>Olá, meu nome é {props.nome}, o cargo que ocupo é {props.cargo} e minha idade é {props.idade}</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.facebook}>Facebook</a>
      <a href={props.instagram}>Instagram</a>
    </div>
  )
}


function Propriedades() {
  return (
    <div>

      <h1>Nossa Equipe</h1>
      {/* <BemVindo nome="Joãozinho" idade="20" />
      <BemVindo nome="Angelo" idade="22" /> */}

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

export default Propriedades;
