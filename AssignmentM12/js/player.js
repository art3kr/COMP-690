class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

// on load
window.onload = function() {
    // storing albums in array
    let albumList = [album1, album2, album3];

    // Bind array elements to dropdown
    let dropDown = document.getElementById('albumDropDown');
    let i = 0;
    for (album of albumList) {
        let element = document.createElement('option');
        element.textContent = `${album.artist}: ${album.title}`;
        element.value = i;
        i++;
        dropDown.appendChild(element);
    }


    // Play Button functions
    let playButton = document.getElementById('playButton');

    playButton.addEventListener('click', (e) => {
        // when play button clicked
        albumList[dropDown.value].play();
});

    // Favorite Button functions
    let favoriteButton = document.getElementById('favAlbumButton');

    favoriteButton.addEventListener('click', (e) => {
        // when favorite album button clicked
        alert(jbox.favoriteAlbum());
    });
};


