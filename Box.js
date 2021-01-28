class Box {
 constructor(x,y,w,h){
    var box_options= {
        isStatic : false,
        friction: 1,
        density: 1
    }
    this.body = Bodies.rectangle(x,y,w,h,box_options)
    World.add(myWorld,this.body)
    this.width = w
    this.height = h
    
 }
 display(){
     
    push()
    fill("orange")
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