window.onload = ()=>{
    let sky = document.querySelector('.sky')
    let datecounter = document.querySelector('.datecounter')

    const daytime = ['day', 'sunset', 'night'];

    let daycount = 0;

    let i = 0;
    setInterval( ()=>{
        i = (i+1)%3;
        const nextdaytime = daytime[i];
        sky.className = 'sky ' + nextdaytime;

        if (nextdaytime === 'day') {
            scratch();
        }
    }, 5000 );

    function scratch() {
        daycount += 1
        const scratch = document.createElement('div');
        if (daycount%5 === 0) {
            scratch.className = "slash";
        } else {
            scratch.className = "scratch";
        }
        datecounter.appendChild(scratch);
    }

    function birdy() {
        let bnumber = Math.floor(Math.random()*4)+1;
        for (let i=0; i<bnumber; i++) {
            const bird = document.createElement('img');
            bird.className = 'bird';
            bird.src = 'https://res.cloudinary.com/dmdgjpyip/image/upload/v1791479398/Dream_13_k5bwvh.gif';
            let randomheight = Math.floor(Math.random() * 50)+10;
            bird.style.top = randomheight + 'vh';
            let randomwidth = Math.floor(Math.random() * 5)+4;
            bird.style.width = randomwidth + 'vw';
            document.body.appendChild(bird);
            setTimeout( ()=>{
                bird.remove();
            },8000 );
        }
        let randomnext = Math.floor(Math.random()*10000) + 15000;
        setTimeout(birdy, randomnext);
    }
    setTimeout(birdy, 10000);
}