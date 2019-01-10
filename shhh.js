var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var shhh = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var pos = 0;

document.addEventListener('keydown', function(e) 
{
  var key = shhh[e.keyCode];
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
	var song = new Audio("shhh.mp3");
	song.loop = true;
	document.body.appendChild(song);​

	alert("vAZz = n00b.");
}