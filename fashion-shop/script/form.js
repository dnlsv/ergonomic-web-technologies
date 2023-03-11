var modal = document.getElementsByClassName("modal")[0];

var btn = document.getElementsByClassName("help")[0];

var span = document.getElementsByClassName("close")[0];

var modal_content = $(".modal_content");

btn.onclick = function () {
    modal.style.display = "block";
    modal_content.animate({ height: 290, width: 450 }, 1000);
};

span.onclick = function () {
    modal_content.animate({ height: 0, width: 0 }, 1000);
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal_content.animate({ height: 0, width: 0 }, 1000);
        modal.style.display = "none";
    }
};
