// Alert når bruger forsøger at vælge mere end to smage
jQuery(document).ready(function($) {
    $('.wpcf7-checkbox input[type="checkbox"]').on('change', function() {
        if ($('.wpcf7-checkbox input[type="checkbox"]:checked').length > 2) {
            this.checked = false;
            alert('Du kan kun vælge op til 2 issmage til din islagkage.');
        }
    });
});