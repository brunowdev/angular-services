(function () {

    angular.module('app')
        .value('tagService', {
            recuperaTag: recuperaTag
        });

    function recuperaTag(minutosLidos) {

        var tag = null;

        switch (true) {

            case (minutosLidos > 5000):
                tag = 'Devorador de livros';
                break;

            case (minutosLidos > 2500):
                tag = 'Virador de páginas';
                break;

            default:
                tag = 'Iniciante'

        }

        return tag;
    }

} ());