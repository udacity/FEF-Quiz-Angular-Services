(function(){
  var service = jQuery( 'body' ).injector().get('brickWarehouse');
  var numberHasChanged = false;

  var brick1 = document.querySelector('#BaB-1x1');
  var quantity1 = brick1.querySelector('.quantity');
  var startingQuantity = quantity1.innerHTML;
  var brickButton = brick1.querySelector('button');

  var brick2 = document.querySelector('#LoB-1x1');
  var quantity2 = brick2.querySelector('.quantity');

  if (typeof service === 'object') {
    window.dispatchEvent(new CustomEvent('service-exists', {'detail': 'passed'}));
  }

  if (service.bricks.red['2x2'].quantity == 48) {
    window.dispatchEvent(new CustomEvent('combined-data', {'detail': 'passed'}));
  }

  addToCartTest();

  storesInSyncTest();

  function addToCartTest() {
    brickButton.click();

    if (+quantity1.innerHTML + 1 == startingQuantity) {
      numberHasChanged = true;
      window.dispatchEvent(new CustomEvent('add-to-cart', {'detail': 'passed'}));
    }
  }

  function storesInSyncTest() {
    if (numberHasChanged && (quantity1.innerHTML == quantity2.innerHTML)) {
      window.dispatchEvent(new CustomEvent('stores-in-sync', {'detail': 'passed'}));
    }
  }

})();
