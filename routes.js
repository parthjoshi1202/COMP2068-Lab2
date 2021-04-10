module.exports= router => {
    require('./routes/genres')(router);
    require('./routes/movies')(router);
    require('./routes/people')(router);

    return router;
};