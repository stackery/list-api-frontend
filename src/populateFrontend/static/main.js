// Add your API endpoint
const API_ENDPOINT = "https://sj38m13m7c.execute-api.us-west-2.amazonaws.com/development/";
const time = new Date();

//AJAX POST
document.getElementById("submit").onclick = function(){
  const inputData = {
    "item":$('#itemInput').val(),
    "timestamp": time.toLocaleString()
    };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("itemAdded").innerHTML = "Item Added!";
        },
        error: function () {
            alert("Something went wrong");
        }
    });
}

//AJAX GET REQUEST
document.getElementById("getItems").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
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
