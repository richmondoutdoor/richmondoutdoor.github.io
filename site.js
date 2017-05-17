$(function(){
  var $gallery = $('#gallery-2016-day1');

  if($gallery.length){
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
        img.src = "Public/images/Day1/  ("+i+")  .JPG";
        div.className = "photo";
        div.appendChild(img);
        div.appendChild(span);
        $gallery.append(div);
      }
    }
  }

  var $gallery = $('#gallery-2016-day2');

  if($gallery.length){
    var day2Length = 503;
    var ignores = [60];

    for(var i=1; i<=day2Length; i++){
      if(ignores.indexOf(i) < 0){
        var div = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        span.innerText = "Day 2 #"+i;
        img.src = "Public/images/Day2/   ("+i+").JPG";
        div.className = "photo";
        div.appendChild(img);
        div.appendChild(span);
        $gallery.append(div);
      }
    }
  }

  // 2017
  var $gallery = $('#gallery-2017-day1');

  if($gallery.length){
    var day1Length = 517;

    for(var i=1; i<=day1Length; i++){
      var div = document.createElement('div');
      var img = document.createElement('img');
      var span = document.createElement('span');
      span.innerText = "Day 1 #"+i;
      img.src = "Public/images/2017/Day1W/"+i+".jpg";
      div.className = "photo";
      div.appendChild(img);
      div.appendChild(span);
      $gallery.append(div);
    }
  }

  var $gallery = $('#gallery-2017-day2');

  if($gallery.length){
    var day2Length = 670;

    for(var i=1; i<=day2Length; i++){
      var div = document.createElement('div');
      var img = document.createElement('img');
      var span = document.createElement('span');
      span.innerText = "Day 2 #"+i;
      img.src = "Public/images/2017/Day2W/"+i+".jpg";
      div.className = "photo";
      div.appendChild(img);
      div.appendChild(span);
      $gallery.append(div);
    }
  }
});
