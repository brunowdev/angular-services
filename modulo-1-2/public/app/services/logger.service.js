(function () {


    angular.module('app')
        .service('LoggerBase', BookAppLogger);

    /**
     *  Ao criar um serviço por meio da função service, o Angular 
     *  interpreta como um construtor e a chama com o operador 'new'.
     */

    function LoggerBase() {
    }

    LoggerBase.prototype.output = function (message) {
        console.log('LoggerBase: ' + message);
    }

    function BookAppLogger() {

        LoggerBase.call(this);

        this.logBook = function (book) {
            console.log('Book: ' + book.title);
        }

    }

    BookAppLogger.prototype = Object.create(LoggerBase.prototype);

} ());