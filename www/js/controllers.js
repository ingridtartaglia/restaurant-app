angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('menuCtrl', function($scope) {
    $scope.pizzas = [
        {
            img: "img/mozzarella.png",
            name: "Mozzarella",
            description: "Mozzarella cheese, tomato sauce and oregano",
            price: 10,
        },
        {
            img: "img/pepperoni.png",
            name: "Pepperoni",
            description: "Pepperoni, onions and tomato sauce",
            price: 12,
        },
        {
            img: "img/margherita.png",
            name: "Margherita",
            description: "Buffalo Mozzarella, tomato sauce and basil",
            price: 12,
        },
        {
            img: "img/portuguese.png",
            name: "Portuguese",
            description: "Ham, onions, eggs and oregano",
            price: 12,
        },
        {
            img: "img/hawaiian.png",
            name: "Hawaiian",
            description: "Ham, pineapple and bacon",
            price: 12,
        },
        {
            img: "img/mushrooms.png",
            name: "Mushrooms",
            description: "Shitaki, shimeji and champignon",
            price: 14,
        },
        {
            img: "img/pepper.png",
            name: "Peppers",
            description: "Yellow pepper, jalapeño and chilli",
            price: 13,
        },
    ];
})

.controller('aboutUsCtrl', function($scope) {});
