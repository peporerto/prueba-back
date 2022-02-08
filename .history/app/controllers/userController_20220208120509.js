const { user } = require('../database/db');
const users = require('../models/users');

const getAllUsers = async (req, res, next) => {
    try {
     const allUsers = await user.findAll();
     res.json(allUsers);
    } catch (error) {
        next(error);
    }
 
 }
 const getUsers = async (req, res, next) => {
    try {
     const getUser = await user.findOne({
         where: {id: req.params.usersId}
     })

  
      
     res.json(getUser);
    } catch (error) {
        next(error);
    }
 
 }


 const updateUsers = async (req, res, next) => {
    try {
     await user.update(req.body,{
         where: {id: req.params.usersId}
     }) 
     res.json({success:'Se ha actualizado correctamente'});
    } catch (error) {
        
    }
 
 }
 const deleteUsers = async (req, res, next) => {
    try {
     await user.destroy({
         where: {id: req.params.usersId}
     }) 
     res.json({success:'Se ha actualizado correctamente'});
    } catch (error) {
        next(error);
    }
 
 }

 const createUsers = async (req, res, next) => {
    try {
     const newUsers =  {Artista,Nombre_cancion,Duracion,Album}=req.body
     res.json(newUsers );
    } catch (error) {
        next(error);
    }
 
 }




module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers,
    getUsers
}

