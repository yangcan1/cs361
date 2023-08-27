window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const sex = sessionStorage.getItem('SEX');
    const duration = sessionStorage.getItem('DURATION');
    const weight = sessionStorage.getItem('WEIGHT');

//     Men: [Minutes working out] × [Bodyweight in kg] × 0.0713. <br>
// Women: [Minutes working out] × [Bodyweight in kg] × 0.0637.<br> <br>

    var num_sex = parseInt(sex)
    var num_duration = parseInt(duration)
    var num_weight = parseInt(weight)
    var result = 0
    if (num_sex == 0){
        result = duration*weight*0.0713
    } else{
        result = duration*weight*0.0637
    }

    document.getElementById('result-sex').innerHTML = sex;
    document.getElementById('result-duration').innerHTML = duration;
    document.getElementById('result-weight').innerHTML = weight;
    document.getElementById('result').innerHTML = result.toFixed(3)

    
})