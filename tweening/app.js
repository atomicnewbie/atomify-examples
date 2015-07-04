// This script is the main entry point of the game
require("AtomicGame");

var TWEEN = require('tween.js');

Atomic.game.init(start, update);

Atomic.totalTime = 0;

// called at the start of play
function start() {

   var game = Atomic.game;

   // create a 2D scene
   game.createScene2D();

   var node = game.scene.createChild("Star");
   var sprite2D = node.createComponent("StaticSprite2D");
   sprite2D.sprite = game.getSprite2D("Sprites/star.png");
   sprite2D.blendMode = Atomic.BLEND_ALPHA;

   var tween = new TWEEN.Tween( { x: -1, y: -1 } )
            .to( { x: 1, y: 1 }, 2000 )
            .easing( TWEEN.Easing.Elastic.InOut )
            .onUpdate( function () {
	        node.setPosition2D([this.x,this.y]);
            } )
            .start(0);
}

// called per frame
function update(timeStep) {
  Atomic.totalTime+=timeStep;
  TWEEN.update(Atomic.totalTime*1000);
}
