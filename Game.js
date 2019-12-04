// interfejs dla gry : 3 metody
class Game {
  constructor (start) {
    this.stats = new Statistics()
    this.wallet = new Wallet(start)
    document
      .getElementById('start')
      .addEventListener('click', this.startGame.bind(this))
    this.spanWallet = document.querySelector('.panel span.wallet')
    this.boards = [...document.querySelectorAll('div.color')]
    this.inputBid = document.getElementById('bid')
    this.spanResult = document.querySelector('.score span.result')
    this.spanGames = document.querySelector('.score span.number')
    this.spanWins = document.querySelector('.score span.win')
    this.spanLosses = document.querySelector('.score span.loss')
    this.render()
  }
  // domyslne wartosci w render :
  render (
    colors = ['black', 'black', 'black'],
    money = this.wallet.walletValue(),
    result = '',
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    // console.log('gramy!!')
    this.boards.forEach((board, i) => {
      board.style.backgroundColor = colors[i]
    })
    this.spanWallet.textContent = money
    if (result) {
      result = `Tu gagnes ${wonMoney}$!!!`
    } else if (!result && result !== '') {
      result = `Tu as perdu ${bid}$!!!`
    }
    this.spanResult.textContent = result
    this.spanGames.textContent = stats[0]
    this.spanWins.textContent = stats[1]
    this.spanLosses.textContent = stats[2]
    this.inputBid.value = "";
  }

  startGame () {
    if (this.inputBid.value < 1) {
      return alert('Le montant que vous voulez jouer est trop petit!')
    }

    const bid = Math.floor(this.inputBid.value)
    if (!this.wallet.checkPlay(bid)) {
      return alert(
        'Vous avez trop peu d’argent ou vous avez entré une mauvaise valeur!'
      )
    }

    this.wallet.changeWallet(bid, '-')
    this.draw = new Draw()
    const colors = this.draw.getDrawResult()
    const win = Result.checkWinner(colors)
    // console.log(win)
    // console.log(colors)
    const wonMoney = Result.moneyWinInGame(win, bid)
    this.wallet.changeWallet(wonMoney)
    // this.draw.DrawResult
    this.stats.addGameToStatistics(win, bid)
    this.render(
      colors,
      this.wallet.walletValue(),
      win,
      this.stats.showGameStatistics(),
      bid,
      wonMoney
    )
  }
}
