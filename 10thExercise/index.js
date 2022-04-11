//factory func
function createCircle(radius) {
    return  {
        radius,
        draw: function () {
            console.log("Draw");
        }
    }
}

//constructor func
function Circle (radius){
    this.radius = radius;
    this.draw = function (){
        console.log("Drawww");
    }
}

const circle = new Circle(2);

for (let key in circle)
{
    if(typeof circle[key] != "function")
    console.log(key, circle[key]);
}