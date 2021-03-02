class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,75,50,145);
        image(this.image2,168,80,50,80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#331708")
            if(pointA.x<220){
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x, pointA.y, pointB.x+25, pointB.y);
               image(this.image3,pointA.x-45,pointA.y-10,30,30);
            }
            else{
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x-5, pointB.y);
            line(pointA.x, pointA.y, pointB.x+25, pointB.y);
           image(this.image3,pointA.x+25,pointA.y-10,30,30);
            }
        }
    }
    
}