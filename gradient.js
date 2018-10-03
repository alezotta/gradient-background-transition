$(document).ready(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() < $("#p1").position().top + 50) {
         $("#box1").removeClass("opacityShow")
         $("#box1").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p1").position().top + 50) {
         $("#box1").removeClass("opacityHide")
         $("#box1").addClass("opacityShow")
      }
      if ($(this).scrollTop() < $("#p1").position().top - 10) {
         $("#box1").removeClass("opacityShow")
         $("#box1").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p2").position().top - 10) {
         $("#box2").removeClass("opacityHide")
         $("#box2").addClass("opacityShow")
         $("#box1").removeClass("opacityShow")
         $("#box1").addClass("opacityHide")
      }
      if ($(this).scrollTop() < $("#p2").position().top - 10) {
         $("#box2").removeClass("opacityShow")
         $("#box2").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p3").position().top - 10) {
         $("#box3").removeClass("opacityHide")
         $("#box3").addClass("opacityShow")
         $("#box2").removeClass("opacityShow")
         $("#box2").addClass("opacityHide")
      }
      if ($(this).scrollTop() < $("#p3").position().top - 10) {
         $("#box3").removeClass("opacityShow")
         $("#box3").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p4").position().top - 10) {
         $("#box4").removeClass("opacityHide")
         $("#box4").addClass("opacityShow")
         $("#box3").removeClass("opacityShow")
         $("#box3").addClass("opacityHide")
      }
      if ($(this).scrollTop() < $("#p4").position().top - 10) {
         $("#box4").removeClass("opacityShow")
         $("#box4").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p5").position().top - 10) {
         $("#box5").removeClass("opacityHide")
         $("#box5").addClass("opacityShow")
         $("#box4").removeClass("opacityShow")
         $("#box4").addClass("opacityHide")
      }
      if ($(this).scrollTop() < $("#p5").position().top - 10) {
         $("#box5").removeClass("opacityShow")
         $("#box5").addClass("opacityHide")
      }
      if ($(this).scrollTop() >= $("#p6").position().top - 10) {
         $("#box6").removeClass("opacityHide")
         $("#box6").addClass("opacityShow")
         $("#box5").removeClass("opacityShow")
         $("#box5").addClass("opacityHide")
      }
      if ($(this).scrollTop() < $("#p6").position().top - 10) {
         $("#box6").removeClass("opacityShow")
         $("#box6").addClass("opacityHide")
      }
   });
});
