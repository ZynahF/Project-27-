class Chain{

    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options={

            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}

        }

        this.body = Constraint.create(options)
        World.add(world, this.body)

    }

    display(){

        var pointA = this.body.bodyA.position
        var pointB = this.body.bodyB.position

        var ancor1x = pointA.x
        var ancor1y = pointA.y

        var ancor2x = pointB.x + this.offsetX
        var ancor2y = pointB.y + this.offsetY

        line(ancor1x, ancor1y, ancor2x, ancor2y)

    }

}