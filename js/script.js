var searchKey = "017149004764189221444:_3kraw1vh5q";
var apiKey = "AIzaSyAz7QmmWw4ECBLs4TCo7YXWdUVw3bRrme0";
  function hndlr(response) {
      console.log(response);
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    // in production code, item.htmlTitle should have the HTML entities escaped.
    document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
  }
}

var h1 = document.createElement("h1");
h1.className = "heading";
h1.innerText = "Testing Google custom search API"
content.appendChild(h1);

var h2 = document.createElement("h2");
h2.className = "subheading";
h2.innerText = "Titles for 'Мушля' request"
content.appendChild(h2);
