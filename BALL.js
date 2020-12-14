class Ball{
    constructor(x,y,r){
        var ball_options={
            isStatic:false,
            restitution: 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.ball=MyBodies.circle(x,y,r/2,ball_options);
        MyWorld.add(world,this.ball);
        this.radius=r/2;
    }
    display(){
        var pos=this.ball.position;
        var angle=this.ball.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}