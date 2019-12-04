// dwie metody , 1 = zwraca wynik, warunki zwyciestwa , 2 = co wygral uzytkownik
// nie tworzymy konstruktora
class Result {
  // metoda statyczna , dostepna jest tylko z poziomu klasy
  // Result true or false , i ile uzytkownik postawil ( zaklad )
  static moneyWinInGame (result, bid) {
    // implementacja
    if (result) return 3 * bid
    // wielkosc zakladu bedzie mnozona przez 3
    else return 0
  }

  // 2 metoda :
  // dostep do klasy draw, przekazany parametr to tablica losujaca! metoda ma pokazac co uzytkownik wygral

  static checkWinner (draw) {
    if (
      (draw[0] === draw[1] && draw[1] === draw[2]) ||
      (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
    ) { return true } else return false
  }
}

Result.moneyWinInGame(true, 12) // 36
