const express = require('express')
const post = require('../models/postschema')
const router = express.Router()

router.post('/add',async(req,res)=>{
    try {
        const {title,creator,paragraph} = req.body
        const newPost = new post({title,creator,paragraph})
        await newPost.save();
        res.status(200).send({msg:'user created',newPost})
    } catch (error) {
        console.log(error)
    }
})
router.get('/all-post',async(req,res)=>{
    try {
        const listPosts= await post.find()
        res.status(200).send({msg:'postlist',listPosts})
    } catch (error) {
        res.status(400).send({msg:'can not get postlist'})
    }
})
router.delete('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params;
        await post.findOneAndDelete({_id:req.params._id})
        res.status(200).send({msg:'post deleted'})
    } catch (error) {
        res.status(400).send({msg:'can not find this post'})
    }
}
)
router.put('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params;
        const updatePost=await post.updateOne({_id},{$set:{...req.body}})
        res.status(200).send({msg:'post updated',updatePost})
    } catch (error) {
        res.status(400).send({msg:'can not update post'})
    }
}
)
router.get('/:_id',async(req,res)=>{
    try {
        const postToGet= await post.findOne({_id:req.params._id})
        res.status(200).send({msg:'post geted',postToGet})
    } catch (error) {
        res.status(400).send({msg:'can not get post'})
    }
})
module.exports = router;