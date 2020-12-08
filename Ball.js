class Ball{
    contructor(x,y,radius){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    this.radius = radius
    this.image = loadImage("ball.png");
    this.body = Bodies.circle(x, y, radius, options);

    World.add(world, this.body);
    }

    display(){          
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}



      