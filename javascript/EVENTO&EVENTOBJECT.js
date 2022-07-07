document.getElementById("heading").addEventListener("mousemove",function(e){
    let variable;
    console.log("you have clicked the heading");
    variable=e.target;
    console.log(variable);
    variable=e.target.className;
    console.log(variable);
    variable=e.target.classList;
    console.log(variable);

    variable= e.target.id;
    console.log(variable);
    variable=e.offsetX;
    console.log(variable);
    variable=e.offsetY;
    console.log(variable);
    variable=e.clientX;
    console.log(variable);
    variable=e.clientY;
    console.log(variable);


    location.href='//www.google.co.in';


});


