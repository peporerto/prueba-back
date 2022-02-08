const { user } = require('../database/db');
const users = require('../models/users');

/**
 * funcion para obtener la lista de la tabla 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next  
 */

const getAllUsers = async (req, res, next) => {
    try {
     const allUsers = await user.findAll();
     res.json(allUsers);
    } catch (error) {
        next(error);
    }
 
 }
 /**
  * obtener un solo dato de la tabla 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
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
 /**
  * actualizar datos a una usuario
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */


 const updateUsers = async (req, res, next) => {
    try {
     await user.update(req.body,{
         where: {id: req.params.usersId}
     }) 
     res.json({success:'Se ha actualizado correctamente'});
    } catch (error) {
        
    }
 
 }
 /**
  * borrar usuaario de la tabla
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
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
 /**
  * crear un usuario 
  * @param {} req 
  * @param {*} res 
  * @param {*} next 
  */

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

