
export default function NumeroMaior(props) {

  const { numA, numB } = props

  const getMaior = () => {
    if (numA > numB) {
      return numA
    }
    if (numB > numA) {
      return numB
    }
  }


  return (
    <>
      <h3>Qual é o maior número?</h3>
      <p>{getMaior()}</p>
    </>
  )


}
