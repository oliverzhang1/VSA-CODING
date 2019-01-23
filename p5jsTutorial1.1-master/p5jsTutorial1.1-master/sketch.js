function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(1000,500);

}

function draw()
{
  //create a background using RGB values
  background(0,0,255)

  // change the paint brush to a specific color according to RGB values

  fill(30,144,255)



  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(600,10,350,350);

  fill(0,0,128)
  rect(20,10*2,320/2,300)

  fill(173,216,230)
  rect(20,390,200,100)

  fill(135,206,250)
  rect(750,390,200,100)

  fill(0,191,255)
  rect(300,200,250,120)
}
