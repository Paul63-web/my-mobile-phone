if(localStorage.vouch == null) {
	localStorage.setItem("vouch", "");
}


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

var noOfCards = document.getElementById("noOfCards");
var network = document.getElementById("net");
var amount = document.getElementById("amount");

  var tt = [];


  function showCards() { 
	if(amount.value == "" || network.value == "") {
	alert("Please, fill all to generate your card!!!");
	return false;
}else {

  		if (localStorage.vouch != "") {
  			if (typeof(localStorage.getItem("vouch")) == "string") {
  				tt = JSON.parse(localStorage.getItem("vouch"));
  			} else {
  				tt = []
  			};
  		}

     
  	  for(var i=0; i<noOfCards.value; i++) {
//      /**** CREATE A CARD DIV *****/
     var cardDiv = document.createElement("div");
     cardDiv.classList.add("cards");

//      /****CREATE A SPAN FOR RANDOM NUMBERS, insert random numbers into span ****/
     var span = document.createElement("span");
     // var p = document.createElement("p");
     // var p1 = document.createElement("p");
     if(network.value == "MTN") {
     	// var span = document.createElement("span");
     	span.classList.add("mtn_rand");
 		span.innerHTML = Math.floor(Math.random() * Math.pow(10, 17));
 		// p.classList.add("amt")
 		// p.innerHTML = amount.value;
 		// p1.classList.add("sim")
 		// p1.innerHTML = network.value;
 		 while(span.innerHTML.length < 17) 
 		 {
 		 	span.innerHTML = Math.floor(Math.random() * Math.pow(10, 17));
 		 }
 		 	var bbbb = {cards: noOfCards.value, network: net.value, pin: span.innerHTML, amount: amount.value, status: "unused"};
 			tt.push(bbbb);	
 			localStorage.setItem("vouch", JSON.stringify(tt));
      }else if(network.value == "AIRTEL") {
     	// var span = document.createElement("span");
     	span.classList.add("mtn_rand");
 		span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		// p.classList.add("amt")
 		// p.innerHTML = amount.value;
 		// p1.classList.add("sim")
 		// p1.innerHTML = network.value;
 		 while(span.innerHTML.length < 16) 
 		 {
 		 	span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		 }
 		 	var bbbb = {cards: noOfCards.value, network: net.value, pin: span.innerHTML, amount: amount.value, status: "unused"};
 			tt.push(bbbb);	
 			// console.log(noOfCards.value);
 			localStorage.setItem("vouch", JSON.stringify(tt));
      } else if(network.value == "GLO") {
     	// var span = document.createElement("span");
     	span.classList.add("mtn_rand");
 		span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		// p.classList.add("amt")
 		// p.innerHTML = amount.value;
 		// p1.classList.add("sim")
 		// p1.innerHTML = network.value;
 		 while(span.innerHTML.length < 16) 
 		 {
 		 	span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		 }
 		 	var bbbb = {cards: noOfCards.value,  network: net.value, pin: span.innerHTML, amount: amount.value, status: "unused"};
 			tt.push(bbbb);	
 			// console.log(noOfCards.value);
 			localStorage.setItem("vouch", JSON.stringify(tt));
      } else if(network.value == "9MOBILE") {
     	// var span = document.createElement("span");
     	span.classList.add("mtn_rand");
 		span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		// p.classList.add("amt")
 		// p.innerHTML = amount.value;
 		// p1.classList.add("sim")
 		// p1.innerHTML = network.value;
 		 while(span.innerHTML.length < 16) 
 		 {
 		 	span.innerHTML = Math.floor(Math.random() * Math.pow(10, 16));
 		 }
 		 	var bbbb = {cards: noOfCards.value, network: net.value, pin: span.innerHTML, amount: amount.value, status: "unused"};
 			tt.push(bbbb);	
 			// console.log(noOfCards.value);
 			localStorage.setItem("vouch", JSON.stringify(tt));
      }
        

//      /**** DROP SPAN INTO CARD DIV *****/
//      // cardDiv.appendChild(p);
//      // cardDiv.appendChild(p1);
     cardDiv.appendChild(span);
     // localStorage.setItem("vouchersss", (tt));

//      /**** APPEND CARD DIV INTO showvoucher *****/
     document.getElementById("showvoucher").appendChild(cardDiv);
}

  }
  
  }


  function gen() {
  	document.getElementById('vouch').style.display = "inline";
  }

  function exit() {
  	document.getElementById('vouch').style.display = "none";
  }

  function minimize() {
  	dial.style.display = "none";
  	apks.style.display = "inline";
	  timeDiv.style.display = "inline";
	  callopacity.style.display = "none"
	  callwith.style.display = "none"
  }

  function switchon() {
  	if (cover.style.zIndex == 1) {
  		cover.style.zIndex = -1;
  		apks.style.display = "inline";
		  dial.style.display = "none";
		  notifyBar.style.display = "inline"
  		// time.style.display = "inline"
  	} else{
		  cover.style.zIndex = 1;
		//   cover.style.height = "596px"
		  vouch.style.display = "none";
		  notifyBar.style.display = "none"
		  dial.style.display = "none"
		//   bar.style.display = "none"
			 
  	}
  }

  function phoneCall () {
  	document.getElementById('dial').style.display = "block";
  	apks.style.display = "none";
  	timeDiv.style.display = "inline";
  	dial.style.position = "absolute";
	dial.style.top = "55.8%";
	// document.getElementsByClassName("notify-bar").style.display = "inline"  
	  time1.style.display = "block";
	//   bar.style.display = "none"
  }

  function dis(num) {
  	var dialNum = num;
  	bb.value += dialNum;
  }

  function del() {
  	var d = bb.value;
  	var f = d.slice(0, bb.value.length -1);
  	bb.value = f;
	  }
	  
	  cancel = ()=> {
		  callwith.style.display = "none"
		  callopacity.style.display = "none"
	  }