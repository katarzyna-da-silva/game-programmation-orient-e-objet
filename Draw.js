// losowanie w grze

class Draw {
  constructor () {
    this.options = ['red', 'green', 'blue']
    let _result = this.drawResult()
    this.getDrawResult = () => _result
  }
  drawResult () {
    let colors = [];
    for (let i = 0; i < this.options.length; i++) {
      // losujemy jednorazowo index od 0 do 2
      const index = Math.floor(Math.random() * this.options.length)
      const color = this.options[index] // dla konkretnego koloru
      //console.log(color)
      colors.push(color) // wrzucenie wyniku losowania do tablicy colors
    }
    return colors // zwraca z tablicy kolory
  }
}

//const draw = new Draw()
