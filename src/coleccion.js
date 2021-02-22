db.empleados.drop()
db.empleados.insertMany([
    {id: 01, nombre: "Marta Alfonso", fechaInicio: new Date("2017-12-22"), horas: 23000, Departamento: 4},
    {id: 02, nombre: "Victor Roncel", fechaInicio: new Date("2018-04-11"), horas: 20000, Departamento: 1},
    {id: 03, nombre: "Miguel Portillo", fechaInicio: new Date("2009-10-04"), horas: 82100, Departamento: 2},
    {id: 04, nombre: "Juanma Moreno", fechaInicio: new Date("2011-09-23"), horas: 80000, Departamento: 3},
    {id: 05, nombre: "Donald Trump", fechaInicio: new Date("2008-03-29"), horas: 90000, Departamento: 3},
    {id: 06, nombre: "Mahatma Gandhi", fechaInicio: new Date("2018-05-09"), horas: 20000, Departamento: 1},
    {id: 07, nombre: "Freddie Mercury", fechaInicio: new Date("2017-04-08"), horas: 25000, Departamento: 3},
])

db.departamentos.insertMany([
    {id: 1, clasificacion: "Traducciones", remuneracionHora: 20},
    {id: 2, clasificacion: "Producción", remuneracionHora: 15},
    {id: 3, clasificacion: "Marketing", remuneracionHora: 30},
    {id: 4, clasificacion: "Diseño Digital", remuneracionHora: 25},
    {id: 5, clasificacion: "Recursos HUmanos", remuneracionHora: 22}
    ])
