var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
var nodrums=0;
var drumsOn = 0;


function clap() {
  var clap = document.querySelector("audio");
console.log(clap);
  clap.src="sounds/clap.wav";
console.log(clap.src);
  clap.currentTime = 0;
  clap.play();
  const key = document.querySelector(".key[data-key='65']");
  key.classList.add('playing'); // adds the css animation while its playing
}

function hihat() {

  var hihat = document.querySelector("audio");
  hihat.src="sounds/hihat.wav";
  hihat.currentTime = 0;
  hihat.play();
  const key = document.querySelector(".key[data-key='83']");
  key.classList.add('playing');
}
function kick() {
  const kick = document.querySelector("audio");
  kick.src="sounds/kick.wav"
  kick.currentTime = 0;
  kick.play();
  const key = document.querySelector(".key[data-key='68']");
  key.classList.add('playing');
}
function openhat() {
  const openhat = document.querySelector("audio");
  openhat.src="sounds/openhat.wav"
  openhat.currentTime = 0;
  openhat.play();
  const key = document.querySelector(".key[data-key='70']");
  key.classList.add('playing');
}
function boom() {
  const boom = document.querySelector("audio");
  boom.src="sounds/boom.wav"
  boom.currentTime = 0;
  boom.play();
  const key = document.querySelector(".key[data-key='71']");
  key.classList.add('playing');
}
function ride() {
  const ride = document.querySelector("audio");
  ride.src="sounds/ride.wav";
  ride.currentTime = 0;
  ride.play();
  const key = document.querySelector(".key[data-key='72']");
  key.classList.add('playing');
}
function snare() {
  const snare = document.querySelector("audio");
  snare.src="sounds/snare.wav"	;
  snare.currentTime = 0;
  snare.play();
  const key = document.querySelector(".key[data-key='74']");
  key.classList.add('playing');
}
function tom() {
  const tom = document.querySelector("audio");
  tom.src="sounds/tom.wav"
  tom.currentTime = 0;
  tom.play();
  const key = document.querySelector(".key[data-key='75']");
  key.classList.add('playing');
}
function tink() {
  const tink = document.querySelector("audio");
  tink.src="sounds/tink.wav"
  tink.currentTime = 0;
  tink.play();
  const key = document.querySelector(".key[data-key='76']");
  key.classList.add('playing');

}


function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

$("body").on("keypress",function(e){

if(e.keyCode==65)
{

clap();

}

if(e.keyCode==83)
{
console.log("a");
hihat();

}

if(e.keyCode==68)
{
console.log("a");
kick();

}

if(e.keyCode==70)
{
console.log("a");
openhat();

}

if(e.keyCode==71)
{
console.log("a");
boom();

}

if(e.keyCode==72)
{
console.log("a");
ride();

}

if(e.keyCode==74)
{
console.log("a");
snare();

}


if(e.keyCode==75)
{
console.log("a");
tom();

}

if(e.keyCode==76)
{
console.log("a");
tink();

}
})


$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
//    willLoop = 1 - willLoop;

});

$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
  //  willShuffle = 1 - willShuffle;
});
var nodrums

   $('.welcome-screen button').on('click', function() //front page
   {
        var name = $('#name-input').val();
        if (name.length > 2) //atleast two letters reqd for input otherwise show error
        {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });


      function fancyTimeFormat(time)//code for converting time from milliseconds to minutes
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
    function updateCurrentTime()//checks and update current duration of song
     {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);// fancy format called to convert milliseconds into minutes
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);//shows current time when song is paused or played
    $('.song-duration').text(duration);//shows whole duration of song in minutes
}



function toggleSong() //declaring toggle fxn which hv play pause controls by spacebar and mouse click and can be called anywhere below this code
 {
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
$('.play-icon').on('click',function(){
    toggleSong();

});

$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});



