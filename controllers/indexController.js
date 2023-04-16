const { log } = require('console');
const fs = require('fs')
const path = require('path');
let lista = './data/toDoList.json'
let data = fs.readFileSync(lista, 'utf-8') 
let dataJson = JSON.parse(data)


module.exports = {
    index: function(req,res){
        let data = fs.readFileSync(lista, 'utf-8')
        let dataJson = JSON.parse(data)
        res.render('index', {tareas: dataJson})
    },
    create: function(req,res){
        res.render('creacion')
    },
    creado: function(req,res){
        let tarea = {
            id: dataJson.length + 1 ,
            ...req.body
        }
        // console.log(tareas);
        let tareasArchivos = fs.readFileSync(lista, 'utf-8')
        let tareas 
        if(tareasArchivos == ""){
             tareas = [];
        }else{
             tareas = JSON.parse(tareasArchivos);
        }
        tareas.push(tarea)
        dataJson = JSON.stringify(tareas,null,2);
        fs.writeFileSync(lista, dataJson)
       return res.redirect('/')
    },
   
    edit: function(req,res){
        const id = req.params.id;
        let data = fs.readFileSync(lista, 'utf-8')
        let dataJson = JSON.parse(data)
        const tareas = dataJson.find(tarea => tarea.id == id)
        console.log(tareas);
        res.render('edit', {dataJson: tareas})
    },
    edited: function(req,res){
        let id = req.params.id;
        let tarea = {
            id: id,
            ...req.body
        }
    
        let data = fs.readFileSync(lista, 'utf-8');
        let dataJson = JSON.parse(data);
        let tareaIndex = dataJson.findIndex(t => t.id == id);
        if (tareaIndex !== -1) {
            
            dataJson[tareaIndex] = tarea;
            fs.writeFileSync(lista, JSON.stringify(dataJson, null, 2));
            return res.redirect('/');
        }
        
    },
        delete: function(req, res) {
            let id = req.params.id;
            let data = fs.readFileSync(lista, 'utf-8');
            let dataJson = JSON.parse(data);
        
           
            let tareaIndex = dataJson.findIndex(t => t.id == id);
            if (tareaIndex !== -1) {
                
                dataJson.splice(tareaIndex, 1);
                fs.writeFileSync(lista, JSON.stringify(dataJson, null, 2));
                return res.redirect('/');
            } else {
               
                return res.render('error', { mensaje: 'Tarea no encontrada' });
            }
          }
}
