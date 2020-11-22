function CustomAlert(){
    this.showPopUp = function(headerText, bodyText){
        var winW = window.innerWidth;
        var dialogbox = document.getElementById('dialogbox');
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = headerText;
        document.getElementById('dialogboxbody').innerHTML = bodyText;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
	}
}

Alert = new CustomAlert();