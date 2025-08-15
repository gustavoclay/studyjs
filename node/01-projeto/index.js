const express = require('express')
const app = express()

app.use(express.json()) // Middleware to parse JSON bodies

app.get('/hello', (req, res) => {
  res.send('Hello, World!')
})

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ])
})

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
})

app.post('/users', (req, res) => {
  const user = req.body
  console.log('Received user:', user)
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }
  res.status(201).json(user)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
