$(function(){
  var $gallery = $('#gallery-2016-day1');

  if($gallery){
    var day1Length = 593;
    var ignores = [6, 23, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    383, 384, 390, 391, 417, 435, 438, 443, 452, 461, 474, 479,
    480, 514, 534, 535, 544, 545, 551, 561, 562, 568, 570];

    for(var i=1; i<=day1Length; i++){
      if(ignores.indexOf(i) < 0){
        var div = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        span.innerText = "Day 1 #"+i;
        img.src = "Public/images/Day1/  ("+i+")  .jpg";
        div.className = "photo";
        div.appendChild(img);
        div.appendChild(span);
        $gallery.append(div);
      }
    }
  }

  var $gallery = $('#gallery-2016-day2');

  if($gallery){
    var day2Length = 503;
    var ignores = [60];

    for(var i=1; i<=day2Length; i++){
      if(ignores.indexOf(i) < 0){
        var div = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        span.innerText = "Day 2 #"+i;
        img.src = "Public/images/Day2/   ("+i+").jpg";
        div.className = "photo";
        div.appendChild(img);
        div.appendChild(span);
        $gallery.append(div);
      }
    }
  }
});
