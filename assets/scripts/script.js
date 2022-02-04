/* librairie AOOS */
AOS.init();
/* notification */
function messageOff() {
    if (document.querySelector('.disparition')) {
        setTimeout(
            function () {
                document.querySelector('.disparition').style.display = "none";
            }, 4000
        );
    }
}


/* Afficher / cacher le password */
/* $(".toggle-password").on("click", handler)(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
}); */

/* Appel de la fonction */
messageOff();

/*  */
var modalConfirm = function (callback) {

    $("#btn-confirm").on("click", function () {
        $("#mi-modal").modal('show');
    });

    $("#modal-btn-si").on("click", function () {
        callback(true);
        $("#mi-modal").modal('hide');
    });

    $("#modal-btn-no").on("click", function () {
        callback(false);
        $("#mi-modal").modal('hide');
    });
};

modalConfirm(function (confirm) {
    if (confirm) {
        swal(
            'Vous avez bien té déconnecté', {
            icon: "info",

        });

    } else {

    }
});
