const {options} = require('./options/mysqlconn.js');
const knex = require('knex')(options);


knex.from('usuarios').select("nombre", "edad").where('email', '=', 'asd@asd')
    .then((rows)=>{
        for(row of rows){
            console.log(row['nombre'] + ' tiene ' +row['edad']+' vueltas al sol');
        }
    })
    .catch((err)=>{console.log(err); throw error})
    .finally(()=>{
        knex.destroy();
    })