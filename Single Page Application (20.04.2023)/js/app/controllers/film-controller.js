define(['views/film-view', 'services/film-service'], function(
    filmView,
    filmService
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        filmView.render();
    };

    internals.bindEventHandlers = function() {
        filmView.bind('button', internals.buttonHandler);
    };

    internals.buttonHandler = function() {
        var filmIndex = Math.floor(Math.random() * filmService.size);
        filmService.getFilm(filmIndex, function(film) {
            filmView.render(filmService.results);
        });
    };

    return externals;
});
