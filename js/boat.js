class Boat
{
    constructor(x,y,boatPos)
    {
        var options={
            friction:1,
            density:1,
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,150,150,options)
        this.width=150
        this.height=150
        this.boatPosition = boatPos
        this.image=loadImage("assets/boat.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate (pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.width,this.height)
        noTint()
        pop()
    }
}