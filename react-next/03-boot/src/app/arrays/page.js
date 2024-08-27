import { Table } from "react-bootstrap";
import Pagina from "../components/Pagina";

const carros = ["HB20", "Palio", "Civic", "Onix"]

export default function page() {
  return (
    <Pagina titulo="Arrays">

      {carros.map(carro => {
        return <p>{carro}</p>
      })}

      <ul>
        {carros.map(carro => {
          return <li>{carro}</li>
        })}
      </ul>

      <Table striped bordered hover>
        <thead className="table-primary">
          <tr>
            <th>Carro</th>
          </tr>
        </thead>
        <tbody>
          {carros.map(carro => {
            return <tr>
              <td>{carro}</td>
            </tr>
          })}
        </tbody>
      </Table>


    </Pagina>
  )
}
