const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".price");
	let total = 0;

	priceElements.forEach((item) => {
		total += Number(item.textContent.trim()) || 0;
	});

	const oldRow = document.getElementById("total-row");
	if(oldRow){
		oldRow.remove();
	}

	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	newRow.id = "total-row";

	const totalCell = document.createElement("td");
	totalCell.id = "ans";
	totalCell.textContent = total;

	newRow.appendChild(totalCell);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

