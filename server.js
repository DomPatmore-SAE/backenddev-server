import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const port = 3000
const projects= [
  {name:'Food Ordering form Single Restaurant'},
  {name:'Commerce App'},
]

app.get('/', (req, res) => {
  res.json({message:"Hello"})
})

app.get('/projects', (req,res)=>{

  res.json(projects)
})
app.post('/project',(req,res)=>{
  console.log(`Project: ${req.body.title} `)
  //get name and creator of project
  //create object and add to list
  //return list of projects
  projects.push({name:req.body.title})
  res.json(projects)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})