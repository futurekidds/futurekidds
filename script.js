// JavaScript for toggling dropdown menus

function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var dropdownButtons = document.querySelectorAll('.dropdown > .dropbtn, .dropdownact > .dropbtnactact, .dropdownev > .dropbtnactev, .dropdowngl > .dropbtnglgl');
    dropdownButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var dropdownId = this.nextElementSibling.id;
        toggleDropdown(dropdownId);
      });
    });
  });
  