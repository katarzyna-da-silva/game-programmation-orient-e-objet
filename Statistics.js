// informacje o wszystkich grach

class Statistics {
  // metoda konstruktor
  constructor() {
    // rezultaty gry przechowuje ta tablica dla innego obiektu!!!
    this.gameResults = []
    // wlasciwosc win : true or false w zaleznosci od wyniku gry
    // plus informacja o zakladzie BID ile dal uzytkownik
    // to okreslismy za pomoca metody !!!!
  }
  // metody dla tej tablicy :
  // metoda dodawania wynikow kolejnych gier do statystyki dla klasy statistics!
  addGameToStatistics (win, bid) {
    // win = czy bylo zwycieztwo, bid = jaki byl zaklad
    let gameResult = {
      // do wlasciwosci win przekazujemy win
      // do bid : bid
      // true or false!
      win,
      bid
    }
    console.log(gameResult);
    this.gameResults.push(gameResult); // odwolanie sie do tablicy pushowanie 
  }


// kolejna metoda ktora wyswietla wygrane i przegrane : 

showGameStatistics() {
    // zmienna i odwolanie sie do dlugosci tablicy
    // stad pobiera wszystkie dzialania uzytkownika 
    let games = this.gameResults.length
    // stad pobierze liczbe zwyciestw : 
    // filter zwraca tylko true, callback, odwoluje sie do jednego obiektu result w tablicy array gameResults :
    let wins = this.gameResults.filter(result => result.win).length;
    let losses = this.gameResults.filter(result => !result.win).length;
    console.log(games, wins, losses);
    // zwraca ze zmiennej games : 
    return [games, wins, losses]
}
}

const stats = new Statistics()
