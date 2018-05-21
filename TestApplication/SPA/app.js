("use strict",
function () {
    angular.module("TestApp", ["toastr", "app.routes", "app.core", "app.service", "app.directive", 'ui.mask', "angularValidator", "ngAnimate", 'angular-loading-bar', 'ui.bootstrap', 'ngMaterial', 'ngMessages']).config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService')
    });
}());
