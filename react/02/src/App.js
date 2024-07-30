import React from "react";

const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem vindo {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <BemVindo nome="Joãozinho" idade="20" />
      <BemVindo nome="Angelo" idade="22" />
    </div>

  )
}

export default App;
