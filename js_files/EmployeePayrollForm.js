/** UC-8:- Ability to Set Event Listener on Salary Range to display appropriate value. */
const salary = document.querySelector("#salary");
const salaryOutput = document.querySelector(".salary-output");
salaryOutput.textContent = salary.value;
salary.addEventListener('input' , function(){
    salaryOutput.textContent = salary.value;
});