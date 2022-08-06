const btn = document.getElementById("calculate");

btn.addEventListener("click", function(){
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;

    if (weight == "" || height == ""){
        alert("Please fill in the input fields!");
        return;
    }

    // formula for calculating BMI
    let BMI = (weight / ((height /100)**2));

    // take the 2 digit number after the comma (,)
    BMI = BMI.toFixed(2);
    document.querySelector("#result").innerHTML = BMI;

    // BMI category conditioning
    let category = "";
    if (BMI < 18.5){
        category = "Underweight";
    }

    if (BMI >= 18.5 && BMI < 25){
        category = "Normal Weight";
    }

    if (BMI >= 25 && BMI < 30){
        category = "Overweight";
    }

    if (BMI >= 30){
        category = "Obesity";
    }

    // print result category
    document.querySelector(".comment").innerHTML = "Which means You are "+ category;
});