/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function  showPage(list,page) {
//Two variables that will set to 9 students to display per page 
   const startIndex = (page * 9 ) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
//Loop that will display and divide the entire list.
  for (let i = 0; i < list.length; i++) {
   // Conditional statement that will limit students per page and creation of new DOM element 
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
    // Inserting new DOM element into the DOM 
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
// Declaring variable that will create first button and activing it so it can produce event when clicked
       const firstButton = document.querySelector('button');
       firstButton.classList.add('active')

       linkList.addEventListener ('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         // Event listener to loop through all elements with the tagName 'button'
         let active_button = document.querySelector('.active');
         //Remove and add active class each time  button in the loop is clicked
         active_button.classList.remove('active');
         e.target.classList.add('active');
         showPage (list, e.target.textContent);
      }
      console.log(list);
});
};

// Call functions to display data in page selected
showPage(data, 1);
addPagination(data);






