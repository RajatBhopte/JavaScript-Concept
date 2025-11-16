// Dom

document
  .getElementById("ChangeParagraph")
  .addEventListener("click", function () {
    let paragrah = document.getElementById("Info");
    paragrah.textContent = "The Paragraph is Changed";
  });

// example 2;
document.getElementById("HighlightCity").addEventListener("click", function () {
  let citiylist = document.getElementById("citielists");

  // Check if there is at least one list item
  if (citiylist.firstElementChild) {
    citiylist.firstChild.classList.add("highlight");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("HighlightCity")
    .addEventListener("click", function () {
      let citylist = document.getElementById("citielists");

      if (citylist.firstElementChild) {
        citylist.firstElementChild.classList.add("highlight");
      }
    });
});

document
  .getElementById("HighlightItems")
  .addEventListener("click", function () {
    let items = document.getElementById("Items");

    items.firstElementChild.add("highlight");
  });
