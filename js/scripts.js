(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  })(jQuery); // End of use strict


function Enviar() {
    const box_example = document.getElementById("box_example")
    let a = document.getElementById("a").value != "" ? document.getElementById("a").value : "";
    let b = document.getElementById("b").value != "" ? document.getElementById("b").value : "";
    let c = document.getElementById("c").value != "" ? document.getElementById("c").value : "";
    let d = document.getElementById("d").value != "" ? document.getElementById("d").value : "";
    let e = document.getElementById("e").value != "" ? document.getElementById("e").value : "";
    let f = document.getElementById("f").value != "" ? document.getElementById("f").value : "";
    let g = document.getElementById("g").value != "" ? document.getElementById("g").value : "";
    let h = document.getElementById("h").value != "" ? document.getElementById("h").value : "";

    console.log(e != "" ? a +" "+ b +" "+ c +" "+ d + " / " + e +" "+ f +" "+ g +" "+ h : a +" "+ b +" "+ c +" "+ d)

    box_example.style.borderRadius = e != "" ? a +" "+ b +" "+ c +" "+ d + " / " + e +" "+ f +" "+ g +" "+ h : a +" "+ b +" "+ c +" "+ d;

}

function Extract() {
    const box_example = document.getElementById("box_example")

    var styles = window.getComputedStyle(box_example, null);
    for (style in styles) {
        if (style.includes("Radius") && style.includes("border") && !style.includes("borderRadius"))
            console.log(style, styles[style])
    }
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}