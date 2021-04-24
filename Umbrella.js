class Umbrella{
    constructor(x, y){

        var options = {
            stiffness: 0.04,
            length: 10,
            isStatic: true
        }

        this.Umbrella = Bodies.circle(x, y, 5, options);
        
        World.add(world, this.Umbrella);
        this.image=loadImage("walking_1.png");
    }

    display(){ 
        var pos=this.Umbrella.position; 
        push(); 
        translate(pos.x, pos.y);
        image(this.image, 400, 1100); 
        imageMode(CENTER); 
        pop(); 
    }
    
};