const template = document.querySelector("#main-template").content;

const clone = template.cloneNode(true);

clone.querySelector('.title').textContent = `${books[0].name}`;
clone.querySelector('.author').textContent = `by ${books[0].author}`;

clone.querySelector('.release-date').textContent = `Release: ${books[0].released.month}, ${books[0].released.year}`;

books[0].reviews.forEach(addReview);

function addReview(book) {
  console.log("addreview")
}


document.querySelector('main').appendChild(clone);
