var button1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("introduction ");
	b1.setTextOver(" main menu ");
	b1.setButtonOverFill(140,90,255);
}

function draw()
{
	background(150,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("mainmenu/mainmenu.html","_self");
	}
}
