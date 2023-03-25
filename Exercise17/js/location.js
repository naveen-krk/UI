$( function() {
    $( "#tabs" ).tabs();
  } );
  $( function() {
    $( "#accordion" ).accordion();
  } );
  $table= $('<table class="table">');
    $.getJSON('js/locations.json',function(location)
     {

        location.forEach(element => {
            $row=$('<tr class="row">');
            $column=$(`<td><div ><img src="${element.country}" class="image"/></div></td>"+"<td>${element.state}</td>"+"<td>${element.city}</td>"+"<td>${element.contact}</td>`);
            $row.append($column);
            $table.append($row);
        });
    });
       $("#tabs-3").append($table);