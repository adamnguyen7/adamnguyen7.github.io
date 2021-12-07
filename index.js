window.onscroll = function() {myFunction(), myFunction2()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(".image1").on("click", function() { 
    if ($(this).attr('id') == '3') { 
    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e))
    $("#description").append('<p class = "new_image_text">Sawtooth plant in Wilkes County</p>')}
    else if ($(this).attr('id') == '4') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">Japanese Blossoms outside my house</p>')}
    else if ($(this).attr('id') == '5') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">Flying over New Mexico</p>')}
    else if ($(this).attr('id') == '6') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">Cinnamon Bun Advertisement in IKEA (look closely at bottom left-hand corner)</p>')}
        else if ($(this).attr('id') == '7') {
            document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
            $("#description").append('<p class = "new_image_text">Santa Catalina Island I</p>')}
        else if ($(this).attr('id') == '8') {
            document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
            $("#description").append('<p class = "new_image_text">Santa Catalina Island II</p>')}
        else if ($(this).attr('id') == '9') {
            document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
            $("#description").append('<p class = "new_image_text">My brother walking towards the sea</p>')}
            else if ($(this).attr('id') == '10') {
                document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                $("#description").append('<p class = "new_image_text">Purple-Pink clouds as a result of Hurricane Florence</p>')}
            else if ($(this).attr('id') == '11') {
                document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                $("#description").append('<p class = "new_image_text">Frosty the Snowman makes an appearance</p>')}
            else if ($(this).attr('id') == '12') {
                document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                $("#description").append('<p class = "new_image_text">The Old Well, one of the landmarks of Chapel Hill</p>')}
                else if ($(this).attr('id') == '13') {
                    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                    $("#description").append('<p class = "new_image_text">Flowers in the Chapel Hill Arboretum</p>')}
                else if ($(this).attr('id') == '14') {
                    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                    $("#description").append('<p class = "new_image_text">A group of new graduates celebrate outside the South Building</p>')}
                else if ($(this).attr('id') == '15') {
                    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                    $("#description").append('<p class = "new_image_text">Tar Heel NCAA Championships</p>')}
                    else if ($(this).attr('id') == '16') {
                        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                        $("#description").append('<p class = "new_image_text">The City of Charlotte</p>')}
                    else if ($(this).attr('id') == '17') {
                        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                        $("#description").append('<p class = "new_image_text">Sunrise over the Appalachian Mountains</p>')}
                    else if ($(this).attr('id') == '18') {
                        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                        $("#description").append('<p class = "new_image_text">If you look closely, it appears as if the mountains are being reflected</p>')}
                        else if ($(this).attr('id') == '19') {
                            document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                            $("#description").append('<p class = "new_image_text">Level with the clouds</p>')}
                        else if ($(this).attr('id') == '20') {
                            document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
                            $("#description").append('<p class = "new_image_text">The Bell Tower at UNC lit up</p>')}
                        
})
$(".image").on("click", function() { 
    if ($(this).attr('id') == '1') { 
    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e))
    $("#description").append('<p class = "new_image_text">Me with some of my friends after running the 2021 City of Oaks Marathon</p>')}
    else if ($(this).attr('id') == '2') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">Me dribbling up the basketball court on a breakaway steal</p>')}
    else if ($(this).attr('id') == 'unc') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">My alma mater, the University of North Carolina at Chapel Hill. Go Heels!</p>')}
    else if ($(this).attr('id') == 'marathon1') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">My results after running the 2021 City of Oaks Marathon in Raleigh, NC</p>')}
} )