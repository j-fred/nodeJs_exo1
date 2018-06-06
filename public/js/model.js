function load(){

}

$(function () {
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:9999/list',						
        success: function (data) {
            $('#zone').html(' <ul id="list" class="list-group list-group-flush"></ul>');
            $.each(data, function (index, d) {
                $('#list').append('<li class="list-group-item">' + d._id + ' => ' + d.name.first + " " + d.name.last + '</li>');
            });
        }
    });

  
    $('#btn-reload').click(function (e) {
        e.preventDefault();
        console.log('btn-reload clicked');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:9999/list',						
            success: function (data) {
                $('#zone').html(' <ul id="list" class="list-group list-group-flush"></ul>');
                $.each(data, function (index, d) {
                    $('#list').append('<li class="list-group-item">' + index + ' => ' + d.name.first + " " + d.name.last + '</li>');
                });
            }
        });
    });

    $('#btn-remove').click(function (e) {
        $('#zone').empty();
    });

});