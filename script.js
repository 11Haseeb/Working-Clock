const watch = document.querySelector("span");

setInterval(()=>{
    const time = new Date();
    let day = 'AM';
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();

    if(hr > 12){
        day = 'PM';
        hr = hr - 12;
    }
    if(hr == 0){
        hr = 12;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(hr < 10){
        hr = '0' + hr;
    }

    watch.innerHTML = hr + ":" + min + ":" + sec + ":" + " " + day;
});