class Shuffler {
  root = document.getElementById("root");
  footer = document.getElementById("footer");
  withColors = false; // set true if would like to shuffle colors too

  constructor(name, nums) {
    this.name = name ?? "";
    this.numbers = nums ?? [];
    this.printName();
    this.render(this.numbers);
  }

  printName() {
    this.footer.innerHTML = `Shuffle and Sort by ${this.name}`;
  }

  shuffle() {
    try {
      this.numbers.sort(() => Math.random() - 0.5);
      this.render(this.numbers);
    } catch (err) {
      console.log(`Some error occured: ${err}`);
    }
  }

  sort() {
    this.numbers.sort();
    this.render(this.numbers);
  }

  render(array) {
    root.innerHTML = "";
    array.forEach((ele, i) => {
      const index = this.withColors ? ele : i + 1;
      root.innerHTML += `
          <div class="col-d color-bg color-${index}">${ele}</div>
          `;
    });
  }

  renderAppend(array) {
    root.innerHTML = "";
    array.forEach((ele, i) => {
      const index = this.withColors ? ele : i + 1;
      const divEle = document.createElement("div");
      divEle.classList = `col-d color-bg color-${index}`;
      divEle.textContent = ele;
      root.appendChild(divEle);
    });
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffler = new Shuffler("Dhruv Chauhan", numbers);
