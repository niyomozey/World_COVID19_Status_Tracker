const countryNames='https://corona.lmao.ninja/v2/continents?yesterday=true&sort'
function myFunction(){
    addFlag('Rwanda')
}

function getUpdatePerDate(cupdate){
    var ct = 'https://corona.lmao.ninja/v2/historical/Spain?lastdays=30'
        document.getElementById("Test").innerHTML=addCommas(cupdate.tests)
        document.getElementById('Cases').innerHTML=addCommas(cupdate.cases)
        document.getElementById('Hosp').innerHTML=addCommas(cupdate.active)
        document.getElementById('Recovered').innerHTML=addCommas(cupdate.recovered)
        document.getElementById('Death').innerHTML=addCommas(cupdate.deaths)
        document.getElementById('Vaccinated').innerHTML=addCommas(cupdate.deaths)
        // document.getElementById("cNum").innerHTML=cupdate.tests
}

document.addEventListener('submit',(e)=>{
    e.preventDefault()
    var cn = document.getElementById('countries').value
    console.log('-->'+cn)
    const allCountry = 'https://corona.lmao.ninja/v2/countries/'+cn+'?yesterday&strict&query%20'
    // const u='https://corona.lmao.ninja/v2/countries/Italy?yesterday&strict&query%20'
    fetch(allCountry).then(response=>{
        return response.json()
    }).then((cupdate)=>{
        console.log(cupdate)
        console.log(cupdate.active)
        getUpdatePerDate(cupdate)
        document.getElementById("tTest").innerHTML=addCommas(cupdate.tests)
        document.getElementById('tCases').innerHTML=addCommas(cupdate.cases)
        document.getElementById('tHosp').innerHTML=addCommas(cupdate.active)
        document.getElementById('tRecovered').innerHTML=addCommas(cupdate.recovered)
        document.getElementById('tDeath').innerHTML=addCommas(cupdate.deaths)
        document.getElementById('tVaccinated').innerHTML=addCommas(cupdate.deaths)
        document.getElementById("cNum").innerHTML=cupdate.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })

})
function addCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function addFlag(cname){
    const allCountry = 'https://corona.lmao.ninja/v2/countries/'+cname+'?yesterday&strict&query%20'

    fetch(allCountry).then(response=>{
        return response.json()
    }).then(countries=>{
        document.getElementById("flag").src=countries.countryInfo.flag;
    
    })
}
fetch(countryNames).then(response=>{
    return response.json()
}).then(names=>{
    var select = document.getElementById('countries');
    for(var i=0; i<6;i++)
    {
        var continent = names[i].countries
        for(var j=0;j<continent.length;j++){
            var opt = document.createElement('option')
            opt.value=continent[j]
            opt.innerHTML=continent[j]
            select.appendChild(opt)
            
        }

    }
    select.value='Rwanda'

})

function getFlag(){
    
    var e = document.getElementById('countries');
    var selectedCountry= e.value;
    addFlag(selectedCountry);
    // console.log('one selected'+selected)
}