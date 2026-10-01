window.onload = () => {
    //document.doby is the selector to retrivie
    //e inside () means all info about the event
    //then you can extract info about e
    document.body.addEventListener("click", (e)=>{
        console.log(e)
        console.log("document.doby was clicked")
        console.log(`${e.clientX}, ${e.clientY}`)
        console.log(e.clientX + "," + " " + e.clientY)
    })

    let textDiv = document.getElementById("text")
    //keypress need to be on document itself
    document.addEventListener("keypress", (e)=>{
        console.log("keypressed")
        console.log(e.key)
        textDiv.textContent += e.key
        if (e.key == " ") {
            textDiv.textContent += "absdefghijklmn"
        }
    })


}