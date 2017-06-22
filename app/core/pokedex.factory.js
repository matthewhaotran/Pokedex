(function(){
    'use strict';

    angular
        .module('app')
        .factory('PokedexFactory', PokedexFactory)

    PokedexFactory.$inject = ['$http'];

    function PokedexFactory($http) {
        var service = {
            getPokemon: getPokemon,
            getPokeman: getPokeman
        };

        return service;

        //////////////////////////////////////////

        function getPokemon() { 
            return $http
                .get('http://pokemon.origincodeacademy.com/api/v2/pokemon')
                .then(function (response) {
                    return response.data.results;
                });
        }

        function getPokeman(id) {
            return $http
                .get('http://pokemon.origincodeacademy.com/api/v2/pokemon/' + id + '/')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();