const tableA = document.getElementById("table");
let schet = [];

for (let i = 0; i <=99; i++) {
  schet[i] = i;
}
shuffle(schet);

function shuffle(arr) {
  let ci = arr.length;
  while (ci != 0) {
    let ri = Math.floor(Math.random() * ci);
    ci--;
    [arr[ci], arr[ri]] = [arr[ri], arr[ci]];
  }
  return arr;
}

schet = schet.slice(0,10);
console.log(schet);

createCell();

function proverca(tdd){
  const ga = tdd.getAttribute("id");
  let flag = false;
  for (let i = 0; i < schet.length; i++) {
    if (schet[i] == ga) {
      flag=true;
    }
  }
  if (!flag) {
    tdd.classList.add("red");
    return;
  }else{
    tdd.classList.add("green");
    flag = false;
  }
}

function createCell() {
  let s = 0;
  for (let i = 0; i < 10; i++) {
    const tra = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const tdd = document.createElement("td");
      tra.append(tdd);
      tdd.setAttribute("id", s);
      s++;
      tdd.append(s);

      tdd.addEventListener("click", function func() {
        proverca(tdd);
        console.log("asd");
        tdd.removeEventListener("click", func);
      });
    }
    tableA.append(tra);
  }
}

const tdd = document.querySelectorAll("td");
