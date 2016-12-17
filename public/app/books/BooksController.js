(function () {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books, dataService, LoggerBase) {

        var vm = this;
        vm.nomeApp = books.nomeApp;

        vm.allBooks = dataService.getAllBooks();
        LoggerBase.output('O controller de Books foi criado');

    }


} ());