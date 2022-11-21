(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};



        service.Create = Create;
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Update = Update;
        service.Delete = Delete;

        return service;


        function Create(user) {
            return $http.post('http://localhost:3000/user', user).then(handleSuccess, handleError('Error creating user'));
        }

        function GetAll() {
            return $http.get('http://localhost:3000/user').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetByUsername(username) {
            console.log("woring")
            return $http.get('http://localhost:3000/user?' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
        
        function GetById(id) {
            return $http.get('http://localhost:3000/user?' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Update(user) {
            return $http.put('http://localhost:3000/user/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            console.log(id)
            return $http.delete('http://localhost:3000/user/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

    }

})();