(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.ballsImg = function() {
	this.initialize(img.ballsImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,839,838);


(lib.beaker = function() {
	this.initialize(img.beaker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,305);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,306);


(lib.levelBoardBg = function() {
	this.initialize(img.levelBoardBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,856);


(lib.levelBtn = function() {
	this.initialize(img.levelBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,156);


(lib.reset = function() {
	this.initialize(img.reset);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.star = function() {
	this.initialize(img.star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.popupBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.569)").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popupBg, new cjs.Rectangle(0,0,720,1280), null);


(lib.startBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBxIAAi/IhNAAIAAgiIC/AAIAAAiIhMAAIAAC/g");
	this.shape.setTransform(41.45,-1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBxIg9hVIgbAAIAABVIgoAAIAAjhIBLAAQAbgBATAKQATAIAKAQQAKAPAAAUQAAAZgOARQgNASgZAHIBBBYIAAACgAgugDIAeAAQAXABANgLQAMgJAAgUQAAgSgLgKQgMgKgUABIgjAAg");
	this.shape_1.setTransform(22.125,-1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABCBxIgVg8IhaAAIgWA8IgoAAIAAgCIBTjfIAxAAIBTDfIAAACgAgiAVIBDAAIghhgg");
	this.shape_2.setTransform(-0.6,-1.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBxIAAi/IhNAAIAAgiIC/AAIAAAiIhMAAIAAC/g");
	this.shape_3.setTransform(-22,-1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBvQgWgHgQgMIATgcQAPAKARAFQARAGAPAAQAWAAAMgJQANgIAAgPQAAgKgFgFQgEgHgJgGIgdgLIgGgDQgXgIgNgHQgOgIgJgMQgIgMAAgUQAAgUAMgOQALgOASgGQATgHATAAQArAAAjAYIgSAcQgQgKgOgEQgOgFgRAAQgQAAgLAHQgKAHAAANQAAAHADAFQAFAGAJAGIAaALIAGACQAYAJAOAHQAOAHAJANQAKANAAAWQAAAVgLAPQgLAQgTAIQgUAHgZAAQgaAAgVgHg");
	this.shape_4.setTransform(-42.1,-1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9933").s().p("At0EsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIbpAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startBtn, new cjs.Rectangle(-118.5,-31.5,237,63.1), null);


(lib.reset_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.reset();
	this.instance.setTransform(-28.35,-28.35,0.2215,0.2215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-28.3,56.7,56.7);


(lib.playAgainBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0BxIhVh/IgHgKIgKgPIgHgOIAACmIgmAAIAAjhIAqAAIBbCGIAGAJIAIAMIAGAMIAAinIAmAAIAADhg");
	this.shape.setTransform(83.8,-1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBxIAAjhIAnAAIAADhg");
	this.shape_1.setTransform(66.75,-1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABCBxIgVg8IhaAAIgWA8IgoAAIAAgCIBTjfIAxAAIBTDfIAAACgAgiAVIBDAAIghhgg");
	this.shape_2.setTransform(50.7,-1.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBnQgYgPgLgaQgLgaAAgjQAAgoAPgbQAPgaAZgMQAYgNAeAAQArAAAiAVIgRAdQgagQgfAAQgkAAgRAWQgRAWAAAnQAAAoAQAWQAQAWAkAAQAVAAAUgIIAAg5Ig2AAIAFggIBZAAIAABuQgWALgTAFQgTAFgXAAQglAAgZgPg");
	this.shape_3.setTransform(27.875,-1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCBxIgVg8IhaAAIgVA8IgpAAIAAgCIBTjfIAxAAIBTDfIAAACgAgiAVIBDAAIghhgg");
	this.shape_4.setTransform(5.45,-1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBxIAAhbIhRiEIAAgCIAsAAIA5BjIA8hjIAqAAIAAACIhTCEIAABbg");
	this.shape_5.setTransform(-24.775,-1.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBxIgVg8IhbAAIgUA8IgpAAIAAgCIBTjfIAwAAIBUDfIAAACgAgiAVIBDAAIghhgg");
	this.shape_6.setTransform(-46.9,-1.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBxIAAjhIAoAAIAAC/IBrAAIAAAig");
	this.shape_7.setTransform(-66.175,-1.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhRBxIAAjhIBNAAQAcgBATAKQATAIAKARQAKAPAAAWQAAAVgKARQgKAQgUAKQgUALgcgBIgjAAIAABQgAgpABIAgAAQAxAAAAgpQAAgUgLgJQgMgKgVAAIglAAg");
	this.shape_8.setTransform(-85.275,-1.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9933").s().p("At0EsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIbpAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playAgainBtn, new cjs.Rectangle(-118.5,-31.5,237,63.1), null);


(lib.level_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stars
	this.instance = new lib.star();
	this.instance.setTransform(98.5,0);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(52.5,0);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(6.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	// lock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKCfQgvAAgggdQgfgdAAgoIAAguQAAgQAHgJQAHgLAQgCIADgpQAAgoAZgbQAZgbAlAAQAkAAAYAcQAXAcAAApIAAAmQAmAIAAAbIAAA0QAAApgcAbQgcAbgoAAgAgXAPQgLAMAAAQQAAAXAQALIAAAbQAAAJAGAFQAGAGAGgBQAHABAGgGQAGgFAAgJIAAgbQATgNAAgVQAAgQgKgMQgLgLgPAAQgOAAgLALgAgohiQgPAQAAAWIAAAoIBlAAIAAgoQAAgWgPgQQgPgQgUAAQgVAAgPAQg");
	this.shape.setTransform(75.0344,97.5545,1.666,1.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2852B0").s().p("AgPCgQguAAgcgeQgbgdAAgpIAAguQAAgSAEgIQAGgKAQgCIAAgpQAAgoAZgbQAagbAlAAQAkAAAZAcQAZAcAAAoIAAAnQAhAGAAAdIAAA0QAAApgdAcQgcAcgoAAgAgYAOQgJALAAARQAAAXAVALIAAAbQAAAIAEAGQAFAFAGAAQAHAAAFgFQAEgGAAgIIAAgbQASgJAAgZQAAgQgLgMQgLgLgPAAQgOAAgKALgAgkhkQgPAQAAAWIAAApIBnAAIAAgpQAAgWgQgQQgPgQgVAAQgUAAgQAQg");
	this.shape_1.setTransform(74.6179,96.18,1.666,1.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// text
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0CBQgXgIgMgRQgMgQAAgXQAAgVANgRQANgRAegOQgqgaAAgnQAAgWAMgQQAMgPAUgIQAUgHAWAAQAbAAATAIQAUAJAJAPQAKAOAAATQAAAhgsAbQATALANAKQAMAKAHANQAHANAAARQAAAYgMARQgMARgWAJQgWAJgfAAQgeAAgXgJgAghAkQgIALAAALQABAQAJAKQALAKAUAAQAPAAAIgEQAKgFAEgHQAEgHAAgIQAAgMgFgIQgFgHgKgGQgIgGgUgKQgTALgHALgAgVhYQgIAHABAMQgBALAJAJQAIAKATAKQALgIAHgKQAFgKAAgKQABgNgJgIQgHgIgPAAQgOAAgHAIg");
	this.shape_2.setTransform(93.9,118.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8AYIAAgvIB5AAIAAAvg");
	this.shape_3.setTransform(74.975,120.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1CDQgTgEgRgIIATgqQAbAMAaAAQAYAAAMgMQANgMAAgQQAAgNgFgJQgEgKgNgGQgLgEgVAAIgRABIgOACIgUgQIAAiBICbAAIgGAvIhcAAIAAA2IAQgBQAbAAAUAJQAVAJALARQALATAAAaQAAAYgKAVQgKAUgXANQgXANgkgBQgXAAgSgEg");
	this.shape_4.setTransform(56.125,118.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1CDQgTgEgRgIIATgqQAbAMAaAAQAYAAAMgMQANgMAAgQQAAgOgFgIQgEgKgNgGQgLgEgVgBIgRACIgOACIgUgPIAAiBICbAAIgGAuIhcAAIAAA2IAQgBQAbAAAUAJQAVAJALASQALASAAAaQAAAYgKAVQgKAUgXAMQgXANgkABQgXgBgSgEg");
	this.shape_5.setTransform(56.125,146.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{y:120.85}},{t:this.shape_2,p:{y:118.625}}]}).to({state:[{t:this.shape_5},{t:this.shape_3,p:{y:148.45}},{t:this.shape_2,p:{y:146.225}}]},1).wait(1));

	// Layer_1
	this.instance_3 = new lib.levelBtn();
	this.instance_3.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,201);


(lib.hideBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCLQgJgJAAgNQAAgNAJgJQAIgJANAAQAOAAAJAJQAJAKAAAOQAAAMgJAJQgIAIgOAAQgNAAgJgJgAgqA4IAAhWQASABAOgCQAOgDAJgHQAIgIAAgMQgBgQgLgKQgJgKgSAAQgKAAgMADQgMAEgSAJIgHgyQAQgIAQgEQAQgEARAAQAaAAAVALQAUALAMATQALATAAAbQAAAggSAUQgSATgjAFIAAAog");
	this.shape.setTransform(1.45,1.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("ABRCmQAHgUAEgVIAhAAQgEAVgHAUgABgAzQgIhTg+g+QhAhAhagGIAQgBQBlAABFBHQA/A+AIBTg");
	this.shape_1.setTransform(10.7625,-7.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#666666","#6E6E6E","#7B7B7B","#ADADAD"],[0,0.173,0.471,1],-12.1,-5.9,0,-12.1,-5.9,31.2).s().p("Ai7C7QhOhNABhuQgBhtBOhOQBOhOBtAAQBuAABNBOQBPBOAABtQAABuhPBNQhNBOhuAAQhtAAhOhOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hideBall, new cjs.Rectangle(-26.5,-26.5,53.1,53.1), null);


(lib.headerPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.score_txt = new cjs.Text("Score: 0", "30px 'Dubai Medium'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 53;
	this.score_txt.lineWidth = 258;
	this.score_txt.parent = this;
	this.score_txt.setTransform(40.6,22.75);

	this.level_txt = new cjs.Text("Level: 1", "bold 30px 'Dubai'", "#FFFFFF");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "right";
	this.level_txt.lineHeight = 53;
	this.level_txt.lineWidth = 148;
	this.level_txt.parent = this;
	this.level_txt.setTransform(737,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.level_txt},{t:this.score_txt}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.737)").s().p("Eg8vAHBIAAuBMB5eAAAIAAOBg");
	this.shape.setTransform(388.75,33.6002,1,0.748);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headerPanel, new cjs.Rectangle(0,0,777.5,78.8), null);


(lib.addBker_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiDuQgLAAgDgEQgFgFAAgKIAAioIimAAQgLAAgEgEQgFgEAAgLIAAg9QAAgLAFgEQAEgFALABICmAAIAAiqQAAgLAFgEQADgEALAAIBCAAQALAAAEAEQAEAEAAALIAACqICpAAQALgBAFAFQAEAEAAALIAAA9QAAALgEAEQgFAEgLAAIipAAIAACoQAAAKgEAFQgEAEgLAAg");
	this.shape.setTransform(-12.3169,8.7572,0.2271,0.2271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhcAAIC5AA");
	this.shape_1.setTransform(3.45,-16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAifICBAAIAAD+QAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbg");
	this.shape_2.setTransform(3.45,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(71,170,246,0)").s().p("AgtCNQgTgTAAgbIAAj+ICBAAIAAD+QAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_3.setTransform(3.45,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#47AAF6","#0245C8"],[0,1],-20.3,-12.8,19.9,12.4).s().p("AhoDwQiHAAAAiHIAAjRQAAiHCHAAIDRAAQCHAAAACHIAADRQAACHiHAAg");
	this.shape_4.setTransform(0.3756,0.3366,1.18,1.1821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-28,56.599999999999994,56.7);


(lib._bker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.02)").s().p("AmCXcMAAAgu3IMFAAMAAAAu3g");
	this.shape.setTransform(0.025,153.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-44,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,44.2).s().p("AlRFRQiMiLABjGQgBjFCMiMQCMiMDFABQDGgBCLCMQCMCMABDFQgBDGiMCLQiLCNjGAAQjFAAiMiNg");
	this.shape_1.setTransform(-0.3826,306.4615,1.0932,0.1015);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._bker, new cjs.Rectangle(-52.6,0,104.4,311.3), null);


(lib.instructionPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.startBtn.mouseChildren=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(0,422.85);
	this.startBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.inst_txt = new cjs.Text("inst text will be here.", "40px 'Dubai Medium'", "#333333");
	this.inst_txt.name = "inst_txt";
	this.inst_txt.textAlign = "center";
	this.inst_txt.lineHeight = 68;
	this.inst_txt.lineWidth = 600;
	this.inst_txt.parent = this;
	this.inst_txt.setTransform(0,-344.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrBtIAbgqQAnAZAmAAQAWABAOgJQANgHAAgPQABgJgFgGQgEgGgLgGIghgPIgKgDQgbgLgQgJQgQgJgKgPQgKgPAAgYQAAgZAPgRQAPgRAXgIQAXgIAZAAQAYAAAZAIQAYAHAXAPIgbApQgUgMgQgFQgPgGgSAAQgTABgLAGQgKAHAAALQAAAHAFAHQAEAFAKAGQAMAFATAIIAJADQAbAKARAJQAQAIAMAQQALAQAAAaQAAAcgPASQgOAUgYAJQgZAJgeAAQg/AAgsghg");
	this.shape.setTransform(131.9,-412.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA4CIIhUh+IgSgdIgQgcIAAC3Ig6AAIAAkPIBBAAIBcCKIAHAMIAKARIAJAPIAAi2IA6AAIAAEPg");
	this.shape_1.setTransform(105.25,-412.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhKB8QgfgSgPghQgQgfAAgqQAAgvATggQATgfAfgPQAggQAkAAQAtAAAeASQAeASAQAgQAPAhAAApQAAAvgTAgQgSAfggAQQgfAPgmAAQgrAAgegSgAg3hEQgUAYABAsQAAArASAZQATAZAkAAQAZAAARgLQASgLAIgVQAJgVAAgcQAAgrgTgaQgTgZglAAQgkAAgUAZg");
	this.shape_2.setTransform(74.95,-412.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdCIIAAkPIA7AAIAAEPg");
	this.shape_3.setTransform(53.7,-412.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcCIIAAjdIhXAAIAAgyIDnAAIAAAyIhVAAIAADdg");
	this.shape_4.setTransform(35.625,-412.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhPBoQgfgmAAhAQAAgyASghQARggAdgOQAegOAjAAQAaAAAWAGQAUAGAWANIgWAsQgegTgjAAQhGAAAABbQAAAsAUAXQAUAYAjAAQASAAAOgFQAOgEAPgJIAXAqQgXANgVAHQgVAHgZAAQhDAAghgmg");
	this.shape_5.setTransform(11.85,-412.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABHCIIgVhBIhkAAIgWBBIg+AAIAAgDIBikMIBJAAIBiEMIAAADgAgiAXIBEAAIgihng");
	this.shape_6.setTransform(-14.85,-412.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAqCIIhChjIgXAAIAABjIg8AAIAAkPIBcAAQAjAAAYALQAYALAMATQALAUABAYQAAAdgPAUQgOAUgcAKIBJBoIAAADgAgvgHIAZAAQAZAAAOgKQANgJAAgXQAAgTgMgKQgNgKgUAAIggAAg");
	this.shape_7.setTransform(-40.3,-412.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcCIIAAjdIhXAAIAAgyIDnAAIAAAyIhVAAIAADdg");
	this.shape_8.setTransform(-66.175,-412.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhrBtIAbgqQAnAZAlAAQAXABAOgJQAOgHAAgPQAAgJgFgGQgEgGgMgGIgggPIgJgDQgbgLgRgJQgQgJgKgPQgJgPAAgYQgBgZAQgRQAOgRAXgIQAXgIAZAAQAYAAAZAIQAYAHAYAPIgcApQgUgMgPgFQgQgGgSAAQgTABgKAGQgLAHAAALQAAAHAEAHQAEAFAMAGQAKAFAUAIIAJADQAbAKAQAJQARAIALAQQAMAQAAAaQAAAcgOASQgPAUgYAJQgZAJgeAAQg/AAgsghg");
	this.shape_9.setTransform(-90.45,-412.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA4CIIhUh+IgTgdIgPgcIAAC3Ig6AAIAAkPIBAAAIBcCKIAIAMIAKARIAJAPIAAi2IA6AAIAAEPg");
	this.shape_10.setTransform(-117.1,-412.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdCIIAAkPIA7AAIAAEPg");
	this.shape_11.setTransform(-138.15,-412.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.inst_txt},{t:this.startBtn}]}).wait(1));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6F2FF").s().p("EgurBOIQhtAAhNhNQhMhMAAhtMAAAiUDQAAhtBMhMQBNhNBtAAMBdXAAAQBtAABMBNQBNBMAABtMAAACUDQAABthNBMQhMBNhtAAg");
	this.shape_12.setTransform(0.0219,0,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionPanel, new cjs.Rectangle(-325,-500,650,1000), null);


(lib.actAlertWinPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// startBtn
	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(0,272.85);
	this.startBtn.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.startBtn).wait(1));

	// playAgainBtn
	this.playAgainBtn = new lib.playAgainBtn();
	this.playAgainBtn.name = "playAgainBtn";
	this.playAgainBtn.setTransform(0,272.85);

	this.timeline.addTween(cjs.Tween.get(this.playAgainBtn).wait(1));

	// Layer_1
	this.msg_txt = new cjs.Text("msg", "bold 35px 'Dubai'");
	this.msg_txt.name = "msg_txt";
	this.msg_txt.textAlign = "center";
	this.msg_txt.lineHeight = 61;
	this.msg_txt.lineWidth = 560;
	this.msg_txt.parent = this;
	this.msg_txt.setTransform(4.35,-217.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcCIIAAjdIhXAAIAAgyIDnAAIAAAyIhVAAIAADdg");
	this.shape.setTransform(49.175,-261);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AArCIIhEhjIgWAAIAABjIg8AAIAAkPIBbAAQAkAAAYALQAYALAMATQAMAUgBAYQAAAcgOAVQgOAUgcAKIBJBnIAAAEgAgvgHIAZAAQAZAAAOgKQANgJAAgXQAAgTgMgJQgMgKgVAAIggAAg");
	this.shape_1.setTransform(25.6,-261);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbCIIAAkPIC1AAIAAAwIh5AAIAAA+IBpAAIgHAvIhiAAIAABBIB7AAIAAAxg");
	this.shape_2.setTransform(0.8,-261);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhbCIIAAkPIA8AAIAADcIB7AAIAAAzg");
	this.shape_3.setTransform(-21.125,-261);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABICIIgWhBIhkAAIgVBBIg/AAIAAgEIBikLIBJAAIBiELIAAAEgAgiAXIBEAAIgihng");
	this.shape_4.setTransform(-47.3,-261);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgsYAz8QiUAAhphpQhqhpAAiVMAAAhcpQAAiVBqhpQBphpCUAAMBYxAAAQCVAABpBpQBoBpAACVMAAABcpQAACVhoBpQhpBpiVAAg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.msg_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.actAlertWinPanel, new cjs.Rectangle(-319.9,-332.3,639.9,664.7), null);


(lib.levelPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22197D").s().p("ANYEuIAAiSQBEAnAuAAQAaAAAQgOQAPgPAAgZQAAgTgMgQQgMgQgfgYQhKg4gggvQgigxAAg8QAAhRAzgzQA0gzBRAAQA8AAA7AaIAACMQhAgjgnAAQgaAAgPAOQgQAMAAAXQAAAnBHAxQAqAdAsA0QArA1AABFQAABRg5A2Qg4A1hYAAQg7AAg7gcgAH6E5IAApxICOAAIAAHgIBwAAIAACRgABpE5IAApxIEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFgAkiE5Ii/pxICUAAIBOEVQAWBRAIA6IABAAQAIgzAIghIBWlMICXAAIi7JxgAs4E5IAApxIEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFgAyWE5IAApxICOAAIAAHgIBwAAIAACRg");
	this.shape.setTransform(383.625,139.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#56D8FF").ss(6,1,1).p("ANYEuIAAiSQBEAnAuAAQAaAAAQgOQAPgPAAgZQAAgTgMgQQgMgQgfgYQhKg4gggvQgigxAAg8QAAhRAzgzQA0gzBRAAQA8AAA7AaIAACMQhAgjgnAAQgaAAgPAOQgQAMAAAXQAAAnBHAxQAqAdAsA0QArA1AABFQAABRg5A2Qg4A1hYAAQg7AAg7gcgAnhk4ICUAAIBOEVQAWBRAIA6IABAAQAIgzAIghIBWlMICXAAIi7JxIiEAAgAs4k4IEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFIkhAAgABpk4IEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFIkhAAgAH6k4ICOAAIAAHgIBwAAIAACRIj+AAgAyWk4ICOAAIAAHgIBwAAIAACRIj+AAg");
	this.shape_1.setTransform(383.625,139.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22197D").s().p("ANYEuIAAiSQBEAnAuAAQAaAAAQgOQAPgPAAgZQAAgTgMgQQgMgQgfgYQhKg4gggvQgigxAAg8QAAhRAzgzQA0gzBRAAQA8AAA7AaIAACMQhAgjgnAAQgaAAgPAOQgQAMAAAXQAAAnBHAxQAqAdAsA0QArA1AABFQAABRg5A2Qg4A1hYAAQg7AAg7gcgAH6E5IAApxICOAAIAAHgIBwAAIAACRgABpE5IAApxIEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFgAkiE5Ii/pxICUAAIBOEVQAWBRAIA6IABAAQAIgzAIghIBWlMICXAAIi7JxgAs4E5IAApxIEgAAIAACGIiSAAIAABzIB+AAIAACBIh+AAIAAByICTAAIAACFgAyWE5IAApxICOAAIAAHgIBwAAIAACRg");
	this.shape_2.setTransform(383.625,139.275);

	this.instance = new lib.level_btn();
	this.instance.setTransform(145.15,350.6,1,1,0,0,0,75,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance_1 = new lib.levelBoardBg();
	this.instance_1.setTransform(0,0,1.5267,1.5267);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.levelPanel, new cjs.Rectangle(0,0,735.9,1306.9), null);


(lib._balls = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer_3
	this.hideBall = new lib.hideBall();
	this.hideBall.name = "hideBall";
	this.hideBall.setTransform(-0.2,0);
	this.hideBall.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hideBall).wait(9));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai5C6QhNhNAAhtQAAhsBNhNQBNhNBsAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhsAAhNhNg");
	mask.setTransform(0.3013,0.3);

	// Layer_1
	this.instance = new lib.ballsImg();
	this.instance.setTransform(-26,-26,0.2098,0.2098);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-88},0).wait(1).to({x:-149},0).wait(1).to({x:-26,y:-88},0).wait(1).to({x:-88,y:-87},0).wait(1).to({x:-149},0).wait(1).to({x:-26,y:-149},0).wait(1).to({x:-87},0).wait(1).to({x:-149},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.5,53.3,53.1);


(lib._level5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.bker_5 = new lib._bker();
	this.bker_5.name = "bker_5";
	this.bker_5.setTransform(529.35,5.5,1.2595,1.2595,0,0,0,0.1,0.1);
	this.bker_5.visible = false;

	this.bker_4 = new lib._bker();
	this.bker_4.name = "bker_4";
	this.bker_4.setTransform(649.25,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_3 = new lib._bker();
	this.bker_3.name = "bker_3";
	this.bker_3.setTransform(329.55,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_2 = new lib._bker();
	this.bker_2.name = "bker_2";
	this.bker_2.setTransform(198.9,5.35,1.2595,1.2595);

	this.bker_1 = new lib._bker();
	this.bker_1.name = "bker_1";
	this.bker_1.setTransform(68.45,5.35,1.2595,1.2595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bker_1},{t:this.bker_2},{t:this.bker_3},{t:this.bker_4},{t:this.bker_5}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.557)").s().p("EgqZBSwMAAAilfMBUzAAAMAAAClfg");
	this.shape.setTransform(359.9829,201.9175,1.3264,0.3812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._level5, new cjs.Rectangle(0,0.1,720,403.7), null);


(lib._level4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.bker_7 = new lib._bker();
	this.bker_7.name = "bker_7";
	this.bker_7.setTransform(429.3,534.7,1.2595,1.2595);
	this.bker_7.visible = false;

	this.bker_6 = new lib._bker();
	this.bker_6.name = "bker_6";
	this.bker_6.setTransform(282.65,534.7,1.2595,1.2595);

	this.bker_5 = new lib._bker();
	this.bker_5.name = "bker_5";
	this.bker_5.setTransform(121.65,534.7,1.2595,1.2595);

	this.bker_4 = new lib._bker();
	this.bker_4.name = "bker_4";
	this.bker_4.setTransform(605.05,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_3 = new lib._bker();
	this.bker_3.name = "bker_3";
	this.bker_3.setTransform(443.1,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_2 = new lib._bker();
	this.bker_2.name = "bker_2";
	this.bker_2.setTransform(281,5.35,1.2595,1.2595);

	this.bker_1 = new lib._bker();
	this.bker_1.name = "bker_1";
	this.bker_1.setTransform(119.05,5.35,1.2595,1.2595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bker_1},{t:this.bker_2},{t:this.bker_3},{t:this.bker_4},{t:this.bker_5},{t:this.bker_6},{t:this.bker_7}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.51)").s().p("EgqZBSwMAAAilfMBUzAAAMAAAClfg");
	this.shape.setTransform(359.9829,466.4785,1.3264,0.8807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._level4, new cjs.Rectangle(0,0.1,720,932.8), null);


(lib._level3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.bker_6 = new lib._bker();
	this.bker_6.name = "bker_6";
	this.bker_6.setTransform(266.15,534.7,1.2595,1.2595);
	this.bker_6.visible = false;

	this.bker_5 = new lib._bker();
	this.bker_5.name = "bker_5";
	this.bker_5.setTransform(119.05,534.7,1.2595,1.2595);

	this.bker_4 = new lib._bker();
	this.bker_4.name = "bker_4";
	this.bker_4.setTransform(605.05,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_3 = new lib._bker();
	this.bker_3.name = "bker_3";
	this.bker_3.setTransform(443.1,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_2 = new lib._bker();
	this.bker_2.name = "bker_2";
	this.bker_2.setTransform(281,5.35,1.2595,1.2595);

	this.bker_1 = new lib._bker();
	this.bker_1.name = "bker_1";
	this.bker_1.setTransform(119.05,5.35,1.2595,1.2595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bker_1},{t:this.bker_2},{t:this.bker_3},{t:this.bker_4},{t:this.bker_5},{t:this.bker_6}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.529)").s().p("EgqZBSwMAAAilfMBUzAAAMAAAClfg");
	this.shape.setTransform(359.9829,466.4785,1.3264,0.8807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._level3, new cjs.Rectangle(0,0.1,720,932.8), null);


(lib._level2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.bker_5 = new lib._bker();
	this.bker_5.name = "bker_5";
	this.bker_5.setTransform(523.35,5.5,1.2595,1.2595,0,0,0,0.1,0.1);
	this.bker_5.visible = false;

	this.bker_4 = new lib._bker();
	this.bker_4.name = "bker_4";
	this.bker_4.setTransform(643.25,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_3 = new lib._bker();
	this.bker_3.name = "bker_3";
	this.bker_3.setTransform(349.95,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_2 = new lib._bker();
	this.bker_2.name = "bker_2";
	this.bker_2.setTransform(213.3,5.35,1.2595,1.2595);

	this.bker_1 = new lib._bker();
	this.bker_1.name = "bker_1";
	this.bker_1.setTransform(76.85,5.35,1.2595,1.2595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bker_1},{t:this.bker_2},{t:this.bker_3},{t:this.bker_4},{t:this.bker_5}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.557)").s().p("EgqZBSwMAAAilfMBUzAAAMAAAClfg");
	this.shape.setTransform(359.9829,201.9175,1.3264,0.3812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._level2, new cjs.Rectangle(0,0.1,720,403.7), null);


(lib._level1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.bker_4 = new lib._bker();
	this.bker_4.name = "bker_4";
	this.bker_4.setTransform(504.75,5.5,1.2595,1.2595,0,0,0,0.1,0.1);
	this.bker_4.visible = false;

	this.bker_3 = new lib._bker();
	this.bker_3.name = "bker_3";
	this.bker_3.setTransform(619.75,5.5,1.2595,1.2595,0,0,0,0.1,0.1);

	this.bker_2 = new lib._bker();
	this.bker_2.name = "bker_2";
	this.bker_2.setTransform(293.8,5.35,1.2595,1.2595);

	this.bker_1 = new lib._bker();
	this.bker_1.name = "bker_1";
	this.bker_1.setTransform(102.15,5.35,1.2595,1.2595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bker_1},{t:this.bker_2},{t:this.bker_3},{t:this.bker_4}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,48,71,0.439)").s().p("EgqZBSwMAAAilfMBUzAAAMAAAClfg");
	this.shape.setTransform(359.9829,201.9175,1.3264,0.3812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._level1, new cjs.Rectangle(0,0.1,720,403.7), null);


(lib.popUpPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instructionPanel = new lib.instructionPanel();
	this.instructionPanel.name = "instructionPanel";
	this.instructionPanel.setTransform(-773.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instructionPanel).wait(1));

	// Layer_2
	this.actAlertWinPanel = new lib.actAlertWinPanel();
	this.actAlertWinPanel.name = "actAlertWinPanel";
	this.actAlertWinPanel.setTransform(800,0);

	this.timeline.addTween(cjs.Tween.get(this.actAlertWinPanel).wait(1));

	// bg
	this.popupBg = new lib.popupBg();
	this.popupBg.name = "popupBg";
	this.popupBg.setTransform(0,0,1,1,0,0,0,360,640);

	this.timeline.addTween(cjs.Tween.get(this.popupBg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popUpPanel, new cjs.Rectangle(-1098.4,-640,2218.4,1280), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699FF").s().p("AwzFoIgOlkQgHiEgOjnQBZgRCIgBQF9AAAAD/QAABUgpA9QgiAzgzAWQAhAOAUAgQAVAhAAAlQAABbhhAqQhLAgh6AAQhpAAh4gRgAslCGIgDBzQBhAEAAhBQAAg2hNgBIgRABgAsZhpIgHCLQBpAFAAhIQAAglgdgTQgZgRgoAAIgEABgAk8E9IgXgwIgZBbIiIAAQAeh0A/kJQAmiyAaigIEaAAQANBJA5ENQAhCMA5DtIkAAAIgRg/QgLAFgrAZQgcARghAegAknCCQgNAjgRA+QAOAAAygGQAegEAjgLQgIgZgUg4QgMgegZg2IgiBZgAKSFoQgChugJj8QgHiBgQjkIFGAAIgbJUQAuAABagJQATgDAhgHIgRBHQgHAegFApgACWFoQgDhugJj8QgGiBgQjkIFFAAIgaJUQAtAABbgJQATgDAhgHIgSBHQgGAegFApg");
	this.shape.setTransform(54.4927,89.3159,0.9673,0.9673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AGdFFQhBgcgvgvQgvgwgahAQgbhBAAhIQAAhIAbhBQAahAAvgwQAvgvBBgcQBBgcBMAAQBLAABCAcQBAAcAvAvQAvAwAbBAQAbBBgBBIQABBIgbBBQgbBAgvAwQgvAvhAAcQhCAbhLAAQhMAAhBgbgAH8hvQgUAKgMARQgNAQgGAWQgHAWAAAZQAAAYAHAXQAGAWANAPQAMARAUAKQATAJAbAAQAaAAATgJQAUgKANgRQANgPAGgWQAHgXgBgYQABgZgHgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgbAAgTAJgAsaFFQhBgcgvgvQgvgwgbhAQgahBAAhIQAAhIAahBQAbhAAvgwQAvgvBBgcQBAgcBNAAQBLAABBAcQBBAcAvAvQAvAwAbBAQAaBBABBIQgBBIgaBBQgbBAgvAwQgvAvhBAcQhBAbhLAAQhNAAhAgbgAq7hvQgUAKgMARQgNAQgGAWQgGAWgBAZQABAYAGAXQAGAWANAPQAMARAUAKQATAJAbAAQAaAAATgJQAUgKANgRQANgPAGgWQAGgXAAgYQAAgZgGgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgbAAgTAJgA1FFFQg8gcgsgvQgugwgZhAQgYhBAAhIQAAhIAYhBQAZhAAugwQAsgvA8gcQA9gcBIAAQAuAAArAMQAqAMAkAWIAAD2IgXgWQgMgLgPgJQgOgJgUgGQgUgGgaAAQgeAAgXAKQgXAKgPAQQgPARgGAWQgIAWAAAZQAAAZAIAWQAGAWAPAQQAPARAXAKQAXAJAeAAQAxAAAigXQAhgYAOgjIAAEMQgkAWgqALQgrAMguAAQhIAAg9gbgAUXFQIhmjWIgPAAIAADWIjrAAIAAqfIFCAAQAmAAArANQAsANAkAcQAkAdAXAsQAYAsAAA/QAAAvgYAwQgXAuguAiIB9EGgASig4IAUAAQAZAAASgMQAUgLgBgYQABgcgUgLQgSgMgaAAIgTAAgAkAFQIAAqfID1AAIAAHcICxAAIAADDg");
	this.shape_1.setTransform(-7.1,8.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFF33").s().p("AmoFFQhBgcgvgvQgvgwgahAQgbhBAAhIQAAhIAbhBQAahAAvgwQAvgvBBgcQBAgcBMAAQBMAABCAcQBAAcAvAvQAuAwAbBAQAbBBgBBIQABBIgbBBQgbBAguAwQgvAvhAAcQhCAbhMAAQhMAAhAgbgAlJhvQgUAKgMARQgNAQgGAWQgHAWABAZQgBAYAHAXQAGAWANAPQAMARAUAKQATAJAaAAQAaAAAUgJQAUgKANgRQANgPAGgWQAHgXAAgYQAAgZgHgWQgGgWgNgQQgNgRgUgKQgUgJgaAAQgaAAgTAJgAv0FeQgagCgcgIQgdgHgcgOQgdgNgXgYIAAjaQAMAMATAQQAVAQAYAOQAZAOAbAJQAcAKAdAAQAhAAALgJQAMgIAAgMQAAgPgTgJQgSgJgdgIIg9gVQgggMgcgXQgcgXgTgjQgTglAAg6QAAhCAagrQAagrAngaQAngaAtgKQAugLAoAAQAcAAAcACQAbADAdAHQAcAHAbAOQAdANAdAXIAADDQg1gmgtgMQgtgMgnAAIgLABQgIAAgIADQgHACgGAFQgGAEAAAIQAAANAPAHQANAIAXAFIAxAMQAcAHAcAMQAqASAbAqQAbAoAAA3QAABBgYAxQgXAwgnAfQgoAgg0AQQg1AQg5AAQgVAAgagCgANPFQIAAncIhhAAIAAjDIG2AAIAADDIhgAAIAAHcgAHRFQIhmjWIgPAAIAADWIjrAAIAAqfIFCAAQAmAAArANQAsANAkAcQAlAdAWAsQAYAsAAA/QAAAvgYAwQgXAuguAiIB9EGgAFcg4IAVAAQAXAAATgMQAUgLgBgYQABgcgUgLQgSgMgaAAIgTAAg");
	this.shape_2.setTransform(-7.0747,-80.9118,1.2778,1.2778);

	this.instance = new lib.beaker();
	this.instance.setTransform(-154.1,53.4,0.2651,0.237);

	this.instance_1 = new lib.beaker();
	this.instance_1.setTransform(-121.1,53.4,0.2651,0.237);

	this.instance_2 = new lib.beaker();
	this.instance_2.setTransform(-89.1,53.4,0.2651,0.237);

	this.instance_3 = new lib._balls("single",0);
	this.instance_3.setTransform(-76.05,65.3,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_4 = new lib._balls("single",1);
	this.instance_4.setTransform(-76.05,82.2,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_5 = new lib._balls("single",2);
	this.instance_5.setTransform(-76.05,99.1,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_6 = new lib._balls("single",4);
	this.instance_6.setTransform(-76.05,115.95,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_7 = new lib._balls("single",3);
	this.instance_7.setTransform(-109.05,65.3,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_8 = new lib._balls("single",3);
	this.instance_8.setTransform(-109.05,82.2,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_9 = new lib._balls("single",3);
	this.instance_9.setTransform(-109.05,99.1,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_10 = new lib._balls("single",3);
	this.instance_10.setTransform(-109.05,115.95,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_11 = new lib._balls("single",0);
	this.instance_11.setTransform(-142.05,65.3,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_12 = new lib._balls("single",1);
	this.instance_12.setTransform(-142.05,82.2,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_13 = new lib._balls("single",2);
	this.instance_13.setTransform(-142.05,99.1,0.3072,0.3072,0,0,0,0.4,0.1);

	this.instance_14 = new lib._balls("single",4);
	this.instance_14.setTransform(-142.05,115.95,0.3072,0.3072,0,0,0,0.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC6600").ss(8,1,1).p("AveCbQAhAAALgJQAMgIAAgMQAAgPgTgJQgTgJgcgIQgcgJghgMQghgMgcgXQgcgXgSgjQgTglAAg6QAAhCAagrQAagrAngaQAngaAtgKQAugLAoAAQAcAAAcACQAbADAdAHQAbAHAcAOQAdANAcAXIAADDQg0gmgtgMQgtgMgnAAQgEAAgHABQgIAAgIADQgHACgGAFQgGAEAAAIQAAANAOAHQAOAIAWAFQAXAGAbAGQAcAHAcAMQAqASAbAqQAbAoAAA3QAABBgYAxQgXAwgoAfQgnAgg0AQQg1AQg5AAQgVAAgagCQgagCgdgIQgcgHgcgOQgdgNgXgYIAAjaQAMAMATAQQAUAQAZAOQAYAOAcAJQAcAKAdAAgAp8ABQAAhIAahBQAbhAAvgwQAvgvBBgcQBAgcBMAAQBMAABBAcQBBAcAvAvQAuAwAbBAQAaBBAABIQAABIgaBBQgbBAguAwQgvAvhBAcQhBAbhMAAQhMAAhAgbQhBgcgvgvQgvgwgbhAQgahBAAhIgAmDABQAAAYAHAXQAGAWANAPQAMARATAKQAUAJAaAAQAaAAAUgJQAUgKANgRQAMgPAHgWQAGgXAAgYQAAgZgGgWQgHgWgMgQQgNgRgUgKQgUgJgaAAQgaAAgUAJQgTAKgMARQgNAQgGAWQgHAWAAAZgAFcFQIjrAAIAAqfIFBAAQAnAAArANQArANAkAcQAmAdAWAsQAYAsAAA/QAAAvgYAwQgYAuguAiIB+EGIj2AAIhmjWIgPAAgALuiMIAAjDIG2AAIAADDIhgAAIAAHcIj2AAIAAncgAFwiaIgUAAIAABiIAUAAQAZAAASgMQATgLAAgYQAAgcgTgLQgSgMgZAAg");
	this.shape_3.setTransform(-7.0747,-80.9118,1.2778,1.2778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFF33").s().p("AmoFFQhBgcgvgvQgvgwgahAQgbhBAAhIQAAhIAbhBQAahAAvgwQAvgvBBgcQBAgcBMAAQBMAABCAcQBAAcAvAvQAuAwAbBAQAbBBgBBIQABBIgbBBQgbBAguAwQgvAvhAAcQhCAbhMAAQhMAAhAgbgAlJhvQgUAKgMARQgNAQgGAWQgHAWABAZQgBAYAHAXQAGAWANAPQAMARAUAKQATAJAaAAQAaAAAUgJQAUgKANgRQANgPAGgWQAHgXAAgYQAAgZgHgWQgGgWgNgQQgNgRgUgKQgUgJgaAAQgaAAgTAJgAv0FeQgagCgcgIQgdgHgcgOQgdgNgXgYIAAjaQAMAMATAQQAVAQAYAOQAZAOAbAJQAcAKAdAAQAhAAALgJQAMgIAAgMQAAgPgTgJQgSgJgdgIIg9gVQgggMgcgXQgcgXgTgjQgTglAAg6QAAhCAagrQAagrAngaQAngaAtgKQAugLAoAAQAcAAAcACQAbADAdAHQAcAHAbAOQAdANAdAXIAADDQg1gmgtgMQgtgMgnAAIgLABQgIAAgIADQgHACgGAFQgGAEAAAIQAAANAPAHQANAIAXAFIAxAMQAcAHAcAMQAqASAbAqQAbAoAAA3QAABBgYAxQgXAwgnAfQgoAgg0AQQg1AQg5AAQgVAAgagCgANPFQIAAncIhhAAIAAjDIG2AAIAADDIhgAAIAAHcgAHRFQIhmjWIgPAAIAADWIjrAAIAAqfIFCAAQAmAAArANQAsANAkAcQAlAdAWAsQAYAsAAA/QAAAvgYAwQgXAuguAiIB9EGgAFcg4IAVAAQAXAAATgMQAUgLgBgYQABgcgUgLQgSgMgaAAIgTAAg");
	this.shape_4.setTransform(-7.0747,-80.9118,1.2778,1.2778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663399").ss(8,1,1).p("An4h6QAABUgpA9QgiA0gzAVQAhAOAUAhQAVAgAAAkQAABchhAqQhLAhh6AAQhpAAh4gSQgEhtgKj3QgHiEgOjnQBZgSCIAAQF9AAAAD/gAq3giQAAgkgdgTQgagSgrACIgHCMQBpAEAAhJgABjFoIkAAAIgRg+QgLAEgrAYQgcASghAeIgbg5QgIgRgPgeIgZBaIiIAAQAeh0A/kJQAmiyAaigIEaAAQANBKA5EMQAhCNA5DsgArHC8QAAg2hNAAQgIAAgJABIgDBzQBhAEAAhCgAJbDaQgFASgNA1QgGAegFApImoAAQgDhugJj8QgGiBgQjkIFFAAIgaJUQAtAABbgJQATgDAhgHgARXDaQgFASgMA1QgHAegFApImoAAQgChugJj8QgHiBgQjkIFGAAIgbJUQAuAABagJQATgDAhgHgAjEDOQgIgZgUg4QgMgegZg3QgLAcgXA+QgNAjgRA9QAOAAAygFQAegFAjgKg");
	this.shape_5.setTransform(54.4927,89.3159,0.9673,0.9673);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699FF").s().p("AwzFoIgOlkQgHiEgOjnQBZgRCIgBQF9AAAAD/QAABUgpA9QgiAzgzAWQAhAOAUAgQAVAhAAAlQAABbhhAqQhLAgh6AAQhpAAh4gRgAslCGIgDBzQBhAEAAhBQAAg2hNgBIgRABgAsZhpIgHCLQBpAFAAhIQAAglgdgTQgZgRgoAAIgEABgAk8E9IgXgwIgZBbIiIAAQAeh0A/kJQAmiyAaigIEaAAQANBJA5ENQAhCMA5DtIkAAAIgRg/QgLAFgrAZQgcARghAegAknCCQgNAjgRA+QAOAAAygGQAegEAjgLQgIgZgUg4QgMgegZg2IgiBZgAKSFoQgChugJj8QgHiBgQjkIFGAAIgbJUQAuAABagJQATgDAhgHIgRBHQgHAegFApgACWFoQgDhugJj8QgGiBgQjkIFFAAIgaJUQAtAABbgJQATgDAhgHIgSBHQgGAegFApg");
	this.shape_6.setTransform(54.4927,89.3159,0.9673,0.9673);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#660000").ss(8,1,1).p("AwZEzQgkAWgqALQgrAMguAAQhIAAg9gbQg8gcgtgvQgtgwgZhAQgYhBAAhIQAAhIAYhBQAZhAAtgwQAtgvA8gcQA9gcBIAAQAuAAArAMQAqAMAkAWIAAD2QgLgLgLgLQgNgLgPgJQgOgJgUgGQgTgGgbAAQgeAAgXAKQgWAKgPAQQgPARgHAWQgIAWAAAZQAAAZAIAWQAHAWAPAQQAPARAWAKQAXAJAeAAQAyAAAhgXQAigYANgjgAvuABQAAhIAbhBQAahAAvgwQAvgvBBgcQBBgcBMAAQBLAABCAcQBAAcAvAvQAvAwAbBAQAbBBAABIQAABIgbBBQgbBAgvAwQgvAvhAAcQhCAbhLAAQhMAAhBgbQhBgcgvgvQgvgwgahAQgbhBAAhIgAr1ABQAAAYAHAXQAGAWANAPQAMARAUAKQAUAJAaAAQAaAAATgJQAUgKANgRQANgPAGgWQAHgXAAgYQAAgZgHgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgaAAgUAJQgUAKgMARQgNAQgGAWQgHAWAAAZgASiFQIjrAAIAAqfIFCAAQAmAAArANQAsANAkAcQAlAdAXAsQAYAsAAA/QAAAvgYAwQgYAuguAiIB9EGIj1AAIhnjWIgPAAgADJABQAAhIAbhBQAahAAvgwQAvgvBBgcQBBgcBMAAQBLAABCAcQBAAcAvAvQAvAwAbBAQAbBBAABIQAABIgbBBQgbBAgvAwQgvAvhAAcQhCAbhLAAQhMAAhBgbQhBgcgvgvQgvgwgahAQgbhBAAhIgAHDABQAAAYAGAXQAGAWANAPQAMARAUAKQAUAJAaAAQAaAAATgJQAUgKANgRQANgPAGgWQAHgXAAgYQAAgZgHgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgaAAgUAJQgUAKgMARQgNAQgGAWQgGAWAAAZgAS2iaIgUAAIAABiIAVAAQAYAAATgMQATgLAAgYQAAgcgTgLQgTgMgZAAgAkAlPID2AAIAAHcICwAAIAADDImmAAg");
	this.shape_7.setTransform(-7.1,8.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AGdFFQhBgcgvgvQgvgwgahAQgbhBAAhIQAAhIAbhBQAahAAvgwQAvgvBBgcQBBgcBMAAQBLAABCAcQBAAcAvAvQAvAwAbBAQAbBBgBBIQABBIgbBBQgbBAgvAwQgvAvhAAcQhCAbhLAAQhMAAhBgbgAH8hvQgUAKgMARQgNAQgGAWQgHAWAAAZQAAAYAHAXQAGAWANAPQAMARAUAKQATAJAbAAQAaAAATgJQAUgKANgRQANgPAGgWQAHgXgBgYQABgZgHgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgbAAgTAJgAsaFFQhBgcgvgvQgvgwgbhAQgahBAAhIQAAhIAahBQAbhAAvgwQAvgvBBgcQBAgcBNAAQBLAABBAcQBBAcAvAvQAvAwAbBAQAaBBABBIQgBBIgaBBQgbBAgvAwQgvAvhBAcQhBAbhLAAQhNAAhAgbgAq7hvQgUAKgMARQgNAQgGAWQgGAWgBAZQABAYAGAXQAGAWANAPQAMARAUAKQATAJAbAAQAaAAATgJQAUgKANgRQANgPAGgWQAGgXAAgYQAAgZgGgWQgGgWgNgQQgNgRgUgKQgTgJgaAAQgbAAgTAJgA1FFFQg8gcgsgvQgugwgZhAQgYhBAAhIQAAhIAYhBQAZhAAugwQAsgvA8gcQA9gcBIAAQAuAAArAMQAqAMAkAWIAAD2IgXgWQgMgLgPgJQgOgJgUgGQgUgGgaAAQgeAAgXAKQgXAKgPAQQgPARgGAWQgIAWAAAZQAAAZAIAWQAGAWAPAQQAPARAXAKQAXAJAeAAQAxAAAigXQAhgYAOgjIAAEMQgkAWgqALQgrAMguAAQhIAAg9gbgAUXFQIhmjWIgPAAIAADWIjrAAIAAqfIFCAAQAmAAArANQAsANAkAcQAkAdAXAsQAYAsAAA/QAAAvgYAwQgXAuguAiIB9EGgASig4IAUAAQAZAAASgMQAUgLgBgYQABgcgUgLQgSgMgaAAIgTAAgAkAFQIAAqfID1AAIAAHcICxAAIAADDg");
	this.shape_8.setTransform(-7.1,8.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-166,-129.8,332,259.70000000000005), null);


(lib.splashPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {nullFrame:80};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1).call(this.frame_80).wait(1));

	// Layer_2
	this.instance = new lib.logo();
	this.instance.setTransform(348.95,647.6,0.1075,0.1075,0,0,0,-10.7,7.9);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11,regY:7.6,scaleX:1.2645,scaleY:1.2645,x:349,alpha:1},79,cjs.Ease.circOut).to({_off:true},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343047").s().p("EgmKBKEMAAAiUHMBMVAAAMAAACUHg");
	this.shape.setTransform(359.9833,639.9945,1.4736,1.3503);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},80).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,1280);


// stage content:
(lib.colorShort = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		////////////////SOUND ATTACHED FROM FOLDER////////////////////////
		 
		 var clickSnd = new Howl({src: ['datas/assets/audios/click.wav'], html5: false});
		/* var slideSnd = new Howl({src: ['datas/assets/audios/slide.wav'], html5: false});
		 var popupSnd = new Howl({src: ['datas/assets/audios/popup.wav'], html5: false});
		 var moveUpSnd = new Howl({src: ['datas/assets/audios/moveUp.mp3'], html5: false});
		 var chimeSnd = new Howl({src: ['datas/assets/audios/chimeSnd.mp3'], html5: false});
		 var ansSnd = new Howl({src: ['datas/assets/audios/ansPoint.mp3'], html5: false});*/
		 
		 var bkerCompSnd = new Howl({src: ['datas/assets/audios/bkerDone.mp3'], html5: false});
		 var ballUpSnd = new Howl({src: ['datas/assets/audios/ballUp.mp3'], html5: false});
		 var ballDropSnd = new Howl({src: ['datas/assets/audios/ballDrop.mp3'], html5: false});
		this.stop();
		var app=this;
		createjs.Touch.enable(app);
		stage.enableDOMEvents(true);
		stage.enableMouseOver(20);
		
		
		
		//268<< base position in beaker (63 add margin)
		var currentLevel=1;
		var LEVEL_DATA=new Array(//0>beaker num, 1 and 2>ball color variation
			//-----Round 1-----------
			[
				[2,1,false],//index 0=full bker, index1=empty bker, index3=ball hide
				[1,2,2,1],
				[2,1,1,2]
			],
			[
				[3,1,false],//index 0=full bker, index1=empty bker, index3=ball hide
				[1,2,2,1],
				[2,3,2,3],
				[3,1,1,3]
			],
			[
				[4,1,false],//index 0=full bker, index1=empty bker, index3=ball hide
				[1,3,3,1],
				[3,1,1,3],
				[4,2,4,2],
				[4,2,2,4]
			],
			[
				[4,2,false],//index 0=full bker, index1=empty bker, index3=ball hide
				[5,2,4,5],
				[1,4,1,2],
				[4,2,1,5],
				[5,4,2,1]
			],
			[
				[3,1,true],//index 0=full bker, index1=empty bker, index3=ball hide
				[1,2,2,1],
				[2,3,2,3],
				[3,1,1,3]
			]
			//-----Round 2-----------
			
			
		);
		
		var StoreBkerData=new Array([],[],[],[],[],[],[],[],[],[],[],[],[],[]);
		
		var currentBallArr=new Array();
		var Bker1stSelected=null;
		var Bker2ndSelected=null;
		var countSelect=0;
		
		var isBallHide=false;
		var maxFullBkers=0;
		var maxEmptyBkers=0;
		var countCompBker=0;
		var maxBalls=0;
		var crntLevelPanel;
		var maxScoreAdd=100;
		var totalScore=0;
		var totalLevels=0;
		
		var popUpTrigerFun;
		
		//app.popUpPanel.visible=false;
		
		
		//var el = document.getElementById('canvas');
		//var aspectRatio = el.height / el.width;
		
		//resizeCanv = function resize (){
		//	var style = getComputedStyle(el);
		//	var w = parseInt(style.width);
		//	el.style.height = (w * this._aspectRatio) + 'px';
		//};
		
		//// TODO: add some logic to only apply to IE
		//window.addEventListener('resize', resizeCanv);
		
		
		//canvas = document.getElementById("canvas");
		
		////document.body.appendChild(canvas);
		
		//var myConfetti = confetti.create(canvas);
		
		//myConfetti({
		//	particleCount: 100,
		//    spread: 160,
		//    origin: { y: 0.2 },
		//});
		
		
		
		function Launcher(){
			//crntLevelPanel=app.level_1;
			//levelDataUpdate();	
			
			setTimeout(() => {
				app.splashPanel.gotoAndStop("nullFrame");
				app.splashPanel.visible=false;
				instructionWin("Game instructions will be here.");
				//levelDataUpdate();		
			}, "3510");	
		}
		
		Launcher();
		
		//--------------------------------
		var shuffelNumsArr=[];
		function getShuffleNumListArr(array,maxLenth){
			for(var a=1; a<=maxLenth; a++){
				array.push(a);
			}
			for (var i = array.length - 1; i > 0; i--) {
				var rand = Math.floor(Math.random() * (i + 1));
				[array[i], array[rand]] = [array[rand], array[i]]
			}
			return array;
		}
		//===========================================================
		//--UPDATE LEVEL DATA
		//===========================================================
		
		function levelDataUpdate(){
			maxFullBkers=LEVEL_DATA[currentLevel-1][0][0];
			maxEmptyBkers=LEVEL_DATA[currentLevel-1][0][1];
			isBallHide=LEVEL_DATA[currentLevel-1][0][2];
			maxBalls=LEVEL_DATA[currentLevel-1][1].length;	
			totalLevels=LEVEL_DATA.length;
			app.headerPanel.level_txt.text="Level: "+currentLevel;
			app.headerPanel.score_txt.text="Score: "+totalScore;
			
			crntLevelPanel=new lib["_level"+currentLevel]();
			crntLevelPanel.x=0;	
			//crntLevelPanel.y=(stage.canvas.height/2)-(crntLevelPanel.nominalBounds.height/2);
			crntLevelPanel.y=(1280/2)-(crntLevelPanel.nominalBounds.height/2)+50;
			//console.log(window.innerHeight+">>>> "+crntLevelPanel.nominalBounds.height);
			app.reset_btn.mouseEnabled=true;
			app.reset_btn.alpha=1;
			stage.addChild(crntLevelPanel);	
			addBeakerBalls();
		}
		
		//===========================================================
		//--BEAKER UPDATE WITH BALLS
		//===========================================================
		
		function addBeakerBalls(){
			var xp=0;
			var yp=345;	
			shuffelNumsArr=[];
			
			for(var a=1; a<=maxFullBkers; a++){		
				shuffelNumsArr=getShuffleNumListArr([],4)		
				
				for(var i=1; i<=maxBalls; i++){
					var newBall=new lib._balls();
					newBall.name="ball_"+LEVEL_DATA[currentLevel-1][a][shuffelNumsArr[i-1]-1];
					newBall.x=crntLevelPanel["bker_"+a].x;			
					
					newBall.y=yp;
					newBall.scaleX=1.464;
					newBall.scaleY=1.464;
					yp-=78;
					newBall.id=i;
					newBall.gotoAndStop(LEVEL_DATA[currentLevel-1][a][shuffelNumsArr[i-1]-1]-1);
					StoreBkerData[a-1].push(newBall);	
					newBall.mouseEnabled=false;
					if(i<maxBalls && isBallHide){//ball hide or not
						newBall.hideBall.alpha=1
					}
					
					crntLevelPanel.addChild(newBall);			
				}	
				
				yp=345;
				
			}	
			
			for(var c=1; c<=(maxEmptyBkers+maxFullBkers)+1; c++){//event for all beakers
				
				crntLevelPanel["bker_"+(c)].id=(c);
				crntLevelPanel["bker_"+(c)].addEventListener("click",BEAKER_EVENT.bind(app));
				
				if(c<((maxEmptyBkers+maxFullBkers)+1)){
					var upBker=new lib._bker();
					upBker.scaleX=crntLevelPanel["bker_"+c].scaleX;
					upBker.scaleY=upBker.scaleX;
					upBker.x=crntLevelPanel["bker_"+c].x;
					upBker.y=crntLevelPanel["bker_"+c].y;
					crntLevelPanel.addChild(upBker);	
				}
			}
					
				//	crntLevelPanel.setChildIndex(crntLevelPanel["bker_"+r], crntLevelPanel.numChildren-1);
		
		}
		
		//===========================================================
		//--ADD NEW BEAKER
		//===========================================================
		
		
		app.addBker_btn.addEventListener("click",SHOW_NEW_BKER.bind(app));
		function SHOW_NEW_BKER(evnt){
			evnt.currentTarget.mouseEnabled=false;	
			evnt.currentTarget.alpha=0.4;
			app.reset_btn.mouseEnabled=false;
			app.reset_btn.alpha=0.4;
			crntLevelPanel["bker_"+(maxEmptyBkers+maxFullBkers+1)].visible=true;
		}
		
		//===========================================================
		//--BEAKER EVENT
		//===========================================================
		
		function BEAKER_EVENT(evnt){
			console.log()
			
			//------check bker empty or not-----------
			if(StoreBkerData[evnt.currentTarget.id-1].length==0 && countSelect!=0){
				countSelect++;
			}else if(StoreBkerData[evnt.currentTarget.id-1].length>0){
				countSelect++;
			}
			
			//----store first slected bker and 2nd selected bker----
			if(countSelect==1){
				ballUpSnd.play();
				Bker1stSelected=evnt.currentTarget;		
			}else{
				Bker2ndSelected=evnt.currentTarget;
			}
			
			if(StoreBkerData[evnt.currentTarget.id-1].length>0 && countSelect==1){
				var bkerBallsLength = StoreBkerData[evnt.currentTarget.id-1].length-1
				var crntBall=StoreBkerData[evnt.currentTarget.id-1][bkerBallsLength];	
				
				currentBallArr.push([crntBall,crntBall.y]);
				//console.log(">>"+crntBall)
				if(currentBallArr.length==1){			
					//var ballYTween = createjs.Tween.get(crntBall, {loop: false}).to({y: -52}, 80, createjs.Ease.sineOut);
					gsap.to(crntBall, {
						duration:0.1,
						ease: "sine.out",
						y: Bker1stSelected.y-50
					});
		
				}
			}
			
			if(countSelect==2){
				BeakerEnabled(false);
				CheckBkerToAddBall();
			}
		}
		
		
		
		
		
		//===========================================================
		//--CHECK BEAKER ADD TO BALL
		//===========================================================
		
		function CheckBkerToAddBall(){	
			
				var ballYTween;
				var getCrntBkerBallName="";
				var bkerId1=Bker1stSelected.name.split("_")[1]
				var bkerId2=Bker2ndSelected.name.split("_")[1]
				
				if(StoreBkerData[bkerId2-1].length>0){
					getCrntBkerBallName=StoreBkerData[bkerId2-1][StoreBkerData[bkerId2-1].length-1].name;
					//console.log(">>name "+getCrntBkerBallName+"=="+currentBallArr[0][0].name)
				}
				
				if(currentBallArr.length>0 && StoreBkerData[bkerId2-1].length<=3){
					
					if(currentBallArr[0][0].name==getCrntBkerBallName || StoreBkerData[bkerId2-1].length==0){
						var getLastball=StoreBkerData[bkerId1-1].splice(StoreBkerData[bkerId1-1].length-1,1);//remove from last beker 
						
						var getY=(32+Bker2ndSelected.nominalBounds.height)-(StoreBkerData[bkerId2-1].length*78);
						
						BallMoveInBeaker(currentBallArr[0][0],Bker2ndSelected.x,getY);//ball drop in beaker
						
						StoreBkerData[bkerId2-1].push(currentBallArr[0][0]);
						
						
						if(StoreBkerData[bkerId2-1].length==4){//beaker ball paired
							CheckBeakerBallPaired(StoreBkerData[bkerId2-1]);
						}
						
					}else{
						/*ballYTween = createjs.Tween.get(currentBallArr[0][0], {loop: false}).to({y: currentBallArr[0][1]}, 140, createjs.Ease.bounceOut);
						createjs.Tween.removeTweens(ballYTween);*/
						ballDropSnd.play();
						gsap.to(currentBallArr[0][0], {
							duration:0.4,
							ease: "bounce.out",
							y: currentBallArr[0][1]
							});
						BeakerEnabled(true);
					}
					
					
				}else if(currentBallArr.length>0){
					//currentBallArr[0][0].y=currentBallArr[0][1];
					/*ballYTween = createjs.Tween.get(currentBallArr[0][0], {loop: false}).to({y: currentBallArr[0][1]}, 140, createjs.Ease.bounceOut);
					createjs.Tween.removeTweens(ballYTween);*/
					ballDropSnd.play();
					gsap.to(currentBallArr[0][0], {
							duration:0.4,
							ease: "bounce.out",
							y: currentBallArr[0][1]
							});
					BeakerEnabled(true);
				}
				
				countSelect=0;
				currentBallArr=[];	
		}
		
		//===========================================================
		//--BALL MOVE IN TO BEAKER
		//===========================================================
		
		function BallMoveInBeaker(getCrntBall, getX,getY){
			//var ballTween = createjs.Tween.get(getCrntBall, {loop: false}).to({x: getX}, 200, createjs.Ease.sineIn).call(ballXTwnComplete);
			gsap.to(getCrntBall, {
				duration:0.1,
				ease: "sine.out",
				x: getX,
				y: Bker2ndSelected.y-60,
				onComplete:ballXTwnComplete
			});
			function ballXTwnComplete(){
				//ballTween = createjs.Tween.get(getCrntBall, {loop: false}).to({y: getY}, 300, createjs.Ease.bounceOut);		
				ballDropSnd.play();
				gsap.to(getCrntBall, {
					duration:0.23,
					ease: "bounce.out",
					y: getY+getCrntBall.y+55
				});
				
				var bkerId1=Bker1stSelected.name.split("_")[1]
				var bkerId2=Bker2ndSelected.name.split("_")[1]
				//-----ball? hide------------
					if(isBallHide && StoreBkerData[bkerId1-1].length>0){
						var tempB=StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1].hideBall;
						gsap.to(tempB, {
							duration:0.23,
							ease: "sine.out",
							alpha: 0
						});
					}
				//----------------------------
				setTimeout(() => {
					//createjs.Tween.removeTweens(ballTween);
					
					if(bkerId1!=bkerId2 && StoreBkerData[bkerId2-1].length<4 && StoreBkerData[bkerId1-1].length>0 && StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1].name==getCrntBall.name){
						MoveIfSameBalls(getCrntBall,getX);
					}else{
						if(countCompBker!=maxFullBkers){
							BeakerEnabled(true);
						}
					}
				}, "300"); 
			}	
		}
		
		//===========================================================
		//--IF IN BEAKER HAVE SAME BALL THEN MOVE BALL
		//===========================================================
		
		function MoveIfSameBalls(getCrntBall,getX){
			var bkerId1=Bker1stSelected.name.split("_")[1]
			var bkerId2=Bker2ndSelected.name.split("_")[1]
			var getY=(32+Bker2ndSelected.nominalBounds.height)-(StoreBkerData[bkerId2-1].length*78);
			
			if(StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1].name==getCrntBall.name){
				//var ballYTween = createjs.Tween.get(StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1], {loop: false}).to({y: -51}, 100, createjs.Ease.sineIn);
				gsap.to(StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1], {
					duration:0.12,
					ease: "bounce.out",			
					y: Bker1stSelected.y-50
				});
				setTimeout(() => {
					
					BallMoveInBeaker(StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1], getX,getY);		
					StoreBkerData[bkerId2-1].push(StoreBkerData[bkerId1-1][StoreBkerData[bkerId1-1].length-1]);
					StoreBkerData[bkerId1-1].splice(StoreBkerData[bkerId1-1].length-1,1);//remove from last beker 
					if(StoreBkerData[bkerId2-1].length==4){//beaker ball paired
							CheckBeakerBallPaired(StoreBkerData[bkerId2-1]);
						}
				}, "110"); 
			}
		}
		
		//===========================================================
		//--CHECK BEAKER TO COMPLETE WITH SAME BALLS
		//===========================================================
		
		function CheckBeakerBallPaired(getBkerArr){
			var isPaired=true;
			for(var i=1; i<=getBkerArr.length; i++){
				if(isBallHide && getBkerArr[i-1].name!=getBkerArr[0].name && getBkerArr[i-1].hideBall.alpha==1){
					isPaired=false;
					break;
				}else if(isBallHide && getBkerArr[i-1].name==getBkerArr[0].name && getBkerArr[i-1].hideBall.alpha==1){
					isPaired=false;
					break;
				}else if(!isBallHide && getBkerArr[i-1].name!=getBkerArr[0].name){
					isPaired=false;
					break;
				}
			}
			
			if(isPaired){
				countCompBker++;
				setTimeout(() => {			
					if(countCompBker==maxFullBkers){
						setTimeout(() => {	
							BeakerEnabled(false);
							//level complete
							stage.removeChild(crntLevelPanel);
							
							if(currentLevel==totalLevels){//all level complete					
								popUpTrigerFun=ResetPlayAgain;
								actAlertWindow("Well done! You have completed all levels.");			
								
							}else{//got to next level
								popUpTrigerFun=PlayNextLevel;
								actAlertWindow("Well done! You have completed Level "+(currentLevel)+".\n\nClick to Start next level.",true);			
							}
						}, "1510"); 
					}
					scoreUpdate();
					ConfettiEffect();
				}, "310"); 
			}
		}
		
		
		
		app.reset_btn.addEventListener("click",CRENT_LEVEL_RESET.bind(app));
		function CRENT_LEVEL_RESET(evnt){
			CurrentGameReset();
		}
		//-------game reset-----------
		function CurrentGameReset(){
			stage.removeChild(crntLevelPanel);
			//currentLevel=1;
			countCompBker=0;
			//totalScore=0;
			StoreBkerData=[[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			levelDataUpdate();
		}
		
		//---play again game---------
		function ResetPlayAgain(){	
			currentLevel=1;
			countCompBker=0;
			totalScore=0;
			StoreBkerData=[[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			levelDataUpdate();
		}
		
		//---play next level---------
		function PlayNextLevel(){	
			currentLevel++;
			countCompBker=0;
			StoreBkerData=[[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			levelDataUpdate();
		}
		
		//===========================================================
		//--BEAKER ENABLED-DESABLED
		//===========================================================
		function BeakerEnabled(getBoo){
			for(var i=1; i<=(maxFullBkers+1); i++){
				crntLevelPanel["bker_"+i].mouseEnabled=getBoo;
			}
		}
		//===========================================================
		//--CONFETTI
		//===========================================================
		
		function ConfettiEffect(){
			/*confetti({
			  particleCount: 100,
			  spread: 70,
			  origin: { y: 0.6 }
			});*/
			bkerCompSnd.play();
			function randomInRange(min, max) {
			  return Math.random() * (max - min) + min;
			}
		
			confetti({
			  angle: randomInRange(55, 125),
			  spread: randomInRange(50, 70),
			  particleCount: randomInRange(50, 100),
			  origin: { y: 0.6 }
			});
		}
		
		//================================================================
		//----SCORE UPDATE
		//================================================================
		var countScore=0;
		function scoreUpdate(){
			var scoreInterval = window.setInterval(function(){
				countScore++;
				totalScore++;
				app.headerPanel.score_txt.text="Score: "+totalScore;
				if(countScore==maxScoreAdd){
					countScore=0;
					clearInterval(scoreInterval);
				}
			}, 10);
		}
		
		
		//================================================================
		//----POPUP CONTROLL
		//================================================================
		
		var alertTween;
		function actAlertWindow(getMsg="", isStartBtn=false){
			//popupSnd.play();
			if(isStartBtn){
				app.popUpPanel.actAlertWinPanel.playAgainBtn.visible=false;
				app.popUpPanel.actAlertWinPanel.startBtn.visible=true;		
			}else{
				app.popUpPanel.actAlertWinPanel.playAgainBtn.visible=true;
				app.popUpPanel.actAlertWinPanel.startBtn.visible=false;		
			}
			
			app.popUpPanel.visible=true;
			app.popUpPanel.actAlertWinPanel.x=800;
			app.popUpPanel.actAlertWinPanel.msg_txt.text=getMsg;
			alertTween = createjs.Tween.get(app.popUpPanel.actAlertWinPanel, {loop: false	}).to({	x: 0}, 400, createjs.Ease.backOut);
		}
		
		app.popUpPanel.popupBg.addEventListener("click",POPUP_BG.bind(app));	
		function POPUP_BG(evnt){};
		
		
		app.popUpPanel.actAlertWinPanel.playAgainBtn.addEventListener("click",ALERT_WIN_PLAYAGAIN.bind(app));
		app.popUpPanel.actAlertWinPanel.startBtn.addEventListener("click",ALERT_WIN_PLAYAGAIN.bind(app));
		function ALERT_WIN_PLAYAGAIN(evnt){	
			//slideSnd.play();
			if(popUpTrigerFun!=null){
				setTimeout(() => {	
					popUpTrigerFun();
				}, "310");		
			}		
		
			alertTween = createjs.Tween.get(app.popUpPanel.actAlertWinPanel, {loop: false	}).to({	x: 800}, 300, createjs.Ease.backOut).call(alertTweenComplete);
			function alertTweenComplete(){
				app.popUpPanel.visible=false;
			}
		}
		
		
		//-------instuction panel------------------
		
		function instructionWin(getMsg=""){		
			
			app.popUpPanel.visible=true;
			app.popUpPanel.instructionPanel.x=-800;
			app.popUpPanel.instructionPanel.inst_txt.text=getMsg;
			alertTween = createjs.Tween.get(app.popUpPanel.instructionPanel, {loop: false	}).to({	x: 0}, 400, createjs.Ease.backOut);
		}
		
		app.popUpPanel.instructionPanel.startBtn.addEventListener("click",INST_WIN_START.bind(app));
		function INST_WIN_START(evnt){			
			clickSnd.play();
			setTimeout(() => {		
				levelDataUpdate();		
			}, "110");
			
			alertTween = createjs.Tween.get(app.popUpPanel.instructionPanel, {loop: false	}).to({	x: 800}, 200, createjs.Ease.backOut).call(alertTweenComplete);
			function alertTweenComplete(){
				app.popUpPanel.visible=false;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.059)").s().p("APNE+QhMglgvhQQgwhQAAh4QAAioBehdQBeheCnAAQCsAABdBcQBcBcAACmQAAB3goBOQgpBNhMArQhNAqhyAAQh1AAhMglgAQeiUQgnAuAABoQAABoAnAtQAmAuBDAAQBEAAAmgtQAlgsAAhzQAAhhgngsQgngthDAAQhAAAgnAtgAIIFYIAAoLIiGILIieAAIiFoLIAAILIitAAIAAquIEWAAIBsGhIBrmhIEXAAIAAKugAsCFYIAAquII5AAIAACSIlkAAIAABuIFKAAIAACLIlKAAIAACHIFuAAIAACcgA3pFYIAAquIE7AAQBeAAA5AZQA5AZAmAwQAlAvARA/QARA/AABGQAABtgZA9QgZA8gsAqQgtAogzAOQhGATg5AAgA0VC8IA0AAQBDAAAcgPQAcgPAQgkQAQglAAhTQAAhsgkgoQgjgphTAAIg1AAg");
	this.shape.setTransform(361.7443,643.8039,2.5365,2.5365,-30.22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// splash
	this.splashPanel = new lib.splashPanel();
	this.splashPanel.name = "splashPanel";
	this.splashPanel.setTransform(360,640,1,1,0,0,0,360,640);

	this.timeline.addTween(cjs.Tween.get(this.splashPanel).wait(1));

	// popup
	this.popUpPanel = new lib.popUpPanel();
	this.popUpPanel.name = "popUpPanel";
	this.popUpPanel.setTransform(360.05,640,1,1,0,0,0,10.8,0);

	this.timeline.addTween(cjs.Tween.get(this.popUpPanel).wait(1));

	// levelPanel
	this.levelPanel = new lib.levelPanel();
	this.levelPanel.name = "levelPanel";
	this.levelPanel.setTransform(-8,-13);
	this.levelPanel.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.levelPanel).wait(1));

	// header
	this.addBker_btn = new lib.addBker_btn();
	this.addBker_btn.name = "addBker_btn";
	this.addBker_btn.setTransform(670.9,106.75);
	new cjs.ButtonHelper(this.addBker_btn, 0, 1, 1);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(56.35,111.35);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 1);

	this.headerPanel = new lib.headerPanel();
	this.headerPanel.name = "headerPanel";
	this.headerPanel.setTransform(359.85,33.6,1,1,0,0,0,388.8,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headerPanel},{t:this.reset_btn},{t:this.addBker_btn}]}).wait(1));

	// beakerHolder
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.388)").ss(2,1,1).p("AGvAAQAAAHh+AFQh/AFiyAAQiyAAh+gFQh/gFAAgHQAAgGB/gFQB+gFCyAAQCyAAB/AFQB+AFAAAGg");
	this.shape_1.setTransform(-690.3,495.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["rgba(255,255,255,0.608)","rgba(0,153,255,0.447)"],[0.38,1],-20.1,-48.9,0,-20.1,-48.9,60.2).ss(4,1,1).p("AFe3bMAAAApZQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRMAAAgpZ");
	this.shape_2.setTransform(-690.3,646);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)"],[0.553,1],33.1,225.3,33.1,80.1).s().p("AjoVnQhhhhAAiIMAAAgpFIKTAAMAAAApFQAACIhhBhQhhBhiIAAQiIAAhghhg");
	this.shape_3.setTransform(-690.2623,645.9,0.1212,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.388)").ss(2,1,1).p("AFK3HMAAAApFQAACJhgBhQhiBgiIAAQiHAAhhhgQhhhhAAiJMAAAgpF");
	this.shape_4.setTransform(-690.3,645.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.337)"],[0.69,0.867],-2.7,-49.8,0,-2.7,-49.8,58.2).s().p("AjoVnQhhhhAAiIMAAAgpFIKTAAMAAAApFQAACIhhBhQhhBhiIAAQiIAAhghhg");
	this.shape_5.setTransform(-690.3,645.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(0,204,255,0)","rgba(155,214,255,0.239)"],[0.616,1],1.4,-6.7,0,1.4,-6.7,29.3).s().p("Aj3V1QhmhmAAiRMAAAgpZIK7AAMAAAApZQAACRhnBmQhmBniRAAQiQAAhnhng");
	this.shape_6.setTransform(-690.3,645.9);

	this.instance = new lib._balls();
	this.instance.setTransform(-341.3,630.5,1.1787,1.1787,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#69698D","#343047"],[0,1],-103.2,1852.5,0,-103.2,1852.5,516.4).s().p("EgmzBWeMAAAis7MBNnAAAMAAACs7g");
	this.shape_7.setTransform(359.9967,639.9879,1.4494,1.1556);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-389.1,627,1858.3000000000002,666.9000000000001);
// library properties:
lib.properties = {
	id: '5EBB7101114298428944C8247A19A250',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"datas/assets/images/ballsImg.png", id:"ballsImg"},
		{src:"datas/assets/images/beaker.png", id:"beaker"},
		{src:"datas/assets/images/Bitmap5.png", id:"Bitmap5"},
		{src:"datas/assets/images/levelBoardBg.png", id:"levelBoardBg"},
		{src:"datas/assets/images/levelBtn.png", id:"levelBtn"},
		{src:"datas/assets/images/reset.png", id:"reset"},
		{src:"datas/assets/images/star.png", id:"star"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5EBB7101114298428944C8247A19A250'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;