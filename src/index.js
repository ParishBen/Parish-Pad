function changeHeadingColor(){
    let h1 = document.getElementById("matey")
    h1.addEventListener('click', colorChange)
}

function colorChange(){
    let h1 = document.getElementById("matey")

    matey.style.color = 'blue'
}

changeHeadingColor()