class Ground{
    //constructor,  this.
    constructor(x,y,w,h){        
        var ground_options = {
            isStatic:true
          }
          this.ground = Bodies.rectangle(x,y,w,h, ground_options)
          World.add(myWorld,this.ground)
          this.width = w
          this.height = h
    }

    display(){
        push()
        fill("brown")
        rectMode(CENTER)
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height)
        pop()
    }

}

// ground1 = new Ground()
// this keyword signifies the vaariable corresponding to the class object
// ground1.ground