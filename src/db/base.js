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

    }
]
];