document.addEventListener("DOMContentLoaded", function() {
    let multiplosList = document.getElementById("multiplos-list");
  
    for (let i = 1; i <= 300; i++) {
      if (i % 3 === 0) {
        var listItem = document.createElement("li");
        listItem.textContent = i;
        multiplosList.appendChild(listItem);
      }
    }
  });