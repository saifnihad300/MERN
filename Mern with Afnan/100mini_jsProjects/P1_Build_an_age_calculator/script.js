const username = document.querySelector("#username")
const dob = document.querySelector("#dob")
const btn = document.querySelector(".btn")
const showName = document.querySelector(".u-name")
const months = [31,28,31,30,31,30,31,31,30,31,30,31]


btn.addEventListener("click", calculateAge)

function calculateAge(e)
{
    e.preventDefault();

    let today = new Date();  //current date from the user's system clock
    let dobInput = new  Date(dob.value);
    let birthMonth, birthDate, birthYear;

    let birthDetails={
        date: dobInput.getDate(),
        month: dobInput.getMonth()+1,  //get date,month,year from the dob input
        year: dobInput.getFullYear(),
    }

    let currentYear = today.getFullYear();  
    let currentMonth = today.getMonth()+1;  //current date,month,year.
    let currentDate = today.getDate();
    
    if(
        birthDetails.year>currentYear||
        (birthDetails.year>currentYear && birthDetails.month>currentMonth)||
        (birthDetails.year>currentYear && birthDetails.month>currentMonth && birthDetails.date>currentDate)
    )
    {
        alert("Invalid Date")
        return;
    }
    // calculate year
    birthYear = currentYear - birthDetails.year;
    

    // calculate month
    if(currentMonth>=birthDetails.month)
    {
        birthMonth = currentMonth-birthDetails.month
    }
    else
    {
        birthYear--;
        birthMonth = 12+currentMonth-birthDetails.month;
    }

    //calculate date

    if(currentDate>=birthDetails.date)
    {
      birthDate = currentDate-birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth-2]
        birthDate = days+currentDate-birthDetails.date;

        if(birthMonth<0)
        {
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear)

    function displayResult(bDate, bMonth, bYear)
    {
        console.log(bDate, bMonth, bYear)
        showName.textContent = username.value;
        document.querySelector(".age-year").textContent = bYear + "Years";
        document.querySelector(".age-month").textContent = bMonth + "Months";
        document.querySelector(".age-day").textContent = bDate + "Day";
    }
    
    
}