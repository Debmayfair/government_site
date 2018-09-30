

function getInnerText(data){
    document.getElementById("senate-data").innerHTML = JSON.stringify(data.results, null, 2);
}
getInnerText(data)
var members = data.results[0].members;
/*textcontent

/*["first_name", "middle_name", "last_name", "party", "state", "votes_with_party_pct"]*/