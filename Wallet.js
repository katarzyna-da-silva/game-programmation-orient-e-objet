class Wallet {
  constructor (money) {
    let _money = money

    // metody :
    this.walletValue = () => _money // wartosc portfelika
    this.checkPlay = value => {
      // czy moze zagrac? w zaleznosci od value od wartosci portfela!
      if (_money >= value) return true; // money stan portfela rowny lub wiekszy od wartosci wpisanej to bedzie true , jesli nie to false i nie moze zagrac!!
      return false
    }
    this.changeWallet = (
      value,
      type = '+' // value wartosc portfela i typ dodaje lub odejmuje od wartosci w zaleznosci czy wygral czy przegral
    ) => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return _money += value
        } else if (type === '-') {
          return _money -= value
        } else {
          throw new Error('le numéro fourni nest pas valide')
        }
    }
      else {
        console.log(typeof value);
        throw new Error('le numéro fourni nest pas valide');
      }
    }
  }
}
//const wallet = new Wallet()