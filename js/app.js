$(function() {

  var speed = 0.3;
  var ease = Elastic.easeInOut.config(.1, 0.5);
  var demoDelay = 0;

  $('.social-icon').each(function() {
    var tl = new TimelineLite({  }),
      $this = $(this),
      $round = $this.find('.si-round'),
      $splash = $this.find('.si-splash'),
      $icon = $this.find('.si-icon'),
      $gradient = $this.find('.si-gradient'),
      color = $round.css('fill');

    // tl.pause(); // turn on

    $this.css('opacity', 1);

    // Morph and animate colors

      $round.attr("fill",'#989898');

      tl.to($round, speed, {
        morphSVG: $splash,
        css: {
          fill: color,
        },
        ease: ease
      }, 0)


    // Animate icon
    tl.to($icon, speed + .1, {
      css: {
        scale: 1.2,
        transformOrigin: "center center",
      },
      ease: Back.easeInOut.config(1)
    }, 0);




    // On hover play timeline
    $(this).hover(function() {
      tl.play();
    }, function() {
      var currentTime = tl.time();
      tl.reverse(currentTime);
    });



    setTimeout(function() {
      tl.play();
    }, demoDelay);
    setTimeout(function() {
      tl.reverse();
    }, demoDelay + 1000);
    demoDelay = demoDelay + 100;



  });



});
