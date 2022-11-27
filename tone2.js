function f1(){

    pitc=document.getElementById('pitch').value
    return(pitc)}

const upload = () => {
    var url;
    var file = document.querySelector("#file").files[0];
    var reader = new FileReader();
    reader.onload = function(evt) {
      url = evt.target.result;
      console.log(url);
      var sound = document.createElement("audio");
      var link = document.createElement("source");
      sound.id = "audio-player";
      sound.controls = "controls";
      link.src = url;
      sound.type = "audio/mpeg";
      sound.appendChild(link);
    //   document.getElementById("song").appendChild(sound);
   
    
    const player = new Tone.Player({
        url: url,
        loop: false,
        autostart: true,
    })
    const pitchShift = new Tone.PitchShift().toDestination();
    pitchShift.pitch = pitc;

    player.connect(pitchShift);
    };
    reader.readAsDataURL(file);
  };

conf=document.getElementById("play-button")

conf.onclick = f1;



  



    
    

