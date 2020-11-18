function getContent() {
    var ajax = new XMLHttpRequest(); //asign variable ajax to a new XMLHttpRequest
    ajax.onreadystatechange = function() { //when the state changes...do this
        if (this.readyState == 4 && this.status == 200) { //If the state is ready to send, and the status code is 200 "OK"
            document.getElementById("content").innerHTML = this.responseText;
            document.getElementById("btn_content").style.display = "none";
        }
    };
    
    ajax.open("GET", "Content_Practice.html");
    ajax.send();

}

