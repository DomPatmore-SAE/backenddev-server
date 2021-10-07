import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const port = 3000
const projects= [

]

app.get('/', (req, res) => {
  res.json({message:"Hello"})
})

app.get('/projects', (req,res)=>{

  res.json(projects)
})
app.post('/project',(req,res)=>{
  console.log(`Project: ${req.body.name} `)
  //get name and creator of project
  //create object and add to list
  //return list of projects
  projects.push({projectId:1,name:req.body.name})
  res.sendStatus(200)
})
app.get('/project/update/:projectId',(req,res)=>{
  console.log(`Which project to update? ${req.params.projectId}`)
  res.sendStatus(200)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})