import Cabecalho from './Cabecalho'
import Familia from './Familia'
import Filho from './Filho'
import ImagemAleatoria from './Imagem'
import NumeroAleatorio from './NumeroAleatorio'
import NumeroMaior from './NumeroMaior'
import PrimeiroComponente from './PrimeiroComponente'


export default function FundamentosPage() {

  return (
    <>
      {/* <Cabecalho titulo="Produtos"/>
      <Cabecalho titulo="Clientes" subtitulo="Meus Clientes"/> */}

      <Cabecalho titulo="Fundamentos" subtitulo="Página de Fundamentos de React/Next" />
      <main style={{ paddingBottom: '500px' }}>
        {/* Comentários */}
        {/* <h1>Fundamentos</h1>
        <p>Este é um parágrafo</p>*/}

        <PrimeiroComponente />
        <hr />

        <NumeroMaior numA={5} numB={1} />
        <NumeroMaior numA={6} numB={100} />
        <NumeroMaior numA={1100} numB={221} />
        <hr />

        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />

        <hr />
        <div>
          <ImagemAleatoria />
          <ImagemAleatoria />
          <ImagemAleatoria />
          <ImagemAleatoria />
        </div>

        <hr />

        <Familia nomeFamilia="Soares">
          <Filho nome="Pedro" sobreNome="Soares" />
          <Filho nome="João" sobreNome="Soares" />
          <Filho nome="Marcia" sobreNome="Soares" />
          <Filho nome="Ellen" sobreNome="Soares" />
        </Familia>

        <Familia nomeFamilia="Xororo">
          <Filho nome="Sandy" sobreNome="Xororo" />
          <Filho nome="Junior" sobreNome="Xororo" />
        </Familia>


      </main>
    </>
  )

}
