angular.module('itemsStorageService')
    .factory('itemsStorageService', itemsStorageService);

itemsStorageService.$inject = ['$window'];

function itemsStorageService($window) {
    const storageKey = 'items';

    return {
        saveOne: saveItemToLS,
        getAll: getAllItemsFromLS,
        removeById: removeItemFromLS,
    };

    function saveItemToLS(item) {
        let items = angular.fromJson($window.localStorage.getItem(storageKey)) || [];
        items.push(item);
        $window.localStorage.setItem(storageKey, angular.toJson(items));
    }

    function getAllItemsFromLS() {
        return angular.fromJson($window.localStorage.getItem(storageKey));
    }

    function removeItemFromLS(id) {
        let items = angular.fromJson($window.localStorage.getItem(storageKey));
        let filteredItems = items.filter(el => !angular.equals(el.id, id));
        $window.localStorage.setItem(storageKey, angular.toJson(filteredItems));
        $window.localStorage.removeItem('comments' + '_' + id);
    }
}
