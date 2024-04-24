const table = document.getElementById("table");
const resetBtn = document.querySelector(".btn");
let ugadalD = 0;
let mas = [];

createWinCell();

function createWinCell() {
  for (let i = 0; i < 100; i++) {
    mas.push(i);
  }
  shuffle(mas);
  mas = mas.slice(0, 10);
  console.log(mas);
}

function shuffle(array) {
  //Тасование Фишера — Йетса
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

createTable();

function createTable() {
  let countTd = 0;

  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");
      tr.append(td);
      td.setAttribute("id", `${countTd}`);
      countTd++;
      td.append(countTd);
      changeCell(td);
    }
  }
  addGreenCell();
}

function addGreenCell() {
  let i = 0;

  let s = setInterval(() => {
    if (i == 100) {
      console.log("100");
      clearInterval(s);
    } else {
      const td = document.querySelector(`[id="${i}"]`);
      td.classList.add("green");
      i++;
    }
  }, 10);

  
}

table.addEventListener('click',deleteGreenCell);

function deleteGreenCell(){
  let i = 0;

  let sclear = setInterval(() => {
    if (i == 100) {
      console.log("100");
      table.removeEventListener('click',deleteGreenCell);
      clearInterval(sclear);
    } else {
      const td = document.querySelector(`[id="${i}"]`);
      td.classList.remove("green");
      i++;
    }
  }, 10);
}

function changeCell(td) {
  td.addEventListener("click", function func() {
    const d = this.getAttribute("id");
    checkChoiceCell(td);
    td.removeEventListener("click", func);
  });
}

function checkChoiceCell(td) {
  let flag = false;
  const d = td.getAttribute("id");

  for (let i = 0; i < 10; i++) {
    if (mas[i] == d) {
      flag = true;
    }
  }

  if (!flag) {
    td.classList.add("red");
    return;
  } else {
    td.classList.add("green");
    ugadalD++;
    winGame();
    flag = false;
  }
}

function winGame() {
  if (ugadalD == 10) {
    const modal = document.querySelector(".modal");
    modal.classList.add("open");
  }
}

resetBtn.addEventListener("click", function () {
  const modal = document.querySelector(".modal");
  const td = document.querySelector("td");
  let ugadalD = 0;
  let mas = [];
  modal.classList.remove("open");
  createWinCell();
  for (let i = 0; i < 100; i++) {
    const td = document.querySelector(`[id="${i}"]`);
    changeCell(td);
    td.classList.remove("green");
    td.classList.remove("red");
  }
  addGreenCell();
  table.addEventListener('click',deleteGreenCell);
});

// zmey();

// function zmey() {
//   for (let i = 0; i < 10; i++) {
//     const dyd = i*10;
//     if (i % 2 == 1) {
//       for (let j = 0; j < 10; j++) {
//         const td = document.querySelector(`[id="${dyd+j}"]`);
//         setTimeout(()=>{        
//           td.classList.add("green");
//       },1000);
//       }
//     } else {
//       for (let jk = 9; jk >= 0; jk--) {
//         const td = document.querySelector(`[id="${dyd+jk}"]`);
//         td.classList.add("green");
//       }
//     }
//   }
// }
