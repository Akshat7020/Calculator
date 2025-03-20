function MyBtn(event){ 
    event.preventDefault();

    document.getElementById("result").innerHTML="";
        var categories=document.getElementsByClassName("menu");
        for(let i=0;i<categories.length;i++){
            categories[i].style.boxShadow = "none";
        }


        let weight=document.getElementById("n1").value;
        let height=document.getElementById("n2").value/100;
        let result=""; 

    if(weight>0 && height>0) {
        let finalBmi = weight/(height*height);

        if(finalBmi<18.5) {
            document.querySelector(".menu-item.underweight").style.boxShadow = "0 0 20px white";
            result = "Underweight";
        } else if(finalBmi>=18.5 && finalBmi<=24.9) {
            document.querySelector(".menu-item.normal").style.boxShadow = "0 0 20px white";
            result = "Normal";
        } else if(finalBmi>=25 && finalBmi<=29.9) {
            document.querySelector(".menu-item.overweight").style.boxShadow = "0 0 20px white";
            result = "Overweight";
        } else {
            result = "Obese";
        }
        document.getElementById("result").innerHTML = "Your BMI is: " + finalBmi.toFixed(2) + " and you are " + result;
    }else {
        document.getElementById("result").innerHTML = "Please enter valid values";
    }  
}