window.showToastr = function (type, message) {
    if (type == "success") {

        toastr.success(message);
    }
    if (type == "error") {
        toastr.error(message);
    }
}  


toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



window.ShowSwal = function (type, message) {

    return new Promise((resolve) => {

        if (type == "success") {
            Swal.fire({
                title: "Good job!",
                text: message,
                icon: "success"
            });
        }
        if (type == "error") {
            Swal.fire({
                title: "Task Failed!",
                text: message,
                icon: "error"
            });
        }

        if (type == "delete") {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                return resolve(result.isConfirmed)
            });
        }

    });

}
