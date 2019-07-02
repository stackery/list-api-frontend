// Add your API endpoint
const API_ENDPOINT = "https://2hbr6ivoi7.execute-api.us-west-2.amazonaws.com/demo";
const time = new Date();

$(function() {
  console.log( "ready!" );
});

//AJAX POST
$('#submit').click(function(e) {
  e.preventDefault();

  const inputData = {
    "item": $('#itemInput').val(),
    "timestamp": time.toLocaleString()
    };
    console.log(JSON.stringify(inputData));

  var ajaxRequest = $.ajax({
      type: "POST",
      url: `${API_ENDPOINT}/post`,
      data: JSON.stringify(inputData),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });

  //When the request successfully finished, execute passed in function
  ajaxRequest.done(function(response){
    document.getElementById("itemAdded").innerHTML = "Item Added!";
    console.log(response);
  });

  //When the request failed, execute the passed in function
  ajaxRequest.fail(function(jqXHR, status){
    alert(`Something went wrong: ${JSON.stringify(status)}`);
    console.log(jqXHR);
  });
});

//AJAX GET REQUEST
document.getElementById("getItems").onclick = function(e){
  e.preventDefault();
  $.ajax({
        url: `${API_ENDPOINT}/get`,
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#itemsTable tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#itemsTable").append("<tr> \
                <th scope='row'>" + data['Id'] + "</td> \
                <td>" + data['item'] + "</td> \
                <td>" + data['timestamp'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("Something went wrong");
        }
    });
}

