(function () {

    angular.module('app')
        .controller('BooksControllerAllPromises', ['books', 'dataService', 'LoggerBase', 'tagService', BooksController]);


    function BooksController(books, dataService, LoggerBase, tagService) {

        var vm = this;

        vm.nomeApp = books.nomeApp;

        var allBooks = dataService.getAllBooks();
        var allReaders = dataService.getOutraFuncaoComProximo();

        // Passar o array com as promises que devem ser deferidas para executar uma ação 
        $q.all([allBooks, allReaders])
            .then(funcaoSucesso)
            .catch(trataErro);

        // A resposta é um array na mesma ordem de chamada das funções
        function funcaoSucesso(dataArray) {
            vm.allBooks = dataArray[0];
            vm.allReaders = dataArray[1];
        }

    }


} ());