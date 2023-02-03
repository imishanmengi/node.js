const User = require('../models/User');

const adduser =  (req,res,next)=>{
    const{name,email,phonenumber}=req.body;
    console.log(req.body);
    User.create({
        name:name,
        email:email,
        phonenumber:phonenumber

    })    
        
    
    .then(record =>{
        console.log(record);
        res.json(record);
    })
    .catch(error=>{
        console.log(error);
        res.json(error);
    })

    }
    

const getuser = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers:users});
        // res.json('Ishan');
    
    }catch(error){
        console.log('Get user is Failing', JSON.stringify(error))
        res.status(500).json({
            error:error
        })

    }
    
}
const deleteuser = async (req,res)=>{
    try{
        if(req.params.id=='undefined'){
            console.log('id is missing');
            return res.status(400).json({err:'ID is missing'})
        }
        const uId=req.params.id;
        await User.destroy({where: {id:uId}});
        res.sendStatus(200);

    }catch(err){
        console.log(err);
        res.status(500).json(err)

    }

}

module.exports={
    adduser,
    getuser,
    deleteuser
};