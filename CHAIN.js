class Chain{
    constructor(bodyA, pointB){
        var opt = { bodyA: bodyA, 
            pointB: pointB, 
            stiffness: 0.004,
          }
    this.chain = Constraint.create(opt);
    World.add(world, this.chain);
    this.pointB = pointB;
    }
    display() {

        strokeWeight(5);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.position.x, this.chain.pointB.position.y);
      }

      if(bodyA = null){
        chain.display();
        }
}
