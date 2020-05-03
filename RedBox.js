class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill(233, 119, 121);

        if(this.body.speed < 3.5){
            super.display()
          }
      
          else{
            World.remove(world, this.body)
      
            push()
            this.visibility = this.visibility - 5
            tint(255, this.visibility);
            
            pop()
          }
        

    }
}