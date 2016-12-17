(function () {

    var app = angular.module('app', []);

    // Não é necessário injetar o provider, todo módulo já o possui
    app.provider('books', ['constants', function (constants) {
        this.$get = function () { // Todo provedor deve ter uma função '$get' para criar o serviço

            var nomeApp = constants.APP_TITLE;
            var descricaoApp = constants.APP_DESCRIPTION;

            var version = constants.APP_VERSION;

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

    }]);

    // O angular cria automaticamente o provedor com o sufixo Provider
    // Os serviços registrados como constantes podem ser injetados nos configuradores
    // OS serviços criados como value não podem ser injetados na fase de configuração
    app.config(['booksProvider', 'constants', function (booksProvider, constants) {
        booksProvider.setIncluirVersaoNoTitulo(true);

        console.log('Exibindo o títulko na fase de configuração: ' + constants.APP_TITLE);

    }]);

} ());