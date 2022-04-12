const date = new Date();

const renderCalendar = () => {

	const monthDays = document.querySelector('.days');
	
	const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
	
	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
	
	let firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

	firstDayIndex = (firstDayIndex === 0) ? firstDayIndex = 6 : firstDayIndex-1;
	
	const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
	
	const nextDays = 7 - ((lastDayIndex === 0) ? 7 : lastDayIndex);
	
	const months = [
		"január",
		"február",
		"március",
		"április",
		"május",
		"június",
		"július",
		"augusztus",
		"szeptember",
		"október",
		"november",
		"december"
	];
	const monthsmin = [
		"jan.",
		"feb.",
		"márc.",
		"ápr.",
		"máj.",
		"jún.",
		"júl.",
		"aug.",
		"szept.",
		"okt.",
		"nov.",
		"dec."
	];
	
	const dayshu = [
		"Hétfő",
		"Kedd",
		"Szerda",
		"Csütörtök",
		"Péntek",
		"Szombat",
		"Vasárnap",
	]
	
	document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} '${date.getFullYear().toString().slice(2)}`;
	
	document.querySelector('.date p').innerHTML = `${new Date().getFullYear()}. ${monthsmin[new Date().getMonth()]} ${new Date().getDate()}. &nbsp; | &nbsp; ${dayshu[new Date().getDay()-1]}`;
	
	let days = "";
	
	for(let x = firstDayIndex; x>0; x--) {
		days += `<div class="prev-date">${prevLastDay-x+1}</div>`
	}
	
	for(let i = 1; i<=lastDay; i++) {
		if(i===new Date().getDate() && date.getMonth()=== new Date().getMonth() && date.getFullYear()=== new Date().getFullYear()){
			days += `<div class="today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}
	
	for(let j=1; j<=nextDays;j++){
		days += `<div class="next-date">${j}</div>`
	}
	
	monthDays.innerHTML = days;

}

document.querySelector('.prev').addEventListener('click', ()=>{
	date.setMonth(date.getMonth()-1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', ()=>{
	date.setMonth(date.getMonth()+1);
	renderCalendar();
});

renderCalendar();

document.querySelector('.date p').addEventListener('click', ()=>{
	date.setFullYear(new Date().getFullYear());
	date.setMonth(new Date().getMonth());
	renderCalendar();
})