var loadTime = () => {
	var newTime =  new Date();
	let hr = newTime.getHours();
	let min = newTime.getMinutes();
	let day = newTime.getDate();
	let month = newTime.getMonth();
	let year = newTime.getFullYear();
	var time1 = document.getElementById('time1');
	date.innerHTML = day + "/" + month + "/" + year;

	if (hr.toString().length < 2) {
		hr = "0" + hr;
	}

	if (min.toString().length <2) {
		min = "0" + min;
	}

	if (hr > 12) {
		hr = hr - 12;
		time1.innerHTML = hr + ":" + min + " PM"
		time.innerHTML = hr + ":" + min + " PM";
	} else {
		time1.innerHTML = hr + ":" + min + " AM"
		time.innerHTML = hr + ":" + min + " AM"
		
	}

	setTimeout(function () {
		loadTime();
	}, 1000);
}
