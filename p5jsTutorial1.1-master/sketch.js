function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(1000,500);

}

function draw()
{
  //create a background using RGB values
  background(160,0,200)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,205);


  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(100,10,350,350);
  rect(100,10*2,350/2,350)
  rect(100,10/2,350/2,350/5)
}
