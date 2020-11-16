/**
 *
 * In object-oriented programming, objects do the work they advertise through their interface (properties and methods).
 * Clients of these objects expect this work to be done quickly and efficiently.
 * However, there are situations where an object is severely constrained and cannot live up to its responsibility.
 * Typically this occurs when there is a dependency on a remote resource (resulting in network latency)
 * or when an object takes a long time to load.
 */
function CryptoCurrencyAPi() {
  this.getValue = function (coin) {
    console.log('Calling External API...');
    switch (coin) {
      case 'Bitcoin':
        return '$3.500';
      case 'Ethereum':
        return '$175';
      case 'LiteCoin':
        return '$50';
    }
  }
}

function CryptoCurrencyProxy() {
  this.api = new CryptoCurrencyAPi();
  this.cache = {};

  this.getValue = function (coin) {
    if (!this.cache[coin])
      this.cache[coin] = this.api.getValue(coin);
    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();

// console.log(proxy.getValue('Bitcoin'));
// console.log(proxy.getValue('Ethereum'));
// console.log(proxy.getValue('LiteCoin'));
// console.log(proxy.getValue('Ethereum'));
