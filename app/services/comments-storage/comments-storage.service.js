angular.module('commentsStorageService')
    .factory('commentsStorageService', commentsStorageService);

commentsStorageService.$inject = ['$window'];

function commentsStorageService($window) {
    const storageKey = 'comments';

    return {
        saveComment: addCommentToItemInLS,
        getAllByItemId: getAllCommentsForItemFromLS,
    };

    function getAllCommentsForItemFromLS(id) {
        return angular.fromJson($window.localStorage.getItem(storageKey + '_' + id))  || [];
    }

    function addCommentToItemInLS(itemId, comment) {
        updateCommentsCount(itemId);
        let comments = angular.fromJson($window.localStorage.getItem(storageKey + '_' + itemId)) || [];
        comments.push(comment);
        $window.localStorage.setItem(storageKey + '_' + itemId, angular.toJson(comments))
    }

    function updateCommentsCount(itemId) {
        const itemsStorageKey = 'items';
        let items = angular.fromJson($window.localStorage.getItem(itemsStorageKey));
        items.map(item => {
            if (item.id === itemId) {
                item.commentsCount += 1;
            }
        });
        $window.localStorage.setItem(itemsStorageKey, angular.toJson(items));
    }
}
