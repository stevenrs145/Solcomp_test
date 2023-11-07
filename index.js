const express = require ('express');
const app=express();

app.use(express.json());

const students=[
    {id: 1, name: 'jorge', age: 20, enroll: true},
    {id: 2, name: 'jorge', age: 20, enroll: true},
    {id: 3, name: 'jorge', age: 20, enroll: true},
    {id: 4, name: 'jorge', age: 20, enroll: true},

];

app.get('/', (req,res) =>{
    res.send('Node JS api');
})

app.get('/api/students', (req,res) =>{
    res.send(students);
})

app.get('/api/students/:id', (req,res) =>{
    const students = students.find( c => c.id === parseInt(req.params.id));
    if (!students) return res.status(404).send('estudiantes no encontrados');
    else res.send(students)
})

