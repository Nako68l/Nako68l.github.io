angular.module('selectedItemStorage')
    .factory('selectedItemStorage', selectedItemStorage);

selectedItemStorage.$inject = ['$window'];

function selectedItemStorage() {
    const selectedItemKey = 'selectedItem';
    const itemPositionNumberKey = 'itemPositionNumber';

    return {
        saveSelectedItem: saveSelectedItem,
        saveItemPositionNumber: saveItemPositionNumber,
        getSelectedItem: getSelectedItem,
        getItemPositionNumber: getItemPositionNumber,
        removeSelectedItem: removeSelectedItem,
        removeItemPositionNumber: removeItemPositionNumber,
    };

    function saveSelectedItem(item){
        localStorage.setItem(selectedItemKey, angular.toJson(item));
    }

    function saveItemPositionNumber(number){
        localStorage.setItem(itemPositionNumberKey, number);
    }

    function getSelectedItem() {
        return angular.fromJson(localStorage.getItem(selectedItemKey)) || null;
    }

    function getItemPositionNumber() {
        return localStorage.getItem(itemPositionNumberKey);
    }

    function removeSelectedItem() {
        localStorage.removeItem(selectedItemKey);
    }

    function removeItemPositionNumber() {
        localStorage.removeItem(itemPositionNumberKey);
    }
}
