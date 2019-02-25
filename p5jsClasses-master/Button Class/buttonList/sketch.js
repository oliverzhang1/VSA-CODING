var b1;
var b2;
var b3
var b4
var b5


function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("go back ");
	b1.setTextOver("go back");
	b1.setButtonOverFill(150,230,90);

	b2 = new Button(10,100,100,25);

	b3 = new Button(10,50,100,25)
	b3.setText("Instructions")
	b3.setButtonOverFill(150,230,90);
}

function draw()
{
	background(204,120,125);

	b1.showButton();
	b2.showButton();
	b3.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