function addSongNameClickEvent(songName,position)
{
    var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songs[position-1]);
}
});
}
//song detais r stored in object SONGS
var songs = [{
        'name': 'California Love',
        'artist': '2pac,Dr.Dre',
        'album': 'All Eyes on me',
        'duration': '6:25',
       'fileName': 'song1.mp3',
       'image':'song1.jpg',

    },
    {
        'name': 'Dumpin',
        'artist': '2pac',
        'album': 'Pac life',
        'duration': '4:27',
        'fileName': 'song2.mp3',
        'image':'song2.jpg',
    },
    {
        'name': 'The Next Episode',
        'artist': 'Snoopdogg,Dr.Dre',
        'album': 'Project X',
        'duration': '2:41',
        'fileName': 'song3.mp3',
        'image':'song3.jpg',
    },
    {
        'name': 'Lean on',
        'artist': 'Major lazor,DJ SNAKE',
        'album': 'Lean On',
        'duration': '2:56',
        'fileName': 'song4.mp3',
        'image':'song4 .jpg',

    }]/*var songName1 = 'California Love';
var songName2 = 'Dumpin';
var songName3 = 'The Next Episode';
var songName4 = 'Lean On'; */

/*var songList = ['California Love', 'Dumpin', 'The Next Episode', 'Lean On'];// array is created where all songs r stored
var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
var artistList = [' Dr.DRE, Tupac', 'Tupac', 'Snoopdog ,DR.DRE', 'Major Lazor , DJ SNAKE'];
var albumList = ['All Eyes on ME','pac life','Project X','Lean On'];
var durationList = ['2:56','3:15','2:34','2:29'];*/

function changeCurrentSongDetails(songObj)//jese hi gana  change krenge uski details (artist,image,duration) sbb change hojayengi
 {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}
window.onload = function()//on refreshing page all details r refreshed and start from beginning and we start from our intial point again


 {





     changeCurrentSongDetails(songs[0]);
   for(var i =0; i < songs.length;i++) {
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(songs[i].name);
        song.find('.song-artist').text(songs[i].artist);
        song.find('.song-album').text(songs[i].album); // Added
        song.find('.song-length').text(songs[i].duration); // Added

    }


     $('audio').on('ended',function()//code for shuffle and repeat functions
      {
     var audio = document.querySelector('audio');
     if (willShuffle == 1) {
         var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
         var nextSongObj = songs[nextSongNumber-1];
         audio.src = nextSongObj.fileName;
         toggleSong();
         changeCurrentSongDetails(nextSongObj);
         currentSongNumber = nextSongNumber;
     }
     else if(currentSongNumber < 4 && drumsOn) {
         var nextSongObj = songs[currentSongNumber];
         audio.src = nextSongObj.fileName;
         toggleSong();
         changeCurrentSongDetails(nextSongObj);
         currentSongNumber = currentSongNumber + 1;
     }
     else if(willLoop == 1) {
         var nextSongObj = songs[0];
         audio.src = nextSongObj.fileName;
         toggleSong();
         changeCurrentSongDetails(nextSongObj);
         currentSongNumber =  1;
     }
     else  {
         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
         audio.currentTime = 0;
     }

 });

$('#songs').DataTable//plugin added to make our app look better and search bar is also created
({
        paging: false
    });

$(".hello").on("click",function(){


$(".content").toggleClass("hidden");

$(".drums").toggleClass("hidden");



})


for (var i = 0; i < songs.length ; i++)//mouse click aur spacebar se play pause control krega tbhi toggle song fxn call kia
 {
    addSongNameClickEvent(songs[i].fileName,i+1)
    $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running all together
  audio.currentTime = 0; // allows the sound to start again or repeat when pressed
  audio.play();
  key.classList.add('playing'); // adds animation from  my css

};


    // drumkit Onclick functions

console.log(clap);
function updateTimer(){
var song = document.querySelector('audio');
var ct =song.currentTime;
var td =song.duration;
var percentage = (ct/td)*100;
$(".progress-filled").css('width',percentage+"%");



}



window.addEventListener('keydown', playSound);

updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}

function updateTimer(){
var song = document.querySelector('audio');
var ct =song.currentTime;
var td =song.duration;
var percentage = (ct/td)*100;
$(".progress-filled").css('width',percentage+"%");



}




setInterval(function() {
       updateTimer()
   }, 1000);
