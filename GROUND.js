class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true
        }
        this.ground=MyBodies.rectangle(x,y,w,h,ground_options);
        MyWorld.add(world,this.ground);
        this.width=w;
        this.height=h;
    }
    dikhao(){
        var pos=this.ground.position;
        var angle=this.ground.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}