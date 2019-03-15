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

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

function hmm() 
{
	var video = document.createElement("video");video.muted = false;video.autoplay = true;video.style.position = "fixed";video.style.left = "0";video.style.bottom = "0";video.style.minHeight = "100%";video.style.minWidth = "100%";
	video.src = "mem.mp4"; document.body.appendChild(video); 
	
	var tmp = document.getElementById("content");
	tmp.style.position = "fixed";
	var w = tmp.offsetWidth / 2;
	w = w.toString(); 
	tmp.style.marginLeft = "-" + w + "px";
	tmp.style.left = "50%";
	document.getElementById("content").remove();
	document.body.style.color = "#ffffff";
	document.body.appendChild(tmp);
	
	alert("vAZz = n00b.");
}
