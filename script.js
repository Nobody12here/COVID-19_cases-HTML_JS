async function GetCOVIDdata(){
    const res = await fetch("https://api.covid19api.com/summary");
    const response =await res.json();
    for (let i = 0; i < response.Countries.length; i++) {
        
        const table = document.getElementById("dataTable");
        console.log(table);
        const rowCount =  table.rows.length;
        const row =  table.insertRow(rowCount);
        
        var index =await response.Countries[130].Date.indexOf("T");
        
        row.insertCell(0).innerHTML = response.Countries[i].Date.slice(0,index);
        row.insertCell(1).innerHTML = response.Countries[i].Country;
        row.insertCell(2).innerHTML = response.Countries[i].NewConfirmed;
        row.insertCell(3).innerHTML = response.Countries[i].NewDeaths;
    }
}
GetCOVIDdata();
