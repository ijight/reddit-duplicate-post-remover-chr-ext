// background.js

let color = '#3aa757';

document.getElementById("duplicateTestButton").addEventListener("click", hideIfDuplicate);
var body = document.getElementsByTagName('body');
document.body.innerHTML +='<div id="duplicateTestButton"style="position:fixed;top:100px;left:10px;width:100px;height:100px;z-index:100;background-color:red;top"><button>Recheck Posts</button><p id="duplicateTestButtonText">'+removedPostCount+'</p></div>';