class Canon{
    constructor(x,y,width,height,angle){
        this.x=x
        this.y=y
        this.width=width 
        this.height=height 
        this.angle=angle
        this.canonImage=loadImage("assets/canon.png")
        this.canonBase=loadImage("assets/cannonBase.png")
    }
    display(){
        push ()
        imageMode(CENTER)
        image(this.canonImage,this.x,this.y,this.width,this.height)
        pop ()
        image(this.canonBase,70,20,200,200)
        noFill()
    }
}
