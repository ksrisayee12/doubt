class Block {
    constructor(x,y,w,h){
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
            this.Visibility = 255;
            this.body= Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.w = w;
            this.h = h;
    }
    display(){
        if (this.body.speed<=3){
            push();
            var angle = this.body.angle;
            var pos= this.body.position;
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.w, this.h);
            pop();
        }
        else{
      World.remove(world, this.body)
      push()
      this.Visibility-=5;
      tint(255,this.Visibility);
     // image(this.image2,this.body.position.x,this.body.position.y,50,50);
      pop()
        }
        
    }
}