document.getElementById('color-btn').addEventListener('click', function(){
    const color = document.getElementById('color-input').value.slice(1, 7)
    const mode = document.getElementById('scheme').value
    getColors(color, mode)
})

function getColors(color, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
            let colors = []
            const colorArray = data.colors
            for(let i = 0; i < colorArray.length; i++){
                colors.push((colorArray[i].hex).value)
            }
            setColorBars(colors)
            setColorText(colors)
        })
}

function setColorBars(arr){
    const colorArray = arr
    document.getElementById('color-one').style.backgroundColor = colorArray[0]
    document.getElementById('color-two').style.backgroundColor = colorArray[1]
    document.getElementById('color-three').style.backgroundColor = colorArray[2]
    document.getElementById('color-four').style.backgroundColor = colorArray[3]
    document.getElementById('color-five').style.backgroundColor = colorArray[4]
}

function setColorText(arr){
    const hexArray = arr
    document.getElementById('text-one').textContent = hexArray[0]
    document.getElementById('text-two').textContent = hexArray[1]
    document.getElementById('text-three').textContent = hexArray[2]
    document.getElementById('text-four').textContent = hexArray[3]
    document.getElementById('text-five').textContent = hexArray[4]
}
