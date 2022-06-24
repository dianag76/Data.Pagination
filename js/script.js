/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

console.log(data)


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function  showPage(list,page) {
   const startIndex = (page * 9 ) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
   
    if (i>= startIndex && i < endIndex) {
       let studentItem =
        `
        <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li> 
    ` ;
    studentList.insertAdjacentHTML('beforeend', studentItem);
  }
 }
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination (list) {
   const numOfPages = Math.ceil(list.length/9);
   const linkList =  document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i<= numOfPages; i++){
      const button = 
      `
      <li> 
      <button type = "button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
       }

       const firstButton = document.querySelector('.active');
       firstButton = '';
       linkList.addEventListener ('click', (e) => {
      if (e.linkList.tagName === 'BUTTON') {
         const firstElement = document.querySelector('.active')[0];
         firstElement.className = '';
         showPage (list, e.target.textContent);
      }
      console.log(list);
      addPagination(data);
});
};


// Call functions
showPage(data, 1);
addPagination(data);






