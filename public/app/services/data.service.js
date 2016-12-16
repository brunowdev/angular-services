(function () {

    angular.module('app')
        .factory('dataService', dataService);
    // Nome do serviço, função que será definida no $get

    function dataService() {

        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        }

        function getAllBooks() {
            return [
                {
                    id: d45a51d6w51dq61dwq1,
                    title: 'Think and Grow Rich',
                    author: 'Napoleon Hill',
                    published: 2000
                }
            ]
        }


        function getAllReaders() {
            return [
                {
                    id: f84r5w561f6sd1fsfsd615,
                    name: 'Shablau',
                    metaMinutosLeitura: 60,
                    minutosLidos: 17
                }
            ]
        }

    }


} ());