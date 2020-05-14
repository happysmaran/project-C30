class Box{
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':2.5,
      'density':0.5,
      'speed':5
    }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width=width;
    this.height=height;
    this.image = loadImage("wood1.png");
    World.add(world, this.body);
  }

  display(){
    push();
    if(this.body.speed>20){
      score=score+1;
    }
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
 } 
}