const {index,show,create, update, destroy}= require('../controllers/movies');
module.exports=router=> {
    router.get("/movies", index);
    router.get("/movies/:id", show);
    router.get("/movies", create);
    router.put("/movies", update);
    router.delete("/movies",destroy);
    
    return router;
};