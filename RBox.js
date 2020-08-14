class RBox {
 constructor(x,y,width,height){
    var option = {
        isStatic:true

    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World.add(world,this,body)

}
    display(){
        
        var pos =this.body.position
        rectMode(CENTER);
        fill (128);
        rect(pos.x,pos.y,this.width,this.width,this.height);


    }



};