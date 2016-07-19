var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width=canvas.height=400;
ctx.fillRect(0,0,canvas.width,canvas.height);
var count=0;
pam();

function pam(){
var a,b,c,d,e,f,g,tim,max,x,y,px,py;
tim=count;
max=50;
for(d=0;d<2;d++){
for(b=0;b<7;b++){
c=tim/57*(d?1:-1)+b/7*Math.PI*2;
px=Math.sin(c)*195/max;
py=-Math.cos(c)*195/max;
x=y=200;
for(a=0;a<max;a++){
ctx.lineWidth=(a+1)/max*4;
e=1-a/max;
e*=e;
e=1-e;
e=(e*13)|0;
r1=0.5+Math.sin(tim/3*(1+e/11)+a/11)/2;
r2=1-r1;
c=a/max;
c=((Math.sin(c*13+tim/11)*r1+Math.sin(c*5*(1+e/13)-tim/13+e)*r2)*50)|0;
f=c*1.8;
if(f<0)f=0;
ctx.strokeStyle="hsl("+((Math.abs(c-count+e*4)%360)|0)+",90%,"+(f)+"%)";
ctx.beginPath();
ctx.lineTo(x,y);
ctx.lineTo(x+px,y+py);
ctx.stroke();
x+=px;
y+=py;
}
}
}
count++;
requestAnimationFrame(pam);
}