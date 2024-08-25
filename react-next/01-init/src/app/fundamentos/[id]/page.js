
export default function fundamentosId(props) {

  console.log(props)

  return (
    <>
      <div>Path Params: {JSON.stringify(props.params)} </div>
      <div>Query Params: {JSON.stringify(props.searchParams)} </div>
    </>
  )
}
