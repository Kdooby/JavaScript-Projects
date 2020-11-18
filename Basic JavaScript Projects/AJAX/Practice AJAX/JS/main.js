function getContent() {
    var ajax = new XMLHttpRequest(); 
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            document.getElementById("btn_content").style.display = "none";
        }
    };
    
    ajax.open("GET", "Content_Practice.html", true);
    ajax.send();

}

