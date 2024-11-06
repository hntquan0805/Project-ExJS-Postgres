"use strict";

(function ($) {
  "use strict"; // Spinner

  var spinner = function spinner() {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };

  spinner(); // Sticky Navbar

  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-sm');
    } else {
      $('.navbar').removeClass('sticky-top shadow-sm');
    }
  }); // Dropdown on mouse hover

  var $dropdown = $(".dropdown");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(function () {
        var $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      }, function () {
        var $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      });
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
})(jQuery);