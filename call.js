if (localStorage.airtimeBalance == null) {
	localStorage.setItem("airtimeBalance", "")
}

let allBalance = {
    mtnBal:0,
    gloBal:0,
    airtelBal:0,
    mobileBal:0
}

if (localStorage.airtimeBalance == "") {
    localStorage.setItem("airtimeBalance", JSON.stringify(allBalance))
}

dialIcon = ()=> {
    callwith.style.display = "inline";
    callopacity.style.display = "inline"
    bar.style.zIndex = 1
    // bar.style.display = "none"
    // var v = JSON.parse(localStorage.getItem('vouch'));
}  

loadMtn = ()=>{
    if (bb.value.length == 23) {
        var v = JSON.parse(localStorage.getItem('vouch'));
        for (var q = 0; q<v.length; q++) {
            var b = v[q].pin;
            if ((bb.value.slice(0,5) == "*555*") &&
                (b.search(bb.value.slice(5,22)) != -1) &&
                (bb.value.slice(22,23) =="#") &&
                (v[q].network == "MTN") &&
                (v[q].status == "unused")
            )
            {
                v[q].status = "used"
                let balance = parseInt(v[q].amount)
                let type = v[q].network
                let getLocal = JSON.parse(localStorage.getItem("airtimeBalance"))
                getLocal.mtnBal += balance
                balanceDis.innerHTML = "You've successfully loaded " + v[q].amount + " " + type + " card. " + "Your new account balance: ₦" + getLocal.mtnBal.toFixed(2);
                localStorage.setItem("airtimeBalance", JSON.stringify(getLocal))
                document.getElementById("balance-box").style.display = "inline";
                ok.style.display = "inline"
                callwith.style.display = "none"
                callopacity.style.display = "none"
            }else if ((bb.value.slice(0,5) == "*555*") &&
                        (b.search(bb.value.slice(5,22)) !=1) &&
                        (bb.value.slice(22,23) == "#") &&
                        (v[q].network == "MTN") &&
                        (v[q].status == "used")
            ) {
                balanceDis.innerHTML = "This card has already been loaded by you. Thank You"
                balanceDis.style.display = "inline"
                document.getElementById("balance-box").style.display = "inline"
                ok.style.display = "inline"
                callwith.style.display = "none"
                callopacity.style.display = "none"
            }
            localStorage.setItem("vouch", JSON.stringify(v))
        }
        }else if (bb.value.slice(0,5) == "*556#") {
            callwith.style.display = "none"
            callopacity.style.display = "inline"
            
           
            let bn = JSON.parse(localStorage.getItem("airtimeBalance"))
            let cv = bn.mtnBal
            // alert(cv)
            balanceDis.innerHTML = "Your new balance is: ₦" + cv.toFixed(2)
            balanceDis.style.display = "inline"
            document.getElementById("balance-box").style.display = "inline"
        } else if ( (bb.value != "") && (bb.value.length == 11) &&
        (
           (bb.value.slice(0,3) == "070")  ||
           (bb.value.slice(0,3) == "080") ||
           (bb.value.slice(0,3) == "081") ||
           (bb.value.slice(0,3) == "090")
        )
            
        ) {
            let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
            if (gett.mtnBal <= 0.50) {
                alert("Your account balance is to low for this call Please recharge as soon as possible. Thank you")
            }else if (gett.mtnBal != 0) {
            audioElement = new Audio('ringtonemusics/ringtone.mp3')
            audioElement.play()
			timeout = setInterval(checktimeout, 1000);
            outgoingopacity.style.display = "inline"
            callerNet.innerHTML = "MTN"
            callerNo.innerHTML = bb.value
            callwith.style.display = "none"
            callopacity.style.display = "none"
            secondPhone.style.display = "inline"
            incomingNet.innerHTML = callerNet.innerHTML
        }
        } else if ( (bb.value != "") && (bb.value.length == 14) &&
            (
                (bb.value.slice(0,6) == "+23481") ||
                (bb.value.slice(0,6) == "+23480") ||
                (bb.value.slice(0,6) == "+23490") ||
                (bb.value.slice(0,6) == "+23470")
        )
        ) {
            let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
            if (gett.mtnBal <= 0.50) {
                alert("Your account balance is too low for this call, Please rechearge as soon as possibible. Thank you")
            }else if (gett.mtnBal != 0) {
               audioElement = new Audio('ringtonemusics/ringtone.mp3')
               audioElement.play()
                timeout = setInterval(checktimeout, 1000);
                outgoingopacity.style.display = "inline"
                callerNet.innerHTML = "MTN"
                callerNo.innerHTML = bb.value
                callwith.style.display = "none"
                callopacity.style.display = "none"
                secondPhone.style.display = "inline"
                incomingNet.innerHTML = callerNet.innerHTML
            }
        }
    }

   loadAirtel = () =>{
       if (bb.value.length == 22) {
           var v = JSON.parse(localStorage.getItem("vouch"));
           for (var q = 0; q<v.length; q++) {
               var b = v[q].pin
               if ((bb.value.slice(0,5) == "*126*") &&
                   (b.search(bb.value.slice(5,21)) != -1)&&
                   (bb.value.slice(21,22) == "#") &&
                   (v[q].network == "AIRTEL") &&
                   (v[q].status == "unused")
                   )
                   {
                    v[q].status = "used"
                    let balance = parseInt(v[q].amount)
                    let type = v[q].network
                    let getLocal = JSON.parse(localStorage.getItem("airtimeBalance"))
                    getLocal.airtelBal += balance
                    document.getElementById("balanceDis").innerHTML = "You've successfully loaded " + balance + " " + type + " card. " + "Your new account balance: ₦" + getLocal.airtelBal.toFixed(2);
                    localStorage.setItem("airtimeBalance", JSON.stringify(getLocal))
                    document.getElementById("balance-box").style.display = "inline";
                    ok.style.display = "inline"
                    callwith.style.display = "none"
                    callopacity.style.display = "none"
            }else if ((bb.value.slice(0,5) == "*126*") &&
                            (b.search(bb.value.slice(5,21)) !=1) &&
                            (bb.value.slice(21,22) == "#") &&
                            (v[q].network == "AIRTEL") &&
                            (v[q].status == "used")
                ) {
                    document.getElementById("balanceDis").innerHTML = "This card has already been loaded by you. Thank You"
                    balanceDis.style.display = "inline"
                    document.getElementById("balance-box").style.display = "inline"
                   ok.style.display = "inline"
                    callwith.style.display = "none"
                   callopacity.style.display = "none"
            }
                localStorage.setItem("vouch", JSON.stringify(v))
            }
       }else if (bb.value.slice(0,5) == "*123#") {
                callwith.style.display = "none"
                callopacity.style.display = "none"
                let bn = JSON.parse(localStorage.getItem("airtimeBalance"))
           let cv = bn.airtelBal
        //    alert(cv)
           balanceDis.innerHTML = "Your new balance is: ₦" + cv
           balanceDis.style.display = "inline"
           document.getElementById("balance-box").style.display = "inline" 
       } else if ( (bb.value != "") && (bb.value.length == 11) &&
       (
          (bb.value.slice(0,3) == "070")  ||
          (bb.value.slice(0,3) == "080") ||
          (bb.value.slice(0,3) == "081") ||
          (bb.value.slice(0,3) == "090")
       )
           
       ) {
           let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
           if (gett.airtelBal < 0.50) {
               alert("Your account balance is to low for this call Please recharge as soon as possible. Thank you")
           }else if (gett.airtelBal != 0) {
        audioElement = new Audio('ringtonemusics/ringtone.mp3')
        audioElement.play()
        timeout = setTimeout(checktimeout, 1000)
        outgoingopacity.style.display = "inline"
        callerNet.innerHTML = "AIRTEL"
        callerNo.innerHTML = bb.value
        callwith.style.display = "none"
        callopacity.style.display = "none"
        secondPhone.style.display = "inline"
        incomingNet.innerHTML = callerNet.innerHTML
    }
    }else if ( (bb.value != "") && (bb.value.length == 14) &&
        (
            (bb.value.slice(0,6) == "+23481") ||
            (bb.value.slice(0,6) == "+23490") ||
            (bb.value.slice(0,6) == "+23407") ||
            (bb.value.slice(0,6) == "+23480")
        )

    ) {
        let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
        if (gett.airtelBal < 0.50) {
            alert("Your account balnce is  too low for this call, Please recharge as soon as possible. Thanks you")
        }else if (gett.airtelBal != 0) {
            audioElement = new Audio('ringtonemusics/ringtone.mp3')
            audioElement.play()
            outgoingopacity.style.display = "inline"
            callerNet.innerHTML = "AIRTEL"
            callerNo.innerHTML = bb.value
            callwith.style.display = "none"
            callopacity.style.display = "none"
            secondPhone.style.display = "inline"
            incomingNet.innerHTML = callerNet.innerHTML
        }
   }
}

   loadGlo = ()=> {
       if(bb.value.length == 22) {
           var v = JSON.parse(localStorage.getItem("vouch"));
           for (var q =0; q<v.length; q++) {
               var b = v[q].pin
               if ((bb.value.slice(0,5) == "*123*") &&
                   (b.search(bb.value.slice(5,21)) != -1) &&
                   (bb.value.slice(21,22) == "#") &&
                   (v[q].network == "GLO") &&
                   (v[q].status == "unused")
                   ) {
                    v[q].status = "used"
                    let balance = parseInt(v[q].amount)
                    let type = v[q].network
                    let getLocal = JSON.parse(localStorage.getItem("airtimeBalance"))
                    getLocal.gloBal += balance
                    document.getElementById("balanceDis").innerHTML = "You've successfully loaded " + balance + " " + type + " card. " + "Your new account balance: ₦" + getLocal.gloBal.toFixed(2);
                    localStorage.setItem("airtimeBalance", JSON.stringify(getLocal))
                    document.getElementById("balance-box").style.display = "inline";
                    ok.style.display = "inline"
                    callwith.style.display = "none"
                    callopacity.style.display = "none"
            }else if ((bb.value.slice(0,5) == "*123*") &&
                            (b.search(bb.value.slice(5,21)) !=1) &&
                            (bb.value.slice(21,22) == "#") &&
                            (v[q].network == "GLO") &&
                            (v[q].status == "used")
                ) {
                    document.getElementById("balanceDis").innerHTML = "This card has already been loaded by you. Thank You"
                    balanceDis.style.display = "inline"
                    document.getElementById("balance-box").style.display = "inline"
                   ok.style.display = "inline"
                    callwith.style.display = "none"
                    callopacity.style.display = "none"
            }
                localStorage.setItem("vouch", JSON.stringify(v))
            }
       }else if (bb.value.slice(0,5) == "#124#") {
           let bn = JSON.parse(localStorage.getItem("airtimeBalance"))
           let cv = bn.gloBal
           balanceDis.innerHTML = "Your new balance is: ₦" + cv
           balanceDis.style.display = "inline"
           document.getElementById("balance-box").style.display = "inline"
           callwith.style.display = "none"
           callopacity.style.display = "none"
       } else if ( (bb.value != "") && (bb.value.length == 11) &&
       (
          (bb.value.slice(0,3) == "070")  ||
          (bb.value.slice(0,3) == "080") ||
          (bb.value.slice(0,3) == "081") ||
          (bb.value.slice(0,3) == "090")
       )
           
       ) {
           let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
           if (gett.gloBal < 0.50) {
               alert("Your account balance is to low for this call Please recharge as soon as possible. Thank you")
           }else if (gett.airtelBal != 0) {
            audioElement = new Audio('ringtonemusics/ringtone.mp3')
            audioElement.play()
            outgoingopacity.style.display = "inline"
            callerNet.innerHTML = "GLO"
            callerNo.innerHTML = bb.value
            callwith.style.display = "none"
            callopacity.style.display = "none"
            secondPhone.style.display = "inline"
            incomingNet.innerHTML = callerNet.innerHTML
        }
       }else if ( (bb.value != "") && (bb.value.length == 14) &&
       (
           (bb.value.slice(0,6) == "+23481") ||
           (bb.value.slice(0,6) == "+23480") ||
           (bb.value.slice(0,6) == "+23490") ||
           (bb.value.slice(0,6) == "+23470")
       )

       ) {
           let gett =JSON.parse(localStorage.getItem("airtimeBalance"))
           if (gett.gloBal <= 0.50) {
               alert("Your account balance is too low for this call, please recharge as soon as possible. Thanks you")
           } else if (gett.gloBal != 0) {
               audioElement = new Audio('ringtonemusics/ringtone.mp3')
               audioElement.play()
               outgoingopacity.style.display = "inline"
               callerNet.innerHTML = "GLO"
               callerNo.innerHTML = bb.value
               callwith.style.display = "none"
               callopacity.style.display = "none"
               secondPhone.style.display = "inline"
               incomingNet.innerHTML = callerNet.innerHTML
           }
       }
    }

   etisalat = ()=> {
       if (bb.value.length == 22) {
           var v = JSON.parse(localStorage.getItem("vouch"));
           for(var q =0; q<v.length; q++) {
               var b = v[q].pin
               if((bb.value.slice(0,5) == "*222*") &&
                   (b.search(bb.value.slice(5,21)) != -1) &&
                   (bb.value.slice(21,22) == "#") &&
                   (v[q].network == "9MOBILE") &&
                   (v[q].status == "unused")
                   ) {
                    v[q].status = "used"
                    let balance = parseInt(v[q].amount)
                    let type = v[q].network
                    let getLocal = JSON.parse(localStorage.getItem("airtimeBalance"))
                    getLocal.mobileBal += balance
                    document.getElementById("balanceDis").innerHTML = "You've successfully loaded " + balance + " " + type + " card. " + "Your new account balance: ₦" + getLocal.mobileBal.toFixed(2);
                    localStorage.setItem("airtimeBalance", JSON.stringify(getLocal))
                    document.getElementById("balance-box").style.display = "inline";
                    ok.style.display = "inline"
                    callwith.style.display = "none"
                    callopacity.style.display = "none"
            }else if ((bb.value.slice(0,5) == "*222*") &&
                            (b.search(bb.value.slice(5,21)) !=1) &&
                            (bb.value.slice(21,22) == "#") &&
                            (v[q].network == "9MOBILE") &&
                            (v[q].status == "used")
                ) {
                    document.getElementById("balanceDis").innerHTML = "This card has already been loaded by you. Thank You"
                    balanceDis.style.display = "inline"
                    document.getElementById("balance-box").style.display = "inline"
                   ok.style.display = "inline"
                    callwith.style.display = "none"
                    callopacity.style.display = "none"
            }
                localStorage.setItem("vouch", JSON.stringify(v))
            }
       }else if (bb.value.slice(0,5) == "*232#") {
         let bn = JSON.parse(localStorage.getItem("airtimeBalance"))
         let cv = bn.mobileBal
         balanceDis.innerHTML = "Your new account balance is: ₦" + cv
        //  balanceDis.style.display = "inline"
         document.getElementById("balance-box").style.display = "inline"
         callwith.style.display = "none"
         callopacity.style.display = "none"
            } else if ( (bb.value != "") && (bb.value.length == 11) &&
       (
          (bb.value.slice(0,3) == "070")  ||
          (bb.value.slice(0,3) == "080") ||
          (bb.value.slice(0,3) == "081") ||
          (bb.value.slice(0,3) == "090")
       )
           
       ) {
           let gett = JSON.parse(localStorage.getItem("airtimeBalance"))
           if (gett.mobileBal < 0.50) {
               alert("Your account balance is to low for this call Please recharge as soon as possible. Thank you")
           }else if (gett.airtelBal != 0) {
            audioElement = new Audio('ringtonemusics/ringtone.mp3')
            audioElement.play()
            outgoingopacity.style.display = "inline"
            callerNet.innerHTML = "9MOBILE"
            callerNo.innerHTML = bb.value
            callwith.style.display = "none"
            callopacity.style.display = "none"
            secondPhone.style.display = "inline"
            incomingNet.innerHTML = callerNet.innerHTML
        }
       }else if ( (bb.value != "") && (bb.value.length == 14) &&
       (
           (bb.value.slice(0,6) == "+23481") ||
           (bb.value.slice(0,6) == "+23480") ||
           (bb.value.slice(0,6) == "+23490") ||
           (bb.value.slice(0,6) == "+23470")
       )

       ) {
           let gett =JSON.parse(localStorage.getItem("airtimeBalance"))
           if (gett.gloBal <= 0.50) {
               alert("Your account balance is too low for this call, please recharge as soon as possible. Thanks you")
           } else if (gett.gloBal != 0) {
               audioElement = new Audio('ringtonemusics/ringtone.mp3')
               audioElement.play()
               outgoingopacity.style.display = "inline"
               callerNet.innerHTML = "GLO"
               callerNo.innerHTML = bb.value
               callwith.style.display = "none"
               callopacity.style.display = "none"
               secondPhone.style.display = "inline"
               incomingNet.innerHTML = callerNet.innerHTML
           }
       }
    }
           
   
   okBtn = ()=> {
       document.getElementById("balance-box").style.display = "none"
       callopacity.style.display = "none"
       outgoingopacity.style.display = "none"
       bb.value = ""
   }

   let int;
   let count;
   let check = 1;
   let one = 0;
   let two = 0;
   let three = 0;
   let countSec = 0;
   let getBalance;
   let getb;
   let getMtn;
   let getAirtel;
   let getGlo;
   let getmobile;

   const receiveCall = () => {
       getb = JSON.parse(localStorage.getItem("airtimeBalance"));
       one = 0;
       two = 0;
       three = 0;
       loadHours.innerHTML = " ";
       loadMins.innerHTML = "00:";
       loadSecs.innerHTML = "00" ;
       firstHours.innerHTML = " ";
       firstMins.innerHTML = "00:";
       firstSecs.innerHTML = "00";
       getBalance = JSON.parse(localStorage.getItem("airtimeBalance"))
       getMtn = getBalance.mtnBal;
       getAirtel = getBalance.airtelBal;
       getGlo = getBalance.gloBal;
       getmobile = getBalance.mobileBal;
       pickCall.style.display = "none";
       hangUp.style.marginTop = "-30px"
       hangUp.style.marginRight = "75px"
       check = 2;
       int = setInterval(receive, 1000);
       count = setInterval(timeLoading, 1000);
       timecalculating.style.display = "inline"
       calculatingfirst.style.display = "inline"
       audioElement.pause()
   }

   timeLoading = () => {
    one+=1;
    countSec+=1;

    if (one == 60) {
        one = 0;
        two+=1;
    }

    if (two == 60) {
        two = 0;
        three+=1
    }
    loadSecs.innerHTML = one;
    loadMins.innerHTML = two;
    loadHours.innerHTML = three;
    firstSecs.innerHTML = one;
    firstMins.innerHTML = two; 
    firstHours.innerHTML = three;
    
    if (one<10){
        loadSecs.innerHTML = `0${one}`;
        firstSecs.innerHTML = `0${one}`;
    } else {
        loadSecs.innerHTML = one;
        firstSecs.innerHTML = one;
    }

    if (two<10) {
        loadMins.innerHTML = `0${two}:`;
        firstMins.innerHTML = `0${two}:`;
    } else {
        loadMins.innerHTML = `${two}:`;
        firstMins.innerHTML =  `${two}:`;
    }

    if (three<10) {
        loadHours.innerHTML = `0${three}:`;
        firstHours.innerHTML = `0${three}:`;
    } else {
        loadHours.innerHTML = `${three}:`;
        loadHours.innerHTML = `${three}:`;
    } 

    if (three == 0) {
        loadHours.style.display = "none";
        firstHours.style.display = "none";
    } else {
        loadHours.style.display = "inline";
        firstHours.style.display = "inline";
    }
    }

       const receive = () => {
           if (callerNet.innerHTML == "MTN") {
               getMtn = getMtn-0.11
               let newMtn = getMtn
               getBalance.mtnBal = newMtn
               localStorage.setItem("airtimeBalance", JSON.stringify(getBalance))
               if (getBalance.mtnBal <0.50) {
                   outgoingopacity.style.display = "inline";
                   callerNo.style.display = "none"
                   one = 0;
                   two = 0;
                   three = 0;
                   loadHours.innerHTML = " ";
					loadMins.innerHTML =  "00:";
					loadSecs.innerHTML =  "00";
					firstHours.innerHTML = " ";
					firstMins.innerHTML =  "00:";
                    firstSecs.innerHTML =  "00";
                    alert("You've exhausted your airtime. Plese recharge")
					secondphone.style.display = "none";
					clearInterval(int);
					clearInterval(count);
               }
           }else if (callerNet.innerHTML == "AIRTEL") {
            getMtn = getMtn-0.12
            let newMtn = getMtn
            getBalance.mtnBal = newMtn
            localStorage.setItem("airtimeBalance", JSON.stringify(getBalance))
            if (getBalance.mtnBal <0.50) {
                outgoingopacity.style.display = "inline";
                callerNo.style.display = "none"
                one = 0;
                two = 0;
                three = 0;
                loadHours.innerHTML = " ";
                 loadMins.innerHTML =  "00:";
                 loadSecs.innerHTML =  "00";
                 firstHours.innerHTML = " ";
                 firstMins.innerHTML =  "00:";
                 firstSecs.innerHTML =  "00";
                 alert("You've exhausted your airtime. Plese recharge")
                 secondphone.style.display = "none";
                 clearInterval(int);
                 clearInterval(count);
            }
           }else if (callerNet.innerHTML == "GLO") {
            getMtn = getMtn-0.13
            let newMtn = getMtn
            getBalance.mtnBal = newMtn
            localStorage.setItem("airtimeBalance", JSON.stringify(getBalance))
            if (getBalance.mtnBal <0.50) {
                outgoingopacity.style.display = "inline";
                callerNo.style.display = "none"
                one = 0;
                two = 0;
                three = 0;
                loadHours.innerHTML = " ";
                 loadMins.innerHTML =  "00:";
                 loadSecs.innerHTML =  "00";
                 firstHours.innerHTML = " ";
                 firstMins.innerHTML =  "00:";
                 firstSecs.innerHTML =  "00";
                 alert("You've exhausted your airtime. Plese recharge")
                 secondphone.style.display = "none";
                 clearInterval(int);
                 clearInterval(count);
            }
           }else if (callerNet.innerHTML == "9MOBILE") {
            getMtn = getMtn-0.15
            let newMtn = getMtn
            getBalance.mtnBal = newMtn
            localStorage.setItem("airtimeBalance", JSON.stringify(getBalance))
            if (getBalance.mtnBal <0.50) {
                outgoingopacity.style.display = "inline";
                callerNo.style.display = "none"
                one = 0;
                two = 0;
                three = 0;
                loadHours.innerHTML = " ";
                 loadMins.innerHTML =  "00:";
                 loadSecs.innerHTML =  "00";
                 firstHours.innerHTML = " ";
                 firstMins.innerHTML =  "00:";
                 firstSecs.innerHTML =  "00";
                 alert("You've exhausted your airtime. Plese recharge")
                 secondphone.style.display = "none";
                 clearInterval(int);
                 clearInterval(count);
            }
           }
       }

       const hangUpCall = () => {
           one = 0;
           two = 0;
           three = 0;
           if (check == 2) {
               check = 1;
               clearInterval(int);
               clearInterval(count);
               audioElement.pause();
               outgoingopacity.style.display = "none"
               secondPhone.style.display = "none"

               if (callerNet.innerHTML == "MTN") {
                   var newMtn = getMtn
                   getbalance.mtnBal = newMtn
                   localStorage.setItem("airtimeBalance", JSON.stringify(getbalance))
                   var total = parseInt(getb.mtnBal) - parseInt(getbalance.mtnBal)
                   alert("Your last session was " + countSec + " secs at: ₦ " + total + ". New account balance is : ₦ " + getbalance.mtnBal.toFixed(2))
               }else if(callerNet.innerHTML == "AIRTEL") {
                var newAirtel = getAirtel
                getbalance.airtelBal = newMtn
                localStorage.setItem("airtimeBalance", JSON.stringify(getbalance))
                var total = parseInt(getb.airtelBal) - parseInt(getbalance.airtelBal)
                alert("Your last session was " + countSec + " secs at: ₦ " + total + ". New account balance is : ₦ " + getbalance.airtelBal.toFixed(2))
               }else if(callerNet.innerHTML == "GLO") {
                var newGlo = getGlo
                getbalance.gloBal = newGlo
                localStorage.setItem("airtimeBalance", JSON.stringify(getbalance))
                var total = parseInt(getb.gloBal) - parseInt(getbalance.gloBal)
                alert("Your last session was " + countSec + " secs at: ₦ " + total + ". New account balance is : ₦ " + getbalance.gloBal.toFixed(2))
               }else if(callerNet.innerHTML = "9MOBILE") {
                var newmobile = getmobile
                getbalance.mtnBal = newmobile
                localStorage.setItem("airtimeBalance", JSON.stringify(getbalance))
                var total = parseInt(getb.mobileBal) - parseInt(getbalance.mobileBal)
                alert("Your last session was " + countSec + " secs at: ₦ " + total + ". New account balance is : ₦ " + getbalance.mobileBal.toFixed(2))
               }
           }else {
               if(audioElement == undefined) {
                   secondPhone.style.display = "none"
                   outgoingopacity.style.display = "none"
               }else {
                   audioElement.pause()
                   outgoingopacity.style.display = "inline"
                   balanceDis.innerHTML = "Your last session was " + countSec + " secs at: ₦0.00"
                   document.getElementById("balance-box").style.display = "inline"
                   balanceDis.style.display = "inline" 
                   secondPhone.style.display = "none"                   
               }
           }
    }

    checktimeout = () => {
        if (audioElement.currentTime > 30) {
            audioElement.pause();
            // secondphone.style.display = "none";
            // forcalls.style.display = "block";
            // callopacity.style.display = "block";
            // selectsim.style.display = "none";
            // showbalance.style.display = "block";
            displaybalance.innerHTML = "Timeout";
            clearInterval(timeout);
        }
    }
   