class bird {
    constructor(x,y){
       var box_options= {
           isStatic : false,
           friction: 1,
           density: 1
       }
       this.body = Bodies.rectangle(x,y,60,60,box_options)
       World.add(myWorld,this.body)
       this.width = 60
       this.height = 60
       
    }
    display(){
        
       push()
       fill("red")
       this.body.position.x = mouseX
       this.body.position.y = mouseY
       //noFill()
       //stroke("white")
       //strokeWeight(7)
       rectMode(CENTER)
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       rect(0,0, this.width, this.height)
       pop()
   }
   
   
   }