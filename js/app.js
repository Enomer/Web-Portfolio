MorphSVGPlugin.convertToPath("#prestart");
let gucci1 = document.getElementById("prestart");

const tl = new TimelineLite({
  "onComplete": transition
});

setTimeout(function() {gucci1.style.display = "block"}, 990)
tl.to(gucci1, .1, {morphSVG:"#start"},"+=1")
  .to(gucci1, .3, {morphSVG:"#middle"})
  .to(gucci1, .3, {morphSVG:"#bigger"})
  .to(gucci1, 1.7, {morphSVG:"#logo", ease: Elastic.easeOut.config(.25, 0.65)});



function transition() {
  gucci1.classList.add('animated');
  gucci1.classList.add('flipOutY');
  document.getElementById('maincontent').style.display = "block";
  document.getElementById('maincontent').classList.add('flipInY');
  document.getElementById('socialmedia').style.display = "grid";
  document.getElementById('socialmedia').classList.add('fadeIn');
  document.getElementById('introduce').style.display = "none";

  let speed = 0.3;
  let ease = Elastic.easeInOut.config(.1, 0.5);
  let delayAnim = 0;

  $('.social-icon').each(function() {
    let tl = new TimelineLite({  }),
      $this = $(this),
      $round = $this.find('.si-round'),
      $splash = $this.find('.si-splash'),
      $icon = $this.find('.si-icon'),
      $gradient = $this.find('.si-gradient'),
      color = $round.css('fill');

    // tl.pause(); // turn on

    $this.css('opacity', 1);

    // Morph and animate colors

      $round.attr("fill",'#ef3d62');

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
      let currentTime = tl.time();
      tl.reverse(currentTime);
    });

    setTimeout(function() {
      tl.play();
    }, delayAnim);
    setTimeout(function() {
      tl.reverse();
    }, delayAnim + 1000);
    delayAnim = delayAnim + 100;
  });
}
