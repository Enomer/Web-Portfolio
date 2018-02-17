
new Vue ({
  el: '#maincontent',
  data: {
    mainPage: true,
    portfolio: false,
    anInterval: null,
    title: '',
    subhead: '',
    playApp:  '',
    headerAssets: '',
    subHead1: '',
    bodyContent1: '',
    subHead2: '',
    bodyContent2: "",
    subHead3: '',
    bodyContent3: '',
    gradient: ''
  },
  methods: {
    changeArcade: function() {
      this.title = 'Classic Arcade Game';
      this.subhead= 'Designed the minimal user interface and provided full functionality to the game using HTML, CSS and Javascript.';
      this.playApp=  "<br><a class='visitAll' id='visitArcade' class='animated fadeIn' target='_blank' href='https://enomer.github.io/Arcade-Game/'>Play App</a>";
      this.headerAssets= "<h1 class='buggy run-animation1'><img src='./img/enemy-bug.png'></h1>";
      this.subHead1= 'Project Objectives';
      this.bodyContent1= "<br><strong> • </strong>Provide the player with movement using arrow keys and how far each arrow key takes the player character<br><br> <strong> • </strong>Give enemies speed values that randomly reset on re entering frame per lane, give them collision detection as well<br><br> <strong> • </strong>Make the game board a fixed area of which the player can navigate <br><br><strong> • </strong>Complex applications such as enemy and player instance must be “broken down” into simpler entities that manage their own properties and functionality<br><h1 class='buggy run-animation2'><img id='buggy2' src='./img/enemy-bug.png'></h1>";
      this.subHead2= 'Challenges';
      this.bodyContent2= "<p style='font-weight:600;'> Main challenges of the game was understanding the game engine, some particular aspects of game functionality which were challenging include:</p><br><br>•	Handling how classes provide functionality and new instances specifying values such as coordinate position (the enemies) and what to include and what not to include in these classes<br>•	Player character update methods should distinguish between when the character has reached the edge of the game board and can not go any further from event listener and x/y coordinate information<br>•	Understanding the game engine and how it continuously updates then renders each frame<br>•	enemy collision detection and enemy speed randomization on reaching certain x coordinate";
      this.subHead3= 'Technologies';
      this.bodyContent3="HTML5 Canvas game Engine<br>Javascript ES2015/ES6<br>Web APIs i.e. Event Listeners<br> Object Oriented Programming/ ES6 Classes<br>SVG <h1 class='buggy run-animation3'><img src='./img/enemy-bug.png'></h1>";
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradArcade)"
    },
    changeMemory: function() {
      this.title = 'Interactive Memory Game';
      this.subhead= 'Designed the minimal user interface and provided full functionality to the game using HTML, CSS and Javascript.';
      this.playApp=  "<br><a class='visitAll' id='visitMem' class='animated fadeIn' target='_blank' href='https://enomer.github.io/Concentration-memory-game/'>Play App</a><br><br>";
      this.headerAssets= ""
      this.subHead1= 'Project Objectives';
      this.bodyContent1= "The project needed to have the following features:<br><br>• The player flips one card over to reveal its underlying symbol. <br>• The player then turns over a second card, trying to find the corresponding card with the same symbol. <br>• If the cards match, both cards stay flipped over. <br>• If the cards do not match, both cards are flipped face down.<br> <img id='truffleShuffle' src='./img/shuffleDeck.gif'><br>In the real life version of the game, a player will flip over the cards to locate the pairs which match, with this in mind, there are a few animation interactions that i needed to address: <br><br>• Flipping Cards<br>• What happens when cards match <br>• What happens when cards do not match <br>• When the game finishes<br><br><br>Additional functionality:<br>• Star Rating system<br>• Time elapsed recorded visually on first button click<br>• Replay button which reshuffles the game board and reset all game state<br><br><div id=\"imgBox\"><img class=\"flipExamp animated flipInY infinite\" src='./img/number5.gif'><img class='flipExamp animated rubberBand infinite' src='./img/number5.gif'> <img class='flipExamp animated shake infinite' src='./img/number5.gif'> </div>";
      this.subHead2= 'Challenges';
      this.bodyContent2= "Main challenges of the game was the functionality, as it was a project used to learn how to use javascript with DOM web API methods.<br><br>The main challenges for programming the game's functionality was in <br>• Controlling the game's state - when to prompt the congratulations screen,	when it knew to reset values when pressing replay button.<br>• Shuffling the games cards every time the game loads up or the replay button is pressed<br>• Main Heading animation for congratulations and concentration by using an array and randomization<br>• how to manage when and how a card becomes visible when clicking on it<br><br><link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet'> <svg viewBox=\"0 0 300 35\" id=\"logo2\"><path fill=\"none\" d=\"\"/></svg><br><br><p style='font-weight:bold'>What i learned in this project</p><br>• Passed functions as arguments to other functions<br>• Identified when and how scope is exactly created<br>• Learned how functions can keep track of the variables around them through closure<br> • Used functions immediately after being invoked in order to manage private data<br>";
      this.subHead3= 'Technologies';
      this.bodyContent3='Code technologies and skills I got involved while working on this project<br><br>Front-End<br>Javascript ES 2015/ES6<br>HTML5 <br>CSS3 preprocessed with SASS<br>Snap.svg<br>Web APIs<br>Animate.css<br>UI/UX animations<br>photoshop(Gif formatting)';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradConcen)"

    },
    changeChina: function() {
      this.title = "China's Energy Initatives";
      this.subhead= 'Infographical web page with interactive elements, My introduction to javascript, which features a web page built with jQuery and datavisu.al; a platform utilizing d3.js, to produce data heavy, interactive infographics';
      this.playApp=  "<a class='visitAll' id='visitChina' class='animated fadeIn' target='_blank' href='https://enomer.github.io/Energy-Initiatives/#'>Visit Site</a>";
      this.headerAssets= "<p><br><strong>*Interactive Infographic</p><iframe id='graphChina' src='https://s3.amazonaws.com/datavisual/embeds/235c5691f4.html' style='height:400.4953877690468px; max-width:606px; width:100%; border: 0px; overflow: hidden' scrolling='no'></iframe><script src='http://datavisu.al/js/lazyLoad.js#!dv-6881f01518669842192,235c5691f4.html'></script>";
      this.subHead1= 'Project Objectives';
      this.bodyContent1= "Informative, informational, and interactive website:<br> <br> •	Design animated infographics which have minor hover state interaction <br> •	Use jQuery to develop small microinteractions and animation <br>•	Develop experimental CSS buttons with psuedo class elements and creative techniques for styling using bootstrap button glyphs. <br> • Script small sequences which depended on certain variables(both buttons clicked spawns small paragraph) <br><br><img id='chinaAssets' src='./img/chinaAssets.jpg'>";
      this.subHead2= 'Challenges';
      this.bodyContent2= "The main challenges for interface functionality and design:<br><br>•	Minimal interface providing information for only four categories<br>•	Having certain elements phase in on events <br>•	Designing creative micro interactions for each infographic and having it switch out dynamically depending on category selection<br><br><img id='chinaBtnGif' src='./img/buttonPopup.gif'><br><br><h3>Visual Design Documentation</h3><br>My Visual Design process; sketches, wireframes, ideas from inforgraphics project can be viewed <a target='_blank' href='https://www.dropbox.com/s/6g5adgw6tms9ldg/Chinas%20energy%20initiatives%20Version_HQP.pdf?dl=0'>here</a>";
      this.subHead3= 'Technologies';
      this.bodyContent3='Code technologies and skills I got involved while working on this project<br><br>Front-End<br>HTML5<br>CSS3<br>bootstrap<br>Javascript/jQuery<br>Datavisu.al/d3.js/Web APIs';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradChina)"
    },
    changeExercise: function() {
      this.title = "<span style=\"color:#fff\"> Exercise: Responsive Design";
      this.subhead= '<span style=\"color:#fff\"> A website made using CSS grid and some flexbox to a achieve full cross browser compatibility which is fully responsive across all viewports while maintaining an aesthetic design, modern website interface.<br>';
      this.playApp=  "<br><a class='visitAll' id='visitExercise' class='animated fadeIn' target='_blank' href='https://enomer.github.io/Portfolio-Site-project/'>Visit Site</a><br>";
      this.headerAssets= '';
      this.subHead1= '<span style=\"color:#fff\"> <br>Project Objectives';
      this.bodyContent1= "<span style=\"color:#fff\"><p id='exerciseObjectives'> The project needed to have the following features: <br><br>•	Visually responsive and well designed across all device viewports. <br>•	Page utilizes a grid-based layout with styles making use of the flexbox and CSS Grid layout or a frameworkHTML5 semantic tags such as header, footer, article, section, etc. <br>•	Combining Media Queries and source sets to specify images for smaller and larger view ports with different images for different pixel densities for further optimization. <br>•	Accessibility optimized with Focus using DOM order and tab index</p><br><br><img id='srcSets' src='./img/SrcSets.png'><br>";
      this.subHead2= '<span style=\"color:#fff\"> Challenges';
      this.bodyContent2= "<span style=\"color:#fff\"> The main challenges for programming the game's functionality was in:<br>•	Setting up alternative navigation for smaller mobile devices which still considers relevant website design systems such as color, look and feel <br><br> <img id='hamburgerExercise' src='./img/hamburger.gif'><br><br>•	Using flexbox within a grid for better internal element organization<br>•	Deterimning Image source sets and pixel density resolution sizes for each viewport<br>";
      this.subHead3= '<span style=\"color:#fff\"> Technologies';
      this.bodyContent3='<span style=\"color:#fff\"> Code technologies and skills I got involved while working on this project<br><br>Front-End<br>HTML5<br>CSS3/SASS<br>Grid/Flexbox<br>photoshop(Srcset)';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradExercise)"
    },
    changeFeeder: function() {
      this.title = "<span style=\"color:#fff\"> RSS Feed Reader Testing";
      this.subhead= '<span style=\"color:#000\"> In this project i was given a web-based application that reads RSS feeds, i developed 7 testing suites to practice and explore Jasmine\'s tools for testing many application\'s functionality, including asynchronous API events.<br>';
      this.playApp=  "<br><a class='visitAll' id='visitFeeder' class='animated fadeIn' target='_blank' href='https://enomer.github.io/RSS-Feed-Reader-Testing/'>Visit RSS Feed</a><br>";
      this.headerAssets= '';
      this.subHead1= '<span style=\"color:#fff\"> <br>Why this Project?';
      this.bodyContent1= "<span style=\"color:#000\"><p id='feederObjectives'> Testing is an important part of the development process and many organizations practice a standard of development known as \"test-driven development\". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass. Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!</p><br><br><img id='feederTest' class='animated fadeIn' src='./img/feederTest.png'><br>";
      this.subHead2= '<span style=\"color:#fff\"> What I Learned';
      this.bodyContent2= "<span style=\"color:#000\"><strong> • </strong>How to use Jasmine to write a number of tests against a pre-existing application. These tested the underlying business logic of the application as well as the event handling and DOM manipulation.<br>	<br><strong> • </strong>Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.<br><br>	<strong> • </strong>This project improved my ability to analyze whether new code breaks an existing feature within my codebase, without having to manually test all of the functionality.<br><br>	";
      this.subHead3= '<span style=\"color:#fff\"> Test Development';
      this.bodyContent3="<span style=\"color:#000;text-align:left\"><strong> There are 4 test suites with 7 tests in total *Uses Jasmine 2.0 with modern Done() and beforeEach() methods for determining completion of asynchronous events </strong><br><br> <strong> • </strong>Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.<br><br> <strong> • </strong>Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.<br><br><strong> • </strong>Test that ensures the menu element is hidden by default.<br><br><strong> • </strong>Test that ensures the menu changes visibility when the menu icon is clicked. Menu must display when clicked and hide when clicked again.<br><br><strong> • </strong>Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.<br><br><strong> • </strong>Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.<br><strong><br>No test is dependent on the results of another.";
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradFeeder)"
    },
    changePortfolio: function() {
      this.title = "<span style=\"color:#fff\"> Portfolio Website";
      this.subhead= '<span style=\"color:#fff\"> A Showcase of my current Development projects, website made with Vue.js for high performance. <br>';
      this.playApp=  "<svg version='1.1' id='VueSVG' x='0px' y='0px' viewBox='0 0 286.1 248.5' style='enable-background:new 0 0 286.1 248.5;' xml:space='preserve'><radialGradient id='vue3_1_' cx='143.2797' cy='15.8312' r='142.4749' gradientTransform='matrix(2.499219e-02 0.9997 -0.4486 1.121595e-02 146.8013 -127.5814)' gradientUnits='userSpaceOnUse'><stop  offset='3.071932e-02' style='stop-color:#435767'/><stop  offset='0.3222' style='stop-color:#435466'/><stop  offset='0.5425'style='stop-color:#467671'/><stop  offset='1' style='stop-color:#4DBA87'/></radialGradient><polygon id='vue3' class='st0' points='276.4,10.9 219.2,109.9 211,124.2 199.6,143.7 150.9,228.2 145.5,237.6 139.5,227.1 91.3,143.7 86.7,135.7 86.3,135.1 14.6,10.9 115.3,10.9 145.5,63.2 175.7,10.9 '/><circle id='vue2' class='st1' cx='145.5' cy='132.9' r='69'/><circle id='vue1' class='st2' cx='145.5' cy='132.9' r='17.6'/></svg>";
      this.headerAssets= '';
      this.subHead1= '<span style=\"color:#fff\"> <br>Project Features';
      this.bodyContent1= "<span style=\"color:#fff\"><p id='portfolioObjectives'><strong> • </strong>This responsive website that uses the power of creative SVG, Greensock (GSAP), animate.css and snap svg for ui interactions an various custom css jQuery buttons and micro interactions. <br><br<strong> • </strong>The Component based structure and virtual DOM model of Vue allowed for this single page web page to manage lots of information and tokenize DOM dynamically with each button click <br><br><strong> • </strong>Centered around google's RAIL performance approach; RAIL is a user-centric performance model that breaks down the user's experience into key actions. RAIL's goals and guidelines aim to help developers and designers ensure a good user experience for each of these actions.<br><br><br><img id='RAIL' src='./img/RAIL.png'>";
      this.subHead2= '<span style=\"color:#fff\"> Challenges';
      this.bodyContent2= "<span style=\"color:#fff\"> <strong> • </strong>Understanding how to store information in the Vue Object and access it through Vue's HTML tags and bind new elements to the page on the click of a button<br><br><strong> • </strong>Properly accessing SVG <linearGradient> properties and their fills and reference them within Vue to change fill colors of each page since inline styling can be finicky with Vue sometimes";
      this.subHead3= '<span style=\"color:#fff\"> Technologies';
      this.bodyContent3='<span style=\"color:#fff\"> Code technologies and skills I got involved while working on this project<br><br>Vue.js<br>HTML5/CSS3<br>Greensock (GSAP)<br>animate.css<br>Snap.svg<br>Web APIs/jQuery';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.getElementById('port1').style.fill = "url(#gradPortfolio)"
    },
    gucciAlt: function() {
      let gucci6 = document.getElementById("port1");
      gucci6.style.display= "block";
      const td = new TimelineLite();
      td.to(gucci6, .1, {morphSVG:"#port2"})
      .to(gucci6, .1, {morphSVG:"#port3"})
      .to(gucci6, .1, {morphSVG:"#port4"})
      .to(gucci6, 1.3, {morphSVG:"#port6", ease: Elastic.easeOut.config(.5, .2)});
    },
    gucci6: function() {
      let gucci6 = document.getElementById("port1");
      gucci6.style.display= "block";
      const td = new TimelineLite();
      td.to(gucci6, .1, {morphSVG:"#port2"})
      .to(gucci6, .1, {morphSVG:"#port3"})
      .to(gucci6, .1, {morphSVG:"#port4"})
      .to(gucci6, 1.3, {morphSVG:"#port5", ease: Elastic.easeOut.config(.5, .2)});
    },
    gucci7: function() {
      let gucci6 = document.getElementById("port1");
      const td = new TimelineLite({
        onComplete: function() {
          gucci6.style.display = "none"
        }
      })
      td.to(gucci6, .1, {morphSVG:"#port4"})
      .to(gucci6, .1, {morphSVG:"#port3"})
      .to(gucci6, .1, {morphSVG:"#port2"})
      .to(gucci6, .1, {morphSVG:"#port1"});
    },
    concentration: function() {
      Vue.nextTick(function () {
        generateTitle('Concentration!', '1.8em');
      })
      this.anInterval = setInterval(function() {
        generateTitle('Concentration!', '1.8em')
      },2500);
    },
    clearIt: function() {
      clearInterval(this.anInterval);
      document.getElementById('port1').style.fill = ""
    },
    chinaInterval: function() {
      this.anInterval = setInterval(
        function() {
          document.getElementById('headerAssets').innerHTML = "<p><strong>*Interactive Infographic</p><iframe id='graphChina' src='https://s3.amazonaws.com/datavisual/embeds/235c5691f4.html' style='height:400.4953877690468px; max-width:606px; width:100%; border: 0px; overflow: hidden' scrolling='no'></iframe><script src='http://datavisu.al/js/lazyLoad.js#!dv-6881f01518669842192,235c5691f4.html'></script>";
        }, 3500)
      },
      vueAnim: function() {
        function prada2() {
          MorphSVGPlugin.convertToPath("#vue1");
          MorphSVGPlugin.convertToPath("#vue2");
          MorphSVGPlugin.convertToPath("#vue3");
          let prada1 = document.getElementById('vue1');
          const tm = new TimelineLite()
          tm.to(prada1, .5, {morphSVG:"#vue2"})
          .to(prada1, 1, {morphSVG:"#vue3", ease: Elastic.easeOut.config(.6, 0.3)})
        }
          Vue.nextTick(function () {
            prada2();
          })
          this.anInterval = setInterval(function() {
            prada2();
          }, 3000);
        }
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


    function generateTitle(logoTitle, sizing) { //Plays out animated header with whateevr font size is input
      let o = document.getElementById("logo2").querySelectorAll("text");
      if (o.length > 0) {
        o[0].remove();
      }

      let l = Snap('#logo2'); //uses snap.svg to generate a snap on logo id
      setTimeout( function() {
        //let logoTitle = 'Concentration!';
        let logoRandom = '';
        let logoTitleContainer = l.paper.text(0, '75%', );

        let possible = "-+/|}-_(*&^%$#){[]~\\\":;?^%$#){[]/.*><=+@!)}";
        logoTitleContainer.attr({
          fontSize: sizing,
          fontFamily: 'Dosis',
          fontWeight: '600'
        });

        function generateRandomTitle(i, logoRandom) {
          setTimeout( function() {
            logoTitleContainer.attr({ text: logoRandom });
          }, i*70 );
        }

        for( let i=0; i < logoTitle.length+1; i++ ) { // nested for loop to randomly select digits which change before concentration text

          logoRandom = logoTitle.substr(0, i);
          for( let j=i; j < logoTitle.length; j++ ) {
            logoRandom +=
            possible.charAt(Math.floor(Math.random() * possible.length));

          }
          generateRandomTitle(i, logoRandom);
          logoRandom = '';

        }
      }, 500 );
    }
