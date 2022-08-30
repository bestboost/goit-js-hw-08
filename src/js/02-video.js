import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function({seconds}) {

    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));

};

player.on('timeupdate', throttle(onPlay, 1000));

const sevedTimeOnLocal = localStorage.getItem("videoplayer-current-time");
localStorage.removeItem("videoplayer-current-time");


player.setCurrentTime(sevedTimeOnLocal).then(function(seconds) {
    
    player.off('play')
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.error('the time was less than 0 or greater than the video’s duration')

            break;

     
    }
});

