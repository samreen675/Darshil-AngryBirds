class Slingshot {
    constructor(A, B) {
        var options = {
            bodyA: A,
            pointB: B,
            length: 10,
            stiffness: 0.04
        }
        this.sling = cons.create(options)
        World.add(world, this.sling)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

    }

    fly() {
        this.sling.bodyA = null
    }
    attach(i) {
        this.sling.bodyA = i
    }
    display() {
        if (this.sling.bodyA ) {
            var p1 = this.sling.bodyA.position
            var p2 =  this.sling.pointB
            stroke("#312015")
            if (p1.x<220) {
                //backward
                strokeWeight(7)
                line(p1.x-25,p1.y,p2.x-25,p2.y)
                line(p1.x-25,p1.y,p2.x+25,p2.y-3)
                image(this.sling3,p1.x-30,p1.y-10 ,15,30)
                
            }
            else{
                //forward
                strokeWeight(3)

                line(p1.x+25,p1.y+2,p2.x-25,p2.y)
                line(p1.x+25,p1.y+2,p2.x+25,p2.y+3)
                image(this.sling3,p1.x+20,p1.y ,15,30)
            }
          
           
           
        }
        image(this.sling1,200,20);
        image(this.sling2,170,20);


    }
}