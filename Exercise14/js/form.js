import { inputField} from "./data.js";
const inputFields=inputField
function formValidate() {
    // input fields as array of objects
    let flag = true;
    // start of validate function
    inputFields.forEach(field => {
        let input = document.getElementById(field.id);
        let inputValue = input.value.trim();
        if (inputValue === "") {
           input.classList.add("inputStyle");
            document.getElementById(field.ptag).innerText = field.name + " is required";
            flag = false;
        } 
        else if (!field.regex.test(inputValue)) {
            input.classList.add("inputStyle");
            document.getElementById(field.ptag).innerText = field.errorMsg;
            flag = false;
        } 
        else {
            input.classList.add("resultStyle");
            document.getElementById(field.ptag).innerText = "";
        }
    });
    return flag;
    // end of validate function
}
document.querySelector("#submit").addEventListener("click" , () =>formValidate())