define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api

    internals.films = [];

    externals.results;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af2b2716b2msh3a14637ac032a75p1d8faejsn1bd00b91b02e',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://rickandmortyapi.com/api/character', options)
        .then(response => response.json())
        .then(response => externals.results = response.results)
        .then(response => console.log(response))
        .catch(err => console.error(err));


    externals.size = internals.films.length

    externals.getFilm = function(index, cb) {
        cb(internals.films[index]);
    };

    return externals;
});

