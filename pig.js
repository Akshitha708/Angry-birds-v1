class pig {
    constructor(x,y){
       var box_options= {
           isStatic : false,
           friction: 1,
           density: 1
       }
       this.body = Bodies.rectangle(x,y,40,40,box_options)
       World.add(myWorld,this.body)
       this.width = 40
       this.height = 40
       
    }
    display(){
        
       push()
       fill("green")
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