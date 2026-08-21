function insert_Row() {
    //Write your code here
  let body = document.getElementById("sampleTable");
	let newRow = document.createElement("tr");
	body.insertBefore("newRow",body.firstChild);
	document.createElement("td");
    let cell1 = document.createElement("td");
	cell1.textContent = "New Cell1";
	let Cell2 = document.createElement("td");
	cell2.textContent = "New Cell2";
	newRow.appendChild(cell1);
	newRow.appendChild(cell2);