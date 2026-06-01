// Alert når bruger forsøger at vælge mere end to smage
jQuery(document).ready(function($) {
    $('.wpcf7-checkbox input[type="checkbox"]').on('change', function() {
        if ($('.wpcf7-checkbox input[type="checkbox"]:checked').length > 2) {
            this.checked = false;
            alert('Du kan kun vælge op til 2 issmage til din islagkage.');
        }
    });
});

// Skrift mellem card of wrapper på smagssiden
const cards = document.querySelectorAll(".flavor-card");

      cards.forEach((card) => {
        card.addEventListener("click", () => {
          cards.forEach((c) => {
            c.classList.remove("active");
          });

          card.classList.add("active");
        });
      });
