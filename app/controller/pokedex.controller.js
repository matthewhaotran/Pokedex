(function(){
    'use strict';

    angular
        .module('app')
        .controller('PokedexController', PokedexController)

    PokedexController.$inject = ['PokedexFactory'];

    function PokedexController(PokedexFactory) {
        var vm = this;
        vm.getPokemonInfo = getPokemonInfo;

        ///////////////////////////////////////////////////////

        function getPokemonInfo (id) { //This function gets info for one pokeon
            PokedexFactory
                .getPokeman(id)
                .then(function(pokemonInfo){
                    vm.pokemonInfo = pokemonInfo;
                    vm.pokemonImgUrl = pokemonInfo.sprites.front_shiny;
                    console.log(vm.pokemonImgUrl);
                });
        }

        PokedexFactory //This function gets info for all the pokemon to populate the list
            .getPokemon()
            .then(function(pokemon) {
                vm.pokemon = pokemon;
            });

        activate();

        function activate() { }
    }
})();