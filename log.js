class log {
    constructor(x,y,w,angle){
       var box_options= {
           isStatic : false,
           friction: 1,
           density: 1
       }
       this.body = Bodies.rectangle(x,y,w,20,box_options)
       World.add(myWorld,this.body)
       Matter.Body.setAngle(this.body, angle)
       this.width = w
       this.height = 20
       
    }
    display(){
        
       push()
       fill("brown")
       //noFill()
       stroke("white")
       strokeWeight(7)
       rectMode(CENTER)
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       rect(0,0, this.width, this.height)
       pop()
   }
   
   
   }