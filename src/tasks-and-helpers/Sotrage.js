export default class Sotrage {
  constructor(table) {
    this.table = document.querySelector(`#${table}`);
    this.oldScore = [];
  }

  // store to localStorage
  store(fullName, score) {
    this.oldScore = JSON.parse(localStorage.getItem('score')) || [];
    this.oldScore.push([fullName, score]);
    this.oldScore.sort((a, b) => b[1] - a[1]);
    const result = JSON.stringify(this.oldScore.slice(0, 10));
    localStorage.setItem('score', result);
  }

  // get score from localStorage
  get() {
    // this.table = document.querySelector('.score-list');
    const scoreArr = JSON.parse(localStorage.getItem('score'));
    this.table.innerHTML = '';
    this.table.innerHTML = `<thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ник</th>
                                    <th scope="col">Монстров повержено</th>
                                  </tr>
                                </thead>
                                <tbody>`;
    scoreArr.forEach((el, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<th scope="row">${index + 1}</th><td>${el[0]}</td><td>${el[1]}</td>`;
      this.table.appendChild(tr);
    });
    this.table.innerHTML += '</tbody>';
  }
}
