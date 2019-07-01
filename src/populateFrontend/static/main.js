// Add your API endpoint
const API_ENDPOINT = "https://2hbr6ivoi7.execute-api.us-west-2.amazonaws.com/demo";
const time = new Date();

//AJAX POST
document.getElementById("submit").onclick = function(e){
  e.preventDefault();
  console.log(inputData)
  const inputData = {
    "item":$('#itemInput').val(),
    "timestamp": time.toLocaleString()
    };
    console.log(inputData);
  $.ajax({
        url: `${API_ENDPOINT}/submit`,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("itemAdded").innerHTML = "Item Added!";
          console.log(response);
        },
        error: function () {
            alert("Something went wrong");
        }
    });
}

//AJAX GET REQUEST
document.getElementById("getItems").onclick = function(e){
  e.preventDefault();
  $.ajax({
        url: `${API_ENDPOINT}/items`,
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
