db.empleados.aggregate(
    [
        {
            $lookup: {
                from: "departamentos",
                localField: "departamento",
                foreignField: "idDepart",
                as: "empleado"
            }
        },

        {
            $project: {
                nombre: 1,
                _id: 0,
                mesContratacion: {$month: ["$fechaInicio"]},
                horas: 1,
                departamento: "$empleado.nombre",
                presupuesto: "$empleado.presupuesto",
                salarioHora: {$arrayElemAt: ["$empleado.remuneracionHora", 0]},
            }
        },{
            $set: {
                totalFactur: {$multiply: ["$horas", "$salarioHora"]},
            }
        }
]).pretty()