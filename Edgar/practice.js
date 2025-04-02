var a=3;
var b=7;
function myMultiple(x){
    if (x % b == 0 || x % a == 0){
        console.log("True");
    }else{ 
    console.log("false");
    }
    
}

myMultiple(22);

var h=Number
function time(num){
    var H= Math.floor(num / 60);
    var M= num % 60;
    return H + ":" + M;
        
    }

console.log(time(130));

function triangle (base, height){
    var area= base * height * 0.5;
    return area;
}
console.log(triangle (3,5));

function circle (d){
    var radius=d/2;
    var circ=radius*Math.PI*2;
    return circ;
}
console.log(circle(20));

function add(x,y){
    var addition= x + y;
    if(addition <= 80 && addition >= 50){
        return "true";
    }
    else{
        return "false";
    }
        
        
}

console.log(add(10,30));



function sum(num){
    var sumt= 0;
    for(i=0;i<num.length;i++);
    sumt = sumt + num[i];
    return sumt;
    
        
}
console.log(sum([1,3,6,7,8]));

function angle(degree){
    if (degree<90){
        return "acute";
    }
    else if (degree==90){
        return "right";
    }
   else if (degree==180){
        return "straight"
    }
    else if (degree>90){
        return "obtuse";
    }
    else{
        return ""
    }
    
}

console.log(angle(170))





function addition(x,y){
    var add= x + y;
    if (x==50){
        return "true";
    }
    else if (y==50){
        return "true";
    }
    else if (add==50){
        return "true";
    } else{
    return "false"
}
} 

console.log(addition(40,50));


function Py(p){
    var add="Py"
    var sub="py"
    if(p.substring(0,2)==add||p.substring(0,2)==sub){
        return add;
    } else{
        return add + p;
    }
}
       console.log(Py("python"))



function remove(y,b){
    x=y.substring(0,b);
    z=y.substring(b+1,y.length);
    return x+z;
}

console.log(remove("W3schools",4))


function Java(y){
    j="Java"
    if(y.substring(0,4)==j){
        return "True"
    } else{
        return "False"
    }
    
}

console.log(Java("script"))

function largest(x,y,z){
    if (x>y && x>z){
        return x;
    } else if (y>x && y>z){
        return y;
    } else {
        return z;
    }
}

console.log(largest(8,9,12))





function exponent(b,n){
    var ans=1
    for (var i=1; i==n; i++){
        ans=b*ans

        
    }return ans
         } 
   


//console.log(exponent(4,0))



    var sum=0
for(var i=0; i<1000; i++){
    if( i%5==0||i%3==0){
        sum=sum+i;
    }
}

console.log(sum)

function minutes(x){
    h=x*60
    return h+" seconds"
}
console.log(minutes(5));


function apple(x){
    var app=0;
    
    for(var i=0; i<=x; i++){
        console.log(i)
        app=app+i;    
        
    } return app;
}
console.log(apple(5));


function basketball(a,b,c,d,e,f){
    var Teama=b*2+c*3
    var Teamb=e*2+f*3
    if(Teama>Teamb){
        console.log("The "+a+" won the game by "+(Teama-Teamb)+" points.");
    }else{
        console.log("The "+d+" won the game by "+(Teamb-Teama)+" points.");
    }
    return "";
}
console.log(basketball("Heat",10,9,"Lakers",6,4))



function evenstring(x){
    if(x.length%2==0){
        console.log(x.slice(0,(x.length/2)))
    }else{
        console.log("insert an even string please!")
    }
    return "";
}

console.log(evenstring("pyramidsa"))


function fruit(x){
    var sumg=0;
    for(var i=0;i < x.length;i++){
      
        if (x[i]=="Apple"){
            sumg=sumg+1;
        }
        
    }return sumg;
    
}
console.log(fruit(["Apple","Orange","Apple","Banana","Grapefruit","Apple","Pinapple","Apple"]));



function arrayz(x,y){
   var z=[];
   z.push(x[1],y[1]);
    return z;
}
console.log(arrayz([3,4,5],[10,11,12]));



function spliz(x,y){
   
    var pos=x.indexOf(y)
    x.splice(pos,1);
    return x;
}

console.log(spliz([6,4,10,3,9,52],3));




function generate(x,y){
    z= new Array((y-x+1))
    for(var i=0;i< z.length;i++){
    z[i]= x;
    x++
        
        }
    return z;
}
                 
console.log(generate(3,8))



function sumprod(x){
    var sumofx=0
    var prodofx=1
    for(var i=0;i<x.length; i++){ 
        sumofx= sumofx+(x[i]);
        prodofx= prodofx*(x[i]);
            
        }
    return "sum:"+sumofx+" product:"+prodofx;
}

console.log(sumprod([1,2,3,4]))



