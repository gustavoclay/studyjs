export default function Familia(props){

  return (
    <>
      <h3>Familia {props.nomeFamilia}</h3>
      <div>
        {props.children}
      </div>
    </>
  )

}
