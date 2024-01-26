document.addEventListener("DOMContentLoaded", function () {
  var categoryElement = document.querySelector('.Category');
  var categoriesDropdown = document.querySelector('.categories');

  if (categoryElement && categoriesDropdown) {
    categoryElement.addEventListener('mouseenter', function () {
      showCategories();
      document.querySelector("i").style.transform = "rotate(180deg)";
    });

    categoryElement.addEventListener('mouseleave', function () {
      setTimeout(function () {
        if (!categoriesDropdown.matches(':hover')) {
          hideCategories();
        }

      }, 1000); // Adjust the delay if needed

    });

    categoriesDropdown.addEventListener('mouseenter', function () {
      keepCategoriesVisible();
      document.querySelector("i").style.transform = "rotate(180deg)";
    });

    categoriesDropdown.addEventListener('mouseleave', function () {
      hideCategories();
    });
  }

  function showCategories() {
    categoriesDropdown.style.display = 'block';
    document.querySelector("i").style.transform = "rotate(180deg)";
  }

  function hideCategories() {
    categoriesDropdown.style.display = 'none';
    document.querySelector("i").style.transform = "rotate(0deg)";
  }

  function keepCategoriesVisible() {
    categoriesDropdown.style.display = 'block';
    document.querySelector("i").style.transform = "rotate(180deg)";
  }
});

let leftColumn = document.querySelector(".left ul");
let categoriesUl = document.querySelectorAll(".categories ul li a");


// document.addEventListener("DOMContentLoaded", function () {
let categoriesData = {
  "Bakeries": ["Defence", "Clifton", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Cafes": ["Defence", "Clifton Block 2", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Education": ["Defence", "Clifton Block 3", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Hospitals": ["Defence", "Clifton Block 4", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Hotels": ["Defence", "Clifton Block 5", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Restaurants": ["Defence", "Clifton Block 6", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Shopping Malls": ["Defence", "Clifton Block 7", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Travels": ["Defence", "Clifton Block 8", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"],
  "Weddings": ["Defence", "Clifton Block 9", "Landhi", "Korangi", "Nazimabad", "Gulshan-e-Iqbal", "Qayyumabad", "Kharadar", "Liyari", "Saddar"]
};

const leftContainer = document.querySelector(".left");
const categoryList = document.getElementById("categoryList");

// Add event listener to the parent ul element
categoryList.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    if (currentUrl === 'http://127.0.0.1:3000/index.html') {
      const categoryName = event.target.getAttribute('data-category');
      showCategory(categoryName);
    }
    else {
      event.preventDefault();
      const categoryName = event.target.getAttribute('data-category');
      showCategory(categoryName);
    }
  }
});

function showCategory(categoryName) {
  let areasList = categoriesData[categoryName];
  let areasContent = areasList.map(area => `<li>${area}</li>`).join('');
  leftContainer.innerHTML = `<ul>${areasContent}</ul>`;
}