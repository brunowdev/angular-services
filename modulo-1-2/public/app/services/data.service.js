(function () {

    angular.module('app')
        .factory('dataService', ['$q', '$timeout', dataService]);
    // Nome do serviço, função que será definida no $get

    function dataService($q, $timeout) {

        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        }

        function getAllBooks() {

            var books = [
                {
                    id: 'd45a51d6w51dq61dwq1',
                    title: 'Think and Grow Rich',
                    author: 'Napoleon Hill',
                    published: 2000
                }
            ]

            var deferred = $q.defer();

            $timeout(function () {

                var successful = true;

                if (successful) {
                    deferred.notify('Iniciando...'); // Notificações que são lançadas durante o andamento do processo
                    deferred.notify('Quase lá...');
                    deferred.resolve(books);
                } else {
                    deferred.notify('Houve um erro...');
                    deferred.notify('Identificando possíveis causas...');
                    deferred.rejeect('Erro ao carregar os livros');
                }

            }, 1000);

            return deferred.promise;

        }


        function getAllReaders() {

            return [
                {
                    id: 'f84r5w561f6sd1fsfsd615',
                    name: 'Shablau',
                    metaMinutosLeitura: 60,
                    minutosLidos: 55000
                }
            ]
        }

    }

    dataService.$inject = ['LoggerBase'];

} ());