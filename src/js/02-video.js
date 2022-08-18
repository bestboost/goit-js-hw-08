import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function({seconds}) {

    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));

};

player.on('timeupdate', throttle(onPlay, 1000));

const sevedTimeOnLocal = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(sevedTimeOnLocal);

