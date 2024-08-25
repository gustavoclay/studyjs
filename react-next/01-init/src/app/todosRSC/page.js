
export default async function todos() {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json()
  console.log(todos)

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {!todos && 'Carregando...'}
        { todos && todos.map(todo => {
          return (
            <li key={todo.id}>{todo.title} - {todo.completed ? '✅' : '❌'}</li>
          )
        })}
      </ul>
    </>
  )
}
