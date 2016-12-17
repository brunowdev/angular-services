(function () {

    angular.module('app')
        .controller('BooksControllerAllPromises', ['books', 'dataService', 'LoggerBase', 'tagService', BooksController]);


    function BooksController(books, dataService, LoggerBase, tagService) {

        var vm = this;
        vm.nomeApp = books.nomeApp;

        dataService.getAllBooks()
            .then(getBooksSuccess, null, notificationFunction)
            .catch(errorHandler)
            .finally(onComplete);

        // Função quando a promise é deferida
        function getBooksSuccess(books) {
            vm.allBooks = books;
        }

        // Trocada pela errorHandler que trata também erros no callback
        // Função quando a promise é rejeitada
        // function getBooksError(reason) {
        //    LoggerBase.output(reason);
        // }

        function errorHandler(exception) {
            LoggerBase.output('Catch: ' + exception);
        }

        function onComplete() {
            LoggerBase.output('Livros carregados');
        }

        // Função que recebe as notificações disparadas pela promise
        function notificationFunction(message) {
            console.log('MENSAGEM : ' + message);
        }

        vm.allReaders = dataService.getAllReaders();

        vm.getTag = tagService.recuperaTag;

        LoggerBase.output('O controller de Books foi criado');

    }


} ());