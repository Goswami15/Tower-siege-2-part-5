class Shooter {
    constructor(x,y,width,height){
this.image=loadImage("Rectangle.png");

var options={
    
    restitution:0,
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);



    }
    display(){
        push()
        rectMode(CENTER);
        fill("yellow");
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    
}