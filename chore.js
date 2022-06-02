// Date work section
let d = new Date();
let currentDay = d.getDay();
let currentHour = d.getHours();
let currentMinute = d.getMinutes();

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
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}

document.querySelector('#day').innerHTML = day;
document.querySelector('#hours').innerHTML = currentHour;
document.querySelector('#minutes').innerHTML = currentMinute;


const choreWeek = document.querySelector('#choreList');
let area = document.querySelector('#job');

//Chorelists
let Chorelists = {
  bathrooms: [
    'sinks',
    'mirrors',
    'toilets',
    'tubs',
    'sweep floors',
    'mop floors',
  ],
  firstFloor: [
    'dust furniture and blinds',
    'mirrors',
    'vacuum all rooms',
    'vacuum couch',
    'mop rooms',
  ],
  kitchenLaundry: [
    'clean microwave',
    'prepare recycling',
    'mop kitchen floor',
    'separate laundry',
    'wash your bed sheets',
    'wash towels',
  ],
  basementFloor: [
    'dust furniture and blinds',
    'sweep steps',
    'vacuum all floors',
    'mop all floors',
    'mirrors',
  ],
};

//Chore Assignments

const reset = () => {
  document.querySelector('#choreList').innerHTML = ' ';
};

const sortBy = () => {
  reset();
  let job = [];
  let x = d.getDate();
  switch (document.querySelector('#sortBy').value) {
    case 'Meredith':
      if (x > 0 && x <= 7){
          job = Chorelists.bathrooms;
          area = 'Bathrooms';
      }else if (x >= 8 && x <= 14){
          job = Chorelists.firstFloor;
          area = 'First Floor';
      }else if (x >= 15 && x <= 21){
          job = Chorelists.kitchenLaundry;
          area = 'Kitchen and Laundry';
      }else if (x >= 22 && x <= 31){
          job = Chorelists.basementFloor;
          area = 'Basement Floor';
      }
    break;
    case 'Genevieve':
      if (x > 0 && x <= 7){
        job = Chorelists.firstFloor;
        area = 'First Floor';
    }else if (x >= 8 && x <= 14){
      job = Chorelists.kitchenLaundry;
      area = 'Kitchen and Laundry';
    }else if (x >= 15 && x <= 21){
      job = Chorelists.basementFloor;
      area = 'Basement Floor';
    }else if (x >= 22 && x <= 31){
      job = Chorelists.bathrooms;
      area = 'Bathrooms';  
    }
    break;
    case 'Elliott':
      if (x > 0 && x <= 7){
        job = Chorelists.kitchenLaundry;
        area = 'Kitchen and Laundry';
      }else if (x >= 8 && x <= 14){
        job = Chorelists.basementFloor;
        area = 'Basement Floor';
      }else if (x >= 15 && x <= 21){
        job = Chorelists.bathrooms;
        area = 'Bathrooms';
      }else if (x >= 22 && x <= 31){
        job = Chorelists.firstFloor;
        area = 'First Floor';  
      }
    break;
    case 'Amylynne':
      if (x > 0 && x <= 7){
        job = Chorelists.basementFloor;
        area = 'Basement Floor';
      }else if (x >= 8 && x <= 14){
        job = Chorelists.bathrooms;
        area = 'Bathrooms';
      }else if (x >= 15 && x <= 21){
        job = Chorelists.firstFloor;
        area = 'First Floor';  
      }else if (x >= 22 && x <= 31){
        job = Chorelists.kitchenLaundry;
        area = 'Kitchen and Laundry';
      }
    break;
  }
  buildJobList(job);
};

function buildJobList(job) {
  job.forEach((chore) => {
  li = document.createElement('li');
  li.textContent = chore;
  choreWeek.appendChild(li);
  });
}


document.querySelector('#sortBy').addEventListener('change', sortBy);
