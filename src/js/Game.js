import goblinImg from "../img/goblin.png";

export class Game {
  position = 0;

  drawField() {
    const field = `
      <div class="field">
        <div class="row">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div> 
        <div class="row">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div> 
        <div class="row">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div> 
        <div class="row">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div> 
        <button class="btn-stop">Stop</button>
      </div>
    `;
    document.querySelector("body").insertAdjacentHTML("beforeend", field);
    this.cells = document.querySelectorAll(".item");
    this.btnStop = document.querySelector(".btn-stop");
    this.goblin = document.createElement("img");
    this.goblin.src = goblinImg;
    this.goblin.classList.add("img");
  }

  start() {
    this.drawField();
    const interval = setInterval(() => this.showGoblin(), 1000);
    this.btnStop.addEventListener("click", () => {
      clearInterval(interval);
    });
  }

  showGoblin() {
    let index = Math.floor(Math.random() * 16);
    while (index === this.position) {
      index = Math.floor(Math.random() * 16);
    }
    this.position = index;
    this.cells[index].append(this.goblin);
  }
}
