import mysql from 'mysql2/promise'

export default async function handler (req, res){
    const connection= await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '<Salam.2023>',
        database: 'alicho',
        })
    
    // connection.connect((err)=>{
    //     if(!err){
    //         console.log('salam');
    //     }else{
    //         console.log("error");
    //     }
    // })

    res.status(200).json({name:'Ali'})

}
