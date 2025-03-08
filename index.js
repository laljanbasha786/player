const songs = [
    { name: "song-1", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741409979/iSongs.info_01_-_AmeerPet_mqxjii.mp3" },
    { name: "Song-2", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410692/iSongs.info_01_-_Yamaho_Yama_mq72m2.mp3" },
    { name: "Song 3", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410693/iSongs.info_03_-_Cheliya_Cheliya_ruiqpe.mp3"},
    { name: "Song 4", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410694/iSongs.info_04_-_Eyy_Bidda_Idhi_Naa_Adaa_eibucj.mp3" },
    { name: "Song 5", file:"https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410694/iSongs.info_03_-_Ra_Ra_Bangaram_nju7rc.mp3 " },
    { name: "Song 6", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410695/iSongs.info_03_-_Naa_Cheli_Rojave_wspdo2.mp3" },
    { name: "Song 7", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410695/Aasan_Nahin_Yahan_Aashiqui_2_128_Kbps_lbfd7n.mp3"},
    { name: "Song 8", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410695/Bewajah_-_Sanam_Teri_Kasam_128_Kbps_asrysk.mp3" },
    { name: "Song 9", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410697/Channa_Mereya_-_Ae_Dil_Hai_Mushkil_128_Kbps_qh8hld.mp3" },
    { name: "Song 10", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410697/Ororo_Yogi-SenSongsMp3.Co_fwawzc.mp3" },
    { name: "Song 11", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410697/Chitti_Aayire-SenSongsMp3.Co_1_qboqjz.mp3" },
    { name: "Song 12", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410698/Yahoon_Yahoon-SenSongsMp3.Co_ny1eex.mp3" },
    { name: "Song 13", file: "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410704/iSongs.info_04_-_Chamka_Chamka_gyeual.mp3" },
    { name: "Song 14", file:  "https://res.cloudinary.com/dfyb7dhib/video/upload/v1741410714/iSongs.info_01_-_Unnamata_Cheppanivu_sz3vum.mp3"  },


];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function playRandomSong() {
    const randomIndex = getRandomIndex(songs.length);
    const selectedSong = songs[randomIndex];
    const currentSongElement = document.getElementById("currentSong");

    if (currentSongElement) {
        currentSongElement.textContent = `Now playing: ${selectedSong.name}`;
    }


    const audio = new Audio(selectedSong.file);


    audio.onerror = () => {
        if (currentSongElement) {
            currentSongElement.textContent = `Error: Unable to play "${selectedSong.name}". Check the file path or ensure the file exists.`;
        }
        console.error(`Failed to load file: ${selectedSong.file}`);
    };


    audio.play()
        .then(() => console.log(`Playing: ${selectedSong.name}`))
        .catch(err => {
            if (currentSongElement) {
                currentSongElement.textContent = "Error: Unable to play the song. Check browser permissions or file accessibility.";
            }
            console.error("Audio playback error:", err);
        });
}


document.getElementById("playRandomSong").addEventListener("click", playRandomSong);
