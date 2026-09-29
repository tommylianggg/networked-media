// comment
// use "document" to access the HTML document
alert('javascript!')
console.log('log this info to console')

// global variables
let colors = ["#706C61", "#3C6E71", "#899E8B", "#99C5B5", "#AFECE7", "#81F499"]

// all code should be inside the window.onload
window.onload = () => {
    console.log('page has loaded')

    let mainElement = document.getElementById('main')
    // javascript has highest priority
    mainElement.style.color = "pink"
    console.log(mainElement)

    // to select a selector in CSS
    let firstParagraph = document.querySelector('p')
    let blueParagraph = document.querySelector('.blue')
    // document.querySelector('#main')
    firstParagraph.textContent = "javascript text covered html text"
    // this is only going to affect first blue class element
    blueParagraph.style.backgroundColor = "navy"

    // add elements to the page
    let containerDiv = document.querySelector('#blue-div')
    for (let i=0; i<20; i++) {
        // 1. declare what type of element
        let newSpan = document.createElement('span')
        // 2. modify that element
        newSpan.textContent = "new_span"
        // apply class for all spans
        newSpan.classList.add('all-spans')
        let randomNumber = Math.floor( Math.random() * colors.length )
        newSpan.style.color = colors[randomNumber]
        let randomNumber2 = Math.floor( Math.random() * colors.length )
        newSpan.style.backgroundColor = colors[randomNumber2]
        // 3. add that element to the page
        // if anywhere on the bottom of html: document.body
        // if specific place, need to select that element
        containerDiv.appendChild(newSpan)
    }

    // use time
    let rotation = 0
    // set Interval requires 1. callback function, 2. time in ms
    setInterval( ()=>{
        console.log("this is a repeatative 2-second timer")
        let allSpans = document.getElementsByClassName('all-spans')
        // document.querySelectorAll('.all-spans')
        console.log(allSpans)
        // shorthand for (let s=0; s<allSpans.length; s++)
        for (let spanss of allSpans) {
            // use backticks `` here to inject string
            spanss.style.transform = `rotate(${rotation}deg)`
            rotation++
            console.log(spanss.style.transform)
        }
    }, 2000 )
    // setInterval( function () {}, 2000 )
    // setInterval( "a function you declare, go under window.onload", 2000 )
}