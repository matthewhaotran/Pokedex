(function () {
    'use strict';

    angular
        .module('app')
        .controller('PokedexController', PokedexController)

    PokedexController.$inject = ['PokedexFactory'];

    function PokedexController(PokedexFactory) {
        var vm = this;
        vm.getPokemonInfo = getPokemonInfo;
        vm.appear = false;

        ///////////////////////////////////////////////////////

        function getPokemonInfo(url) { //This function gets info for one pokemon
            PokedexFactory
                .getPokeman(url)
                .then(function (pokemonInfo) {
                    vm.pokemonInfo = pokemonInfo;
                    vm.pokemonImgUrl = pokemonInfo.sprites.front_shiny;
                    vm.appear = true;
                });
        }

        PokedexFactory //This function gets info for all the pokemon to populate the list
            .getPokemon()
            .then(function (pokemon) {
                vm.pokemon = pokemon;
            });

        activate();

        function activate() {}
    }
})();