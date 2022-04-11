//factory func
function createCircle(radius) {
    return  {
        radius,
        draw: function () {
            console.log("Draw");
        }
    }
}

const circle = createCircle(1);

//constructor func
function Circle (radius){
    this.radius = radius;
    this.draw = function (){
        console.log("Drawww");
    }
}

const anotherCircle = new Circle(2);
anotherCircle.draw();
circle.draw();

