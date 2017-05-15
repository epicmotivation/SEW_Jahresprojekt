$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "/ajaxteam",
        success: function (data) {
            var element = JSON.parse(data);
            for (var block of element.Teamdaten) {
                $('#team').append(

                    "<div class='col-sm-3 text-center'>" +
                    "<div class='team-member'>" +
                    "<img src='" + block.img + "' class='img-circle' alt=''>" +
                    "<br>" + "<br>" +
                    "<h4>" + block.name + "</h4>" +
                    "<p>" + block.role + "</p>" +
                    "</div>" +
                    "</div>"

                );
            }

        }
    });
});