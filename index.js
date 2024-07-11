 let homeEl = document.getElementById("home-points");
 let count1 = 0
 
 function incrementOneHome(){
     count1 += 1
     homeEl.textContent = count1
 }
 
 function incrementTwoHome(){
     count1 += 2
     homeEl.textContent = count1
 }
 
 function incrementThreeHome(){
     count1 += 3
     homeEl.textContent = count1
 }
 
 
 
let guestEl = document.getElementById('guest-points')
let count2 = 0
 function incrementOneGuest(){
     count2 += 1
    guestEl.textContent = count2
 }
 
 function incrementTwoGuest(){
     count2 += 2
     guestEl.textContent = count2
 }
 
 function incrementThreeGuest(){
     count2 += 3
     guestEl.textContent = count2
 }
 
function resetEl(){
    
    count2 = 0
    count1 = 0
    guestEl.textContent = count2
    homeEl.textContent = count2
}

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

