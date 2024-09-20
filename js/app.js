

let lSelectedseat = document.getElementById("Selected-seat");
let lseatBooked = document.getElementById("seatBooked");
let ltotalpriceId = document.getElementById("total-priceId");


let seatBookedArr =[];
let price=0;
function handleSelectSeat(event)
{

    event.classList.add('bg-primary');
    event.classList.add('text-white');
    seatBookedArr.push(event.innerText);
    lseatBooked.innerText=seatBookedArr.length;

    // console.log(seatBookedArr);
    // console.log(seatBookedArr.length);
    price +=500;
    ltotalpriceId.innerText=price  ;
    lSelectedseat.innerHTML +=`<li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    
    </li>`


}