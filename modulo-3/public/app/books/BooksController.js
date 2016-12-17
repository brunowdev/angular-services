(function () {

    angular.module('app')
        .controller('BooksController', ['$q', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', BooksController]);


    function BooksController($q, books, dataService, badgeService, $cookies, $cookieStore, $log) {

        var vm = this;

        vm.appName = books.appName;

        dataService.getAllBooks()
            .then(getBooksSuccess, null, getBooksNotification)
            .catch(errorCallback)
            .finally(getAllBooksComplete);

        function getBooksSuccess(books) {
            vm.allBooks = books;
        }

        function getBooksNotification(notification) {
        }

        function errorCallback(errorMsg) {
        }

        function getAllBooksComplete() {
        }

        dataService.getAllReaders()
            .then(getReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);

        function getReadersSuccess(readers) {
            vm.allReaders = readers;
        }

        function getAllReadersComplete() {
        }

        vm.getBadge = badgeService.retrieveBadge;

        vm.favoriteBook = $cookies.favoriteBook;

        vm.lastEdited = $cookieStore.get('lastEdited');

        $log.log('logging with log');
        $log.info('logging with info');
        $log.warn('logging with warn');
        $log.error('logging with error');
        $log.debug('logging with debug');


    }

} ());