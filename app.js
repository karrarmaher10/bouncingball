const bouncball=document.getElementById("bouncball");
const ctx=bouncball.getContext("2d");
const width=ctx.width=window.innerWidth;
const hight=ctx.hight=window.innerHeight;
class Ball{
    constructor(x,y,velx,vely,color,ridus){
      this.x=x;
      this.y=y;
      this.velx=velx;
      this.vely=vely;
      this.color=color;
      this.ridus=ridus;
    }
     drow() {
     ctx.beginPath();
     ctx.fillStyle=this.color;
     ctx.arc(this.x,this.y,this.ridus,0,2*Math.PI);
     ctx.fill();    
    }
    move(){
        if((this.x+this.ridus)>=width) this.velx=-(this.velx)
         if((this.x-this.ridus)<=0) this.velx=-(this.velx)
          if((this.y+this.ridus)>=hight) this.vely=-(this.vely)
         if((this.y+this.ridus)<=0) this.vely=-(this.vely)
    this.x=this.velx;
    this.y=this.vely;
    }
  col(){
    for(let i=0;i<balls.length ;i++){
      if(!(this===balls[i])){
        let dx=this.x-balls[i].x;
        let dy=this.y-balls[i].y;
        const distance=Math.sqr(dx*dx+dy*dy);
        if(distance<this.ridus+balls[i].ridus){
            this.color=balls[i].color="rgb("+random(0,255)+','+random(0,255)+','+random(0,255)+')';
        }
      }
    }
  }
}
function random(min,max)
{
    
    let num= Math.floor(Math.random()*(max-min+1)+min);
    return num;
}
let balls=[];
while (balls.length<25){
    let size=random(10,20);
   let ball=new Ball(
        random(0+size,width-size),
        random(0+size,hight-size),
        random(-7,7),
        random(-7,7),
    "rgb("+random(0,255)+','+random(0,255)+','+random(0,255)+')',
        size
    ) 
    balls.push(ball)
}
function display(){
     ctx.fillStyle='rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,hight);
for(i=0;i<balls.length;i++){
   
   balls[i].drow();
    balls[i].move();
    balls[i].col();
   requestAnimationFrame(display)
}
}
display();