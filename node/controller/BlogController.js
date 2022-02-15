import BlogModel from "../models/BlogModel.js";

/*   METODOS PARA EL CRUD */


// Mostrar registros

export const getAllBlogs = async ( req, res)=>{
    try{
        const blogs = await BlogModel.findAll();
        res.json( blogs );
    }catch( error ){
        res.json( {message : error.message })
    }
}

export const getBlog = async ( req, res) => {
    try {
        blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json( blog );
    }catch( error ){
        res.json( {message : error.message })
    }
}

export const createBlog = async (req, res) => {
    try {
        await BlogModel.create( req.body )
        res.json({
            "message" : "Creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message })
    }
}

export const updateBlog = async (req, res) =>{
    try {
        await BlogModel.update( req.body ,{
            where: { id:req.params.id}
        })
        res.json({
            "message" : "Actualizado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message })
    }
}


export const deleteBlog = async (req, res) =>{
    try {
        await BlogModel.destroy({
            where: { id:req.params.id }
        })
        res.json({
            "message" : "Eliminado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message })
    }
}