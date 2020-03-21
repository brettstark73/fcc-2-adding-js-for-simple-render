  // Bank some good vibe options
  const vibes = [
    "Brett...and you are awesome!",
    "Brett...have a wonderful day!",
    "Brett...and you've got this!",
    "Brett...Peace...☮️"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);
