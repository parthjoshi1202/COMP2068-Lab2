const {
    index, show, create, update, destroy
}= require('../controllers/genres'); 

module.exports = router => {
  router.get('/genres', index);
  router.get('/genres/:id', show);
  router.post('/genres', create);
  router.put('/genres', update);
  router.delete('/genres', destroy);
};