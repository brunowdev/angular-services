(function () {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books, dataService, LoggerBase, tagService) {

        var vm = this;
        vm.nomeApp = books.nomeApp;

        vm.allBooks = dataService.getAllBooks();
        vm.allReaders = dataService.getAllReaders();

        vm.getTag = tagService.recuperaTag;
        
        LoggerBase.output('O controller de Books foi criado');

    }


} ());