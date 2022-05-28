//Time section
let currentDay = new Date().getDay();
let currentHour = new Date().getHours();
let currentMinute = new Date().getMinutes();
let d = new Date().getDate();

switch (currentDay) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';

}
if (currentHour > 12) {
    currentHour = currentHour - 12;
}
if (currentMinute < 10){
    currentMinute = `0${currentMinute}`
}

document.querySelector('#day').innerHTML = day;
document.querySelector('#hours').innerHTML = currentHour;
document.querySelector('#minutes').innerHTML = currentMinute;

//Chorelists
let Chorelists = {
    bathrooms: ['sinks', 'mirrors', 'toilets', 'tubs', 'sweep floors', 'mop floors'],
    firstFloor: ['dust furniture and blinds', 'mirrors', 'vacuum all rooms', 'vacuum couch', 'mop rooms'],
    kitchenLaundry: ['clean microwave', 'prepare recycling', 'mop kitchen floor', 'separate laundry', 'wash your bed sheets', 'wash towels' ],
    basementFloor: ['dust furniture and blinds', 'sweep steps', 'vacuum all floors', 'mop all floors', 'mirrors'],
}

//Chore Assignments


const reset = () => {
    document.querySelector('#choreList').innerHTML = ' ';
}

const sortBy = (d, Chorelists) => {
    reset();
    let person = document.querySelector('#sortBy').value;
    
    if (person === 'Meredith'){
        document.querySelector('#name').innerHTML = 'Meredith';
        switch (d){
            case d >= 0 && d <= 7:
                choreWeek = Chorelists.bathrooms.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 8 && d <= 14:
                choreWeek = Chorelists.firstFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 15 && d <= 21:
                choreWeek = Chorelists.kitchenLaundry.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 22 && d <= 31:
                choreWeek = Chorelists.basementFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
        
        }
        document.querySelector('#choreList').innerHTML = choreWeek;
    }else if (person === 'Genevieve'){
        document.querySelector('#name').innerHTML = 'Genevieve';
        switch (d){
            case d >= 22 && d <= 31:
                choreWeek = Chorelists.bathrooms.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 0 && d <= 7:
                choreWeek = Chorelists.firstFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 8 && d <= 14:
                choreWeek = Chorelists.kitchenLaundry.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 15 && d <= 21:
                choreWeek = Chorelists.basementFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
        }
        document.querySelector('#choreList').innerHTML = choreWeek;
    }else if (person === 'Elliott'){
        document.querySelector('#name').innerHTML = 'Elliott';
        switch (d){
            case d >= 15 && d <= 21:
                choreWeek = Chorelists.bathrooms.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                    
                });
                break;
            case d >= 22 && d <= 31:
                choreWeek = Chorelists.firstFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 0 && d <= 7:
                choreWeek = Chorelists.kitchenLaundry.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)

                });
                break;
            case d >= 8 && d <= 14:
                choreWeek = Chorelists.basementFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
        }
        document.querySelector('#choreList').innerHTML = choreWeek;
    }else if (person === 'Amylynne'){
        document.querySelector('#name').innerHTML = 'Amylynne';
        switch (d){
            case d >= 8 && d <= 14:
                choreWeek = Chorelists.bathrooms.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 15 && d <= 21:
                choreWeek = Chorelists.firstFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 22 && d <= 31:
                choreWeek = Chorelists.kitchenLaundry.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
            case d >= 0 && d <= 7:
                choreWeek = Chorelists.basementFloor.forEach(chore =>{
                    li = document.createElement('li');
                    li.textContent = chore;
                    choreWeek.appendChild(li)
                });
                break;
        }
        document.querySelector('#choreList').innerHTML = choreWeek;
    }
}
document.querySelector('#sortBy').addEventListener('change', sortBy);




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);