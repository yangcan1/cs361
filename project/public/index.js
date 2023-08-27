function handleSubmit () {
    const sex = document.getElementById('sex').value;
    const duration = document.getElementById('duration').value;
    const weight = document.getElementById('weight').value;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("SEX", sex);
    sessionStorage.setItem("DURATION", duration);
    sessionStorage.setItem("WEIGHT", weight);

    console.log(sex, duration, weight);

    return;
}