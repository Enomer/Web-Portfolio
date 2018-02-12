
new Vue ({
  el: '#maincontent',
  data: {
    mainPage: true,
    portfolio: false,
    title: '',
    subhead: '',
    playApp:  '',
    headerAssets: '',
    subHead1: '',
    bodyContent1: '',
    subHead2: '',
    bodyContent2: "",
    subHead3: '',
    bodyContent3: ''
  },
  methods: {
    changeArcade: function() {
  this.title = 'Classic Arcade Game';
  this.subhead= 'Designed the minimal user interface and provided full functionality to the game using HTML, CSS and Javascript.';
    this.playApp=  'Play App';
    this.headerAssets= 'Placeholder';
    this.subHead1= 'Project Objectives';
    this.bodyContent1= "<br>• Provide the player with movement using arrow keys and how far each arrow key takes the player character•Give enemies speed values that randomly reset on re entering frame per lane, give them collision detection as well<br>•make the game board a fixed area of which the player can navigate <br>•Complex applications such as enemy and player instance must be “broken down” into simpler entities that manage their own properties and functionality";
    this.subHead2= 'Challenges';
    this.bodyContent2= "Main challenges of the game was understanding the game engine, some particular aspects of game functionality which were challenging include:<br><br>•	Handling how classes provide functionality and new instances specifying values such as coordinate position (the enemies) and what to include and what not to include in these classes<br>•	Player character update methods should distinguish between when the character has reached the edge of the game board and can not go any further from event listener and x/y coordinate information<br>•	Understanding the game engine and how it continuously updates then renders each frame<br>•	enemy collision detection and enemy speed randomization on reaching certain x coordinate";
    this.subHead3= 'Technologies';
    this.bodyContent3='HTML5 Canvas game Engine<br>Javascript ES2015/ES6<br>Web APIs i.e. Event Listeners<br> Object Oriented Programming/ ES6 Classes<br>SVG';

},
    changeMemory() {
    this.title = 'Interactive Memory Game';
  this.subhead= 'Designed the minimal user interface and provided full functionality to the game using HTML, CSS and Javascript.';
    this.playApp=  'Play App';
    this.headerAssets= 'Placeholder';
    this.subHead1= 'Project Objectives';
    this.bodyContent1= "The project needed to have the following features:<br><br>• The player flips one card over to reveal its underlying symbol. <br>• The player then turns over a second card, trying to find the corresponding card with the same symbol. <br>• If the cards match, both cards stay flipped over. <br>• If the cards do not match, both cards are flipped face down.<br> <br>In the real life version of the game, a player will flip over the cards to locate the pairs which match, with this in mind, there are a few animation interactions that i needed to address: <br><br>• Flipping Cards<br>• What happens when cards match <br>• What happens when cards do not match <br>• When the game finishes<br><br><br>Additional functionality:<br>• Star Rating system<br>• Time elapsed recorded visually on first button click<br>• Replay button which reshuffles the game board and reset all game state<br>";
    this.subHead2= 'Challenges';
    this.bodyContent2= "Main challenges of the game was the functionality, as it was a project used to learn how to use javascript with DOM web API methods.<br><br>The main challenges for programming the game's functionality was in <br>• Controlling the game's state; when it knew to go to the congratulations screen, 	when it knew to reset values when pressing replay button.<br>• Shuffling the games cards every time the game loads up or the replay button is pressed<br>• Main Heading animation for congratulations and concentration by using an array and randomization<br>• how to manage when and how a card becomes visible when clicking on it<br><br>What i learned in this project<br>• Passed functions as arguments to other functions<br>• Identified when and how scope is exactly created<br>• Learned how functions can keep track of the variables around them through closure<br> • Used functions immediately after being invoked in order to manage private data<br>";
    this.subHead3= 'Technologies';
    this.bodyContent3='Code technologies and skills I got involved while working on this project<br><br>Front-End<br>Javascript ES 2015/ES6<br>HTML5 <br>CSS3 preprocessed with SASS<br>Snap.svg<br>Web APIs<br>Animate.css<br>UI/UX animations<br>photoshop(Gif formatting)';
  },
    changeChina() {
    this.title = "China's Energy Initatives";
  this.subhead= 'Infographical web page with interactive elements, My introduction to javascript, which features a web page built with jQuery and datavisu.al; a platform utilizing d3.js, to produce data heavy, interactive infographics (responsive WIP).';
    this.playApp=  'Visit Website';
    this.headerAssets= 'Placeholder';
    this.subHead1= 'Project Objectives';
    this.bodyContent1= "Informative interactive websites was developed with only a few factors as priority•	Design animated infographics which could be interacted with in hover states <br>•	Use Jquery to develop small microanimations and interactions <br>•	Experiment with creative CSS button elements utilizing different element attributes for styling using bootstrap button glyphs. <br>•	Script small sequences which depended on certain variables(both buttons clicked spawns small paragraph) <br><br>";
    this.subHead2= 'Challenges';
    this.bodyContent2= "The main challenges for interface functionality and design:<br>•	Minimal interface providing information for only four categories<br>•	Having certain elements phase in on events <br>•	Designing creative micro interactions for each infographic and having it switch out dynamically depending on category selection<br>";
    this.subHead3= 'Technologies';
    this.bodyContent3='Code technologies and skills I got involved while working on this project<br><br>Front-End<br>HTML5<br>CSS3<br>bootstrap<br>Javascript/jQuery<br>Datavisu.al/d3.js/Web APIs';
  },
    changeExercise() {
    this.title = "Exercise: Responsive Design";
  this.subhead= 'A website made using CSS grid and some flexbox to a achieve full cross browser compatibility which is fully responsive across all viewports while maintaining an aesthetic design, modern website interface.';
    this.playApp=  'Visit Website';
    this.headerAssets= 'Placeholder';
    this.subHead1= 'Project Objectives';
    this.bodyContent1= "The project needed to have the following features: <br><br>•	Visually responsive and well designed across all device viewports. <br>•	Page utilizes a grid-based layout with styles making use of the flexbox and CSS Grid layout or a frameworkHTML5 semantic tags such as <header>, <footer>, <article>, <section> etc. are used to add meaning to the code. <br>•	Combining Media Queries and source sets to specify images for smaller and larger view ports with different images for different pixel densities for further optimization. <br>•	Accessibility optimized with Focus using DOM order and tab index<br><br>";
    this.subHead2= 'Challenges';
    this.bodyContent2= "The main challenges for programming the game's functionality was in:<br>•	Setting up alternative navigation for smaller mobile devices which still considers relevant website design systems such as color, look and feel<br>•	Using flexbox within a grid for better internal element organization<br>•	Deterimning Image source sets and pixel density resolution sizes for each viewport<br>";
    this.subHead3= 'Technologies';
    this.bodyContent3='Code technologies and skills I got involved while working on this project<br><br>Front-End<br>HTML5<br>CSS3/SASS<br>Grid/Flexbox<br>photoshop(Srcset)';
  },
  gucci6: function() {
    let gucci6 = document.getElementById("port1");
    const td = new TimelineLite();
    td.to(gucci6, .1, {morphSVG:"#port2"})
    .to(gucci6, .1, {morphSVG:"#port3"})
    .to(gucci6, .1, {morphSVG:"#port4"})
    .to(gucci6, 1.3, {morphSVG:"#port5", ease: Elastic.easeOut.config(.5, .2)});
  },
  }
});



MorphSVGPlugin.convertToPath("#port1");
MorphSVGPlugin.convertToPath("#port2");
MorphSVGPlugin.convertToPath("#port3");
MorphSVGPlugin.convertToPath("#port4");













MorphSVGPlugin.convertToPath("#prestart");
let gucci1 = document.getElementById("prestart");
let animationEnd = (function(el) {
  let animations = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "mozAnimationEnd",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for(let t in animations) {
    if(el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement("fakeelement"));


window.onload = introAnim;




function introAnim() {
  const tl = new TimelineLite();
  function transition() {
      document.getElementById('navLogo').classList.add('fadeIn');
      document.getElementById('socialmedia').style.display = "grid";
      document.getElementById('thebody').style.backgroundColor = "#31215b";
};

  setTimeout(function() {gucci1.style.display = "block"}, 990)
  tl.to(gucci1, .1, {morphSVG:"#start"},"+=.5")
  .to(gucci1, .3, {morphSVG:"#middle"})
  .to(gucci1, .3, {morphSVG:"#bigger"})
  .to(gucci1, 1.7, {morphSVG:"#logo", ease: Elastic.easeOut.config(.25, 0.65)});

    transition();
    socialMedia();

  function socialMedia() {
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
}
