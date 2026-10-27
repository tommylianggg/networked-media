window.onload = () => {
    let godReply = document.getElementById('god_reply_to')
    // here i need to make sure people just offered something
    // so the god will reply to it
    if (godReply) {
        setTimeout(()=>{
            // after 8 seconds hide the god thinking process
            document.getElementById('waiting').style.display = 'none'
            // instead display the god's reply
            godReply.style.display = 'block'
        }, 8000)
        setTimeout(()=>{
            // here I take the href from olympus.njk
            // and refer to server.js
            // it will decide it is a bad or good post
            // and jump to /earth or /underworld after reply
            let result = document.getElementById('reply_result');
            window.location.href = result.href;
        // i want to give user 15 seconds to read first
        }, 15000)
    }
}