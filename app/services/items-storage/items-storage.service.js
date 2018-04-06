angular.module('itemsStorageService')
    .factory('itemsStorageService', itemsStorageService);

itemsStorageService.$inject = ['$window'];

function itemsStorageService($window) {
    const itemsKey = 'items';

    return {
        saveOne: saveItemToLS,
        getAll: getAllItemsFromLS,
        removeById: removeItemFromLS,
    };

    function saveItemToLS(item) {
        let items = angular.fromJson($window.localStorage.getItem(itemsKey)) || [];
        items.push(item);
        $window.localStorage.setItem(itemsKey, angular.toJson(items));
    }

    function getAllItemsFromLS() {
        return angular.fromJson($window.localStorage.getItem(itemsKey));
    }

    function removeItemFromLS(id) {
        let items = angular.fromJson($window.localStorage.getItem(itemsKey));
        let filteredItems = items.filter(el => !angular.equals(el.id, id));
        $window.localStorage.setItem(itemsKey, angular.toJson(filteredItems));
    }
}
