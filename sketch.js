var ship;

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	ship = new ship();
}

function draw() 
{
	background(0);
	ship.render();
	ship.turn();
	ship.update();
}

function keyReleased() 
{
	ship.setRotation(0);
}


function keyPressed() 
{
	if(keyCode == RIGHT_ARROW)
	{
		ship.setRotation(0.1);
	}
	else if(keyCode = LEFT_ARROW) 
	{
		ship.setRotation(-0.1);	
	}
	else if(keyCode == UP_ARROW)
	{
		ship.boost();
	}
}

function ship()  
{ 
	this.pos = createVector(width/2, height/2);
	this.r = 20;
	this.heading = 0;
	this.rotation = 0;
	this.vel = createVector(0,0);

	this.update = function()
	{
		this.pos.add(this.vel);
		this.pos.mult(0.95);
	}

	this.boost = function()
	{
		var force = p5.Vector.fromAngle(this.heading);  //will give vector which will point towards direction
		this.vel.add(force);
	}


	this.render=function() 
	{
		noFill();
		stroke(255);
		translate(this.pos.x, this.pos.y);
		//To rotate at that point particular point
		rotate(this.heading + PI / 2);
		triangle(-this.r,this.r,this.r,this.r,0,-this.r);
	}

	this.setRotation = function (a) 
	{
		this.rotation = a;
	}

	this.turn = function() 
	{	
		this.heading += this.rotation;
	}
}