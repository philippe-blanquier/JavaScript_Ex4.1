// Java Script file: js_ex4.1.js
function multiply( a, b)
{
    return a*b;
}
function formTreatement( formName, number1Name, number2Name)
{
    let formId= document.getElementById(formName);
    if (formId == null)
    {
        alert("Form name not valid");
        return false;
    }
    let nb1= parseInt(document.getElementById(number1Name).value);
    let nb2= parseInt(document.getElementById(number2Name).value);
    alert("Multiply result: "+multiply( nb1, nb2));
}

