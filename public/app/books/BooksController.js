(function () {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books, dataService) {

        var vm = this;
        vm.nomeApp = books.nomeApp;

        vm.allBooks = dataService.getAllBooks();
        
    }


} ());