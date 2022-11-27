const body = document.body;
const drawBox = document.querySelector(".draw-box");
const colorMode = document.getElementById("draw");
const eraseMode = document.getElementById("erase");
let drawMode = true;
colorMode.onclick = () => {
  drawMode = true;
};
eraseMode.onclick = () => {
  drawMode = false;
};

for (let index = 0; index < 256; index++) {
  var drawDiv = document.createElement("div");
  drawDiv.setAttribute("class", "clear-draw");
  drawDiv.id = `${index}`;
  drawBox.append(drawDiv);

  drawDiv.onclick = (event) => {
    const blockId = event.path[0].id;
    const blockIdSelect = document.getElementById(`${blockId}`);

    if (drawMode == true) {
      blockIdSelect.style.backgroundColor = "black";
    } else {
      blockIdSelect.style.backgroundColor = "white";
    }
  };
}