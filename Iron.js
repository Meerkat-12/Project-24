class Iron {
    constructor(){
        var iron_options = {
            restitution : 0.5,
            friction : 3,
            density : 30
        }
        this.body = Bodies.rectangle(180, 550, 50,50);
        this.height = 50;
        this.width = 50;
        World.add(world, this.body);
    }

    display(){
        var ironpos = this.body.position;
        push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0, this.width,this.height);
			pop()
    }
}