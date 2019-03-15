var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var shhh = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var pos = 0;

document.addEventListener('keydown', function(e) 
{
  var key = e.keyCode;
  var requiredKey = shhh[pos];

  if (key == requiredKey) 
  {
	pos++;

    if (pos == shhh.length) 
	{
      hmm();
      pos = 0;
    }
  } 
  else 
  {
    pos = 0;
  }
});

function hmm() 
{
	var song = document.createElement("AUDIO");
	song.setAttribute("src","shhh.mp3");
	song.setAttribute("id","konamSong");
	document.head.appendChild(song);
	
	var nSong = document.getElementById("konamSong");
	nSong.loop = true;
	nSong.play();

	alert("vAZz = n00b.");
}
