class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':2.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.body);
      }
    
    var paperpos=this.body.position; 

    display(){
      ellipseMode(RADIUS);
        
        push() 
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER) 
    strokeWeight(3); 
    fill(255,0,255) 
    ellipse(0,0,this.radius, this.radius); 
    pop() 
  
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };
