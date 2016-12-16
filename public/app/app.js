(function () {

    var app = angular.module('app', []);

    // $provide é um serviço do angular, por isso ele sabe como injetá-lo
    app.config(function ($provide) {

        // Primeiro parâmetro é o nome do serviço
        $provide.provider('books', function () {

            this.$get = function () { // Todo provedor deve ter uma função '$get' para criar o serviço
                var nomeApp = 'Registro de Livros';
                var descricaoApp = 'Registra os livros que você leu.'

                return {
                    nomeApp: nomeApp,
                    descricaoApp: nomeApp
                }

            }
        });
    });
} ());