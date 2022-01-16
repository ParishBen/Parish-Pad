function changeHeadingColor(){
    let h1 = document.getElementById("matey")
    h1.addEventListener('click', colorChange(h1))
}

function colorChange(element){
    element.style.color = 'green'
}

changeHeadingColor()