(function () {
  'use strict';

  var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookie",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Cake",
    quantity: "2"
  }
];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buy = this;
    buy.items = ShoppingListCheckOffService.getItems();
    buy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.addItem = ShoppingListCheckOffService.additem();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.newItem = [];
    service.items = shoppingList;

    service.additem = function () {
      return service.newItem;
    }
    service.removeItem = function (itemIndex) {
      var itm = service.items[itemIndex];
      service.newItem.push(itm);
      service.items.splice(itemIndex, 1);
    }
    service.getItems = function () {
      return service.items;
    }
  }

})();
