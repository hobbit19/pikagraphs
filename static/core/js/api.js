
function getUserInfo(username, responseHandler)
{
    ajaxGet("/api/user_info/" + username + "/", function(result) {
        responseHandler(JSON.parse(result));
    }, function(status) {
        return { error: status }
    });
}

function getUserGraphs(username, responseHandler)
{
    ajaxGet("/api/user_graphs/" + username + "/", function(result) {
        responseHandler(JSON.parse(result));
    }, function(status) {
        return { error: status }
    });
}

function getUserGraph(username, graphType, responseHandler)
{
    ajaxGet("/api/user_graph/" + username + "/" + graphType + "/", function(result) {
        responseHandler(JSON.parse(result));
    }, function(status) {
        return { error: status }
    });
}

function ajaxGet(url, successHandler, errorHandler)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                successHandler(this.responseText);
            } else {
                errorHandler(this.status);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}