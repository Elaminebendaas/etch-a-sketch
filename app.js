const body = document.body
const drawBox = document.getElementById('draw-box')
const colorMode = document.getElementById('draw')
const eraseMode = document.getElementById('erase')
let drawMode = true
colorMode.onclick = () => {
    drawMode = true
}
eraseMode.onclick = () => {
    drawMode = false
}




for (let index = 0; index < 256; index++) {
    var drawDiv = document.createElement('div')
    drawDiv.setAttribute('class', 'clear-draw')
    drawBox.append(drawDiv)
    console.log(index)
}

drawDiv.onclick = () =>{
    if(drawMode == true){
        drawDiv.classList.replace('clear-draw', 'draw')
    }else{
        drawDiv.classList.replace('draw', 'clear-draw')
    }
}