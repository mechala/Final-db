const app= new Vue({
    el:'#app',
    data: {
        mensaje:"hola",
        paradas:[
            {id:1,
            empresa:"Tumario",
            llegada:"12/01/19",
            partida:"13/01/19",
            estado:"Bueno"},
            {id:2,
                empresa:"Eltuyo",
                llegada:"12/01/19",
                partida:"13/01/19",
                estado:"Malo"}

         ]


        
    }
    
    })