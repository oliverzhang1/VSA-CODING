function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(100,120,220)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(100,70,255);
	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(50,175,150);
	// modifies the thickness of the border of an object
	strokeWeight(20);
	rect(10,10,100,50);
	rect(10,100,100,50);


	fill(50,255,20);
	stroke(255,20,255);
	strokeWeight(35);
	rect(150,10,100,50);
	rect(150,100,100,50);

  fill(20,150,20);
	stroke(150,20,90);
	strokeWeight(55);
  rect(50,250,10,150);
  rect(200,250,200,150);














}
