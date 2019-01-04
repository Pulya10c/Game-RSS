// eslint-disable-next-line eslint global-require
/* eslint-disable eslint no-eval */
// eslint-disable-next-line eslint no-eval
export default class ScoreManadge {
  constructor(name, password, count) {
    this.gamer = [{
      password: this.password = password,
      name: this.name = name,
      wonFights: count,
    }];
  }

  // checkUserScore() {
  //   if (localStorage.getItem('scoreGameRSS')) {
  //     this.scoreAll = localStorage.getItem('scoreGameRSS');
  //   } else {
  //     this.scoreAll = [];
  //   }
  // }

  setScore(name, password, count) {
    if (localStorage.getItem('scoreGameRSS')) {
      const localScore = JSON.parse(localStorage.getItem('scoreGameRSS'));
      let i = localScore.length;
      let flag = 0;
      while (i--) {
        if (localScore[i].name === name && localScore[i].password === password) {
          localScore[i].wonFights = count;
          flag = 1;
        }
      }
      if (flag === 0) {
        localStorage.setItem('scoreGameRSS', JSON.stringify([localScore, ...this.gamer]));
      }
      localStorage.setItem('scoreGameRSS', JSON.stringify(this.gamer));
    }
  }

  drawScore() {
    const table = document.createElement('table');
    this.scoreAll = JSON.parse(localStorage.getItem('scoreGameRSS'));
    if (this.scoreAll.length === 0) {
      document.querySelector('.modal__top-scores').innerHTML = 'Нет результатов игры';
    } else {
      this.scoreAll = this.scoreAll.sort((a, b) => b.wonFights - a.wonFights);
      const line = this.scoreAll.map((item, idx) => `<tr class ="speaker"><td >${idx + 1}</td><th class ="then">${item.name}</th><th class ="then">${item.wonFights}</th></tr>`);
      table.innerHTML = `
      <tbody><tr class ="speaker"><th class = "then">позиция</th><th class = "then">Имя игрока</th><th class = "then">Количество убитых монстров</th></tr>${line}</tbody>`;
      document.querySelector('.modal__top-scores').appendChild(table);
    }
  }
}
