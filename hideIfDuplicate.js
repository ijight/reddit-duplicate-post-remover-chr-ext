var existingImageList = [];
var removedPostCount = 0;
var body = document.getElementsByTagName('body');



function hide() {
   
    var elements = document.getElementsByClassName("rpBJOHq2PR60pnwJlUyP0")[0];
    var postsList = elements.childNodes;
    for (var i = 1; i < postsList.length; i++) {

        var image_container = postsList[i];
        console.log(postsList[i]);
        if (typeof postsList[i].getElementsByClassName('media-element')[0] !== 'undefined') {
            var image = postsList[i].getElementsByClassName('media-element')[0].src;
        } else {
            image = "something-else";
        }

        if (!image_container.classList.contains("post-removal-script-ignore")) {
            if (existingImageList.includes(image)) {
                image_container.style.display = "none";
                removedPostCount++;
                image_container.classList.add("post-removal-script-ignore");

            } else {
                existingImageList.push(image);
                image_container.classList.add("post-removal-script-ignore");
            }
        }
    }
    console.log("I have removed " + removedPostCount + " posts.");
}

document.getElementsByClassName("_1vyLCp-v-tE5QvZovwrASa")[0].addEventListener("click", hide);
