class CannonBall
{
    constructor(x,y)
    {
       
        this.x=x
        this.y=y
        this.radius=40
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.radius,options)
        this.image=loadImage("assets/cannonball.png")
        World.add(world,this.body)
    }
    shoot()
    {
        var velocity = p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop ()

    }
}