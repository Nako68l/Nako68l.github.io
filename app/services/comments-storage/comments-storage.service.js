angular.module('itemsStorageService')
    .factory('itemsStorageService', itemsStorageService);

itemsStorageService.$inject = ['$window'];

function itemsStorageService($window) {
    const itemsKey = 'items';

    return {
        saveOne: saveItemToLS,
        getAll: getAllItemsFromLS,
        remove: removeItemFromLS,
    };

    function saveItemToLS(data) {
        let items = $window.localStorage.getItem(itemsKey);
        $window.localStorage.setItem(itemsKey, items + angular.toJson(data))
    }

    function getAllItemsFromLS() {
        return angular.toJson($window.localStorage.getItem(itemsKey));
    }

    function removeItemFromLS(id) {
        let items = angular.fromJson($window.localStorage.getItem(itemsKey));
        let filteredItems = items.filter(el => !angular.equals(el.id, id));
        $window.localStorage.setItem(itemsKey, filteredItems)
    }
}
