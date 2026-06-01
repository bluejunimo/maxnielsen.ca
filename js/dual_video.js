'use-strict'

const player = document.getElementById('dual_video_player');

const PLAY_PATH  = "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z";
const PAUSE_PATH = "M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z";


function loadAndPlay(button) {
    var button_src = button.dataset.src;
    button_src = button_src.substring(button_src.lastIndexOf("/") + 1);
    var player_src = player.src;
    player_src = player_src.substring(player_src.lastIndexOf("/") + 1);
    const path = button.querySelector("svg path");

    console.log("<video> src " + player_src);
    console.log("button src " + button_src);

    if(player_src == button_src) {     // play/pause the video
        if(player.paused) {
            console.log("RESUMED PLAYING CURRENT VIDEO...");
            showPauseIcon(path);
            const attempt = player.play();
        }
        else {
            console.log("PAUSING CURRENT VIDEO...");
            showPlayIcon(path);
            const attempt = player.pause();
        }
    }
    else {                      // swap the source & play
        console.log("SWAPPING TO A NEW VIDEO...");
        player.src = button.dataset.src;      
        player.load();         // reset the element to the new source
        player.muted = false;  // make sure audio is on
        const attempt = player.play();
        const path = button.querySelector("svg path");
        showPauseIcon(path);
        button.classList.add("dual-video-button-active");
        
        // reset icons of other buttons

        player_src = player.src;
        player_src = player_src.substring(player_src.lastIndexOf("/") + 1);
        let videos = document.querySelectorAll(".dual-video-buttons a[data-src]");
        videos.forEach(video => {
            var video_src = video.dataset.src.substring(video.dataset.src.lastIndexOf("/") + 1);
            if (video_src != player_src) {
                var other_path = video.querySelector("svg path");
                showPlayIcon(other_path);
                video.classList.remove("dual-video-button-active");
            }
        });
    }
}

// let videos = document.querySelectorAll(".dual-video-buttons a[data-src]");
// videos.forEach(video => {
//     if (video.dataset.src == player.src) {
//         path = video.querySelector("svg path");
//         showPlayIcon(path);
//     }
// });

document.querySelectorAll('.dual-video-buttons a[data-src]').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();              // stop the "#" jumps
    loadAndPlay(button);
  });
});




// TODO: IMPLEMENT THIS SHIT BELOW!!


// Reflect the video's real state in the icon
function showPlayIcon(path) {
    // if(path == null) {
    //     let videos = document.querySelectorAll(".dual-video-buttons a[data-src]");
    //     videos.forEach(video => {
    //         if (video.dataset.src == player.src) {
    //             path = video.querySelector("svg path");
    //         }
    //     });
    // }
    console.log("SHOW PLAY BUTTON" + path);
    if (path) {
        path.setAttribute('d', PLAY_PATH);
        path.parentElement.setAttribute('alt-text', 'Play');
    }
}
function showPauseIcon(path) {
    // if(path == null) {
    //     let videos = document.querySelectorAll(".dual-video-buttons a[data-src]");
    //     videos.forEach(video => {
    //         if (video.dataset.src == player.src) {
    //             path = video.querySelector("svg path");
    //         }
    //     });
    // }
    console.log("SHOW PAUSE BUTTON" + path);
    if (path) {
        path.setAttribute('d', PAUSE_PATH);
        path.parentElement.setAttribute('alt-text', 'Pause');
    }
}

player.addEventListener('play',  showPauseIcon()); // playing -> offer "pause"
player.addEventListener('pause', showPlayIcon());  // paused  -> offer "play"