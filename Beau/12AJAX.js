// 12 AJAX
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://crossorigin.me/http://carnes.cc/code/ajax_example.txt", true);
    xhttp.send();
}

/*
Adding "https://crossorigin.me" prevents the following error:
XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No 'Access-Control-Allow-Origin' header is present on the requested resources. Origin 'http://s.codepen.io' is therefore not allowed access.
*/