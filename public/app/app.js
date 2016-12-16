(function () {

    var app = angular.module('app', []);

    // Não é necessário injetar o provider, todo módulo já o possui
    app.provider('books', function () {
        this.$get = function () { // Todo provedor deve ter uma função '$get' para criar o serviço
            var nomeApp = 'Registro de Livros';
            var descricaoApp = 'Registra os livros que você leu.'

            var version = '1.0';

            if (incluirVersaoNoTitulo) {
                nomeApp += ' ' + version;
            }

            return {
                nomeApp: nomeApp,
                descricaoApp: nomeApp
            };

        };

        var incluirVersaoNoTitulo = false;
        this.setIncluirVersaoNoTitulo = function (valor) {
            incluirVersaoNoTitulo = valor;
        };

    });

    // O angular cria automaticamente o provedor com o sufixo Provider
    app.config(function (booksProvider) {
        booksProvider.setIncluirVersaoNoTitulo(true);
    });

} ());