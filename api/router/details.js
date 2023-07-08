const express=require('express');
const mongoose=require('mongoose');
const Detail=require('../../model/details')
const router=express.Router();

router.get('/',(req,res,next)=>{
    Detail.find()
        .then(result=>{
            res.status(200).json({
                detailData:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
})

router.post('/',(req,res,next)=>{
    console.log(req.body);
    const detail=new Detail({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email
    })

    detail.save()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                newDetails:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})

module.exports=router;