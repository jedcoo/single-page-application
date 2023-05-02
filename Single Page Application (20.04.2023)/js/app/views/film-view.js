define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createButton = function() {
        return '<button class="random-film">Click Me to show characters of Rick & Morty</button>';
    };

    internals.createFilmCard = function(film) {
        let html = '<div class="card-container">';
        for (let i = 0; i < film.length; i++) {
            html += '<div class="card">' + '<br>' +
                    '<img src="' + film[i].image + '" alt="' + film[i].name + '" class="card-img-top">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">Name: </h5>' +
                        '<p class="card-text">' + film[i].name + '</p>' +
                        '<h5 class="card-title">Status: </h5>' +
                        '<p class="card-text">' + film[i].status + '</p>' +
                        '<h5 class="card-title">Origin: </h5>' +
                        '<p class="card-text">' + film[i].origin.name + '</p>' +
                    '</div>' +
                    '</div>';
        }
        html += '</div>'; // Close the container
        return html;
    };
    

    

    internals.renderFilm = function(film) {
        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }

        internals.elements.filmCard = $(internals.createFilmCard(film));
        internals.elements.app.append(internals.elements.filmCard);
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(film) {
        internals.elements.app = $('#app');
        internals.renderButton();

        if (film) {
            internals.renderFilm(film);
        }
    };

    return externals;
});
