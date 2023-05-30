let db  = [
//clientes
[
    {
        id:"1",
        nombre : "juan",
        apellido : "mota",
        telefono:"123456",
        peluquero:"lucas",
        servicioPreferido:"corte y barba",
        historial :[
            //tickets
            {
                date : "29/5/2023 12:12:32",
                servicio : "corte",
                peluquero : "lucas",
                productos : [],
                observacion:"se porta bien",
                total : 2000,
            },{
                date : "15/6/2023 15:12:00",
                servicio : "corte",
                peluquero : "lucas",
                productos : ["pomada"],
                observacion:"se porta bien",
                total : 2500,
            }
        ]

    },
    {
        id:"2",
        nombre : "silvio",
        apellido : "qqer",
        telefono:"123456",
        peluquero:"lucas",
        servicioPreferido:"corte y barba",
        historial :[
            //tickets
            {
                date : "29/5/2023 12:12:32",
                servicio : "corte",
                peluquero : "lucas",
                productos : [],
                observacion:"se porta bien",
                total : 2000,
            },{
                date : "15/6/2023 15:12:00",
                servicio : "corte",
                peluquero : "lucas",
                productos : ["pomada"],
                observacion:"se porta bien",
                total : 2500,
            }
        ]

    },
    {
        id:"3",
        nombre : "sergio",
        apellido : "modwdta",
        telefono:"123456",
        peluquero:"lucas",
        servicioPreferido:"corte y barba",
        historial :[
            //tickets
            {
                date : "29/5/2023 12:12:32",
                servicio : "corte",
                peluquero : "lucas",
                productos : [],
                observacion:"se porta bien",
                total : 2000,
            },{
                date : "15/6/2023 15:12:00",
                servicio : "corte",
                peluquero : "lucas",
                productos : ["pomada"],
                observacion:"se porta bien",
                total : 2500,
            }
        ]

    }

],
//empleados
[
    {
        id : "1",
        nombre : "lucas",
        apellido : "parra",
        comision : "40",
        puesto : "peluquero",
        clientes : [],
        historial : [],

    }

],
//productos
[
    {
        id : "1",
        nombre : "pomada",
        descripcion : "pomada opaca",
        precio : "500",
        stock : "4",
        costo : "300",

    }
],
//servicios
[
    {
        id : "1",
        nombre : "corte",
        descripcion : "corte clasico maquina y tijera",
        tiempo : "30",
        costo: "0",

    },
    {
        id : "2",
        nombre : "corte y barba",
        descripcion : "corte clasico maquina y tijera",
        tiempo : "60",
        costo: "0",

    }
],
//trunos diarios
[
    {
        id:1,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:2,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:3,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:4,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:5,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:6,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:7,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:8,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:9,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:10,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:11,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:12,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:13,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:14,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:15,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:16,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:17,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:18,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:19,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:20,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:21,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    },
    {
        id:22,
        nombre: 'Juan', 
        fecha: '2023-05-22',
        peluquero: 'Carlos', 
        tipoServicio: 'corte',
    }


],
]

export default db