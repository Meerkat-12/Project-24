class Stone {
    constructor(){
        var stone_options = {
            restitution : 0.8,
            density : 12,
            friction : 0.9

        }
        this.body = Bodies.rectangle( 800,250, 20, 60);
        this.height = 20;
        this.width = 60;
        World.add(world, this.body);
    }

    display(){
        var stonepos = this.body.position;
        push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0,0, this.width, this.height);
			pop()
    }
}