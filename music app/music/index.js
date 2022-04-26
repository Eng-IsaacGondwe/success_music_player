var songs = [

    {
        id: 1,
        imageSrc: "./thumbnails/bad_liar.jpg",
        audioSrc: "./audio/aka book - Sir Anthony Isaacs.mp3",
        title: "aka book - Sir Anthony Isaacs"
    },

    {
        id: 2,
        imageSrc: "./thumbnails/beete_lamhe.jpg",
        audioSrc: "./audio/Gwala - Sir Anthony Isaacs.mp3",
        title: "Gwala - Sir Anthony Isaacs"
    },

    {
        id: 3,
        imageSrc: "./thumbnails/believer.jpg",
        audioSrc: "./audio/HILLZ- Donsa kanthambo.mp3",
        title: "HILLZ- Donsa kanthambo"
    },

    {
        id: 4,
        imageSrc: "./thumbnails/bhar_do_jholi.jpg",
        audioSrc: "./audio/ibala - Sir Anthony Isaacs ft master p.mp3",
        title: "ibala - Sir Anthony Isaacs ft master p"
    },

    {
        id: 5,
        imageSrc: "./thumbnails/blank_space.jpg",
        audioSrc: "./audio/My life - Sir Anthony Isaacs.mp3",
        title: "My life - Sir Anthony Isaacs"
    },

    {
        id: 6,
        imageSrc: "./thumbnails/finally_foun.png",
        audioSrc: "./audio/My life rmx - Sir Anthony Isaacs.mp3",
        title: "My life rmx - Sir Anthony Isaacs"
    },

    {
        id: 7,
        imageSrc: "./thumbnails/bad_liar.jpg",
        audioSrc: "./audio/Nichani - Sir Anthony Isaacs.mp3",
        title: "Nichani - Sir Anthony Isaacs"
    },

    {
        id: 8,
        imageSrc: "./thumbnails/hero.jpg",
        audioSrc: "./audio/Pass word - Sir Anthony Isaacs.mp3",
        title: "Pass word - Sir Anthony Isaacs"
    },

    {
        id: 9,
        imageSrc: "./thumbnails/kun_faya_kun.jpg",
        audioSrc: "./audio/which is better -Sir Anthony Isaacs.mp3",
        title: "which is better -Sir Anthony Isaacs"
    },

    {
        id: 10,
        imageSrc: "./thumbnails/bad_liar.jpg",
        audioSrc: "./audio/Babaji Ki Booti - Sachin Jigar.mp3",
        title: "Babaji Ki Booti - Sachin Jigar"
    },

    {
        id: 11,
        imageSrc: "./thumbnails/tum_se_hi.jpg",
        audioSrc: "./audio/Mika Singh - Subha Hone Na De.mp3",
        title: "Mika Singh - Subha Hone Na De"
    },

    {
        id: 12,
        imageSrc: "./thumbnails/Mika_singh - subha_hone_na_de.jpg",
        audioSrc: "./audio/Yo Yo Hits Honey Singh - Lungi Dance.mp3",
        title: "Yo Yo Hits Honey Singh - Lungi Dance"
    },


]

function generateAudioCards() {

    let htmlString = "";

    songs.forEach(function(song, index) {

        let songHTML = `

                <div class="audio">
                <div class="audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString += songHTML;

    })

    document.getElementById("audios").innerHTML = htmlString;


}

generateAudioCards();


function playAudio(songid) {
    var song = songs.find(function(song, index) {
        return song.id === songid
    });

    document.getElementById("thumbnail").src = song.imageSrc;
    document.getElementById("audio_player").src = song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();


}