import { Datas } from '../../components/data'
import  Connection  from '../../db/db'
export default function Api(req,res){
  /*  res.status(200).json({
        message:"api working",Datas
    })
*/
 if(req.method === "GET"){
    Connection.query(`SELECT * FROM usher_js.newsletter`,(err,result) =>{
        if(err) res.send(err);
        else{
            res.send(result)
        }
    })
 }
 if(req.method === "POST" ){
     const email = req.body
    Connection.query(`INSERT 
    INTO 
    usher_js.newsletter(email) 
    VALUES(?)`,
   [email],(err,result) =>{
        if(err) res.send(err);
        else{
            res.send(result)
        }
    })
 }
   
}