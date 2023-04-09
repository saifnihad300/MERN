//BMI - kg/m2
//Normal = 18.5-24.9
//Underweight = <18.5
//Overweight = 25-29.9
//Obese= 30 and above


  const btn =  document.querySelector(".btn") //select btn
     result = document.querySelector(".result") //select result
     reset  = document.querySelector(".reset") //select reset

  btn.addEventListener("click", calculateBmi)

  function calculateBmi(e)
  {
    e.preventDefault();
        let height = document.querySelector(".height").value; //get value from html
        let weight = document.querySelector(".weight").value; //get value from html
        console.log(height);

        //validate input

        if(height === "" || isNaN(height))
        {
            return (result.innerHTML = "Provide a valid Height")
        }
        else if(weight === "" || isNaN(weight))
        {
            return (result.innerHTML = "Provide a valid Weight")
        }
        else
        {
            height = height/100;
            let bmi = (weight/Math.pow(height,2)).toFixed(2);
            console.log(bmi);

            //categorize result

            if(bmi<18.5)
            {
                showResult(`Underweight: <span>${bmi}</span>`,"orange")
            }
            else if(bmi>=18.5 && bmi< 24.9)
            {
                showResult(`Normal: <span>${bmi}</span>`,"green")
            }
            else if(bmi>=25.0 && bmi<29.9)
            {
                showResult(`Overweight: <span>${bmi}</span>`,"blue")
            }
            else 
            {
                showResult(`Obese: <span>${bmi}</span>`,"red")
            }
        }
        reset.style.display = "block";
  }
  function showResult(val, color)
  {
    result.style.backgroundColor = color;
    return (result.innerHTML = val)
  }

  reset.addEventListener("click", ()=>
  {
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.display = "none"
  })
