(function ($) {
  "use strict";

  // FEATHER INIT
  feather.replace();

  // MENU
  const menu_open_btn = document.querySelector(".menu_btn");
  const item_has_children = document.querySelectorAll(
    ".mobile_menu_item_has_children"
  );
  const menu_item_has_children = document.querySelectorAll(
    ".menu_item_has_children > a"
  );
  const menu_close_btn = document.querySelector(".close_button");
  const menu = document.querySelector(".popup_mobile_menu");
  const search_box = document.querySelector(".header_search_box");
  const search_btn = document.querySelector(".header_search_btn");
  const scroll_top_btn = document.querySelector(".backto_top");
  const contain_video = document.querySelector(".popup_video");

  menu_open_btn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.add("show_menu");
  });

  menu_close_btn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.remove("show_menu");
  });

  menu.addEventListener("click", function (event) {
    if (event.target === this && event.target === menu) {
      menu.classList.remove("show_menu");
    }
  });

  // SHOW HEADER SEARCH BOX
  search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.toggle("close");
    search_box.classList.toggle("show_box");
  });
  // Hide search box when click outside
  document.addEventListener("click", function (e) {
    if (
      e.target != search_btn &&
      search_box.classList.contains("show_box") &&
      !document.querySelector(".header_search_form").contains(e.target)
    ) {
      search_btn.classList.toggle("close");
      search_box.classList.toggle("show_box");
    }
  });

  // Menu Dropdown
  item_has_children.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      item_has_children.forEach(function (list, i) {
        if (index !== i) {
          list.classList.remove("is_toggle");
        }
      });
      item.classList.toggle("is_toggle");
    });
  });

  menu_item_has_children.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  // SHOWING VIDEO POPUP
  if (contain_video) {
    $(".popup_video").magnificPopup({
      type: "iframe",
      mainClass: "video_fade",
      removalDelay: 300,
      preloader: true,
      fixedContentPos: true,
    });
  }

  // HERO SLIDER
  new Swiper(".hero_slider", {
    effect: "fade",
    loop: true,
    speed: 500,
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide_btn_next",
    },
  });

  // PORTFOLIO SLIDER
  const portfolioSliders = [".portfolio_slider_01", ".portfolio_slider_02"];
  for (let i = 0; i < portfolioSliders.length; i++) {
    new Swiper(portfolioSliders[i], {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      speed: 1000,

      pagination: {
        el: ".slider_pagination__item",
        clickable: true,
      },

      navigation: {
        prevEl: ".slide_btn_prev",
        nextEl: ".slide_btn_next",
      },
    });
  }

  // INSTAGRAM SLIDER
  new Swiper(".instagram_slider", {
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });

  // TEAM SLIDER
  new Swiper(".team_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 700,

    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
      },
    },
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    navigation: {
      prevEl: ".slide_btn_prev",
      nextEl: ".slide_btn_next",
    },
  });

  // TESTIMONIAL SLIDER
  const testimonialSliders = [
    ".testimonial_slider_01",
    ".testimonial_slider_02",
  ];
  for (let i = 0; i < testimonialSliders.length; i++) {
    new Swiper(testimonialSliders[i], {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      loop: true,
      pagination: {
        el: ".slider_pagination__item",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
      navigation: {
        prevEl: ".slide_btn_prev",
        nextEl: ".slide_btn_next",
      },
    });
  }

  // Services Slider
  new Swiper(".service_slider_two", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },

    navigation: {
      prevEl: ".slide_btn_prev",
      nextEl: ".slide_btn_next",
    },
  });

  // Services Sldier Three
  new Swiper(".service_slider_three", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    navigation: {
      prevEl: ".slide_btn_prev",
      nextEl: ".slide_btn_next",
    },
  });

  // Progress Bar
  const items = $(".progress_bar").find(".progress_bar__item");

  items.each(function () {
    const item = $(this).find(".progress_bar__progress");
    var itemValue = item.data("progress");
    let i = 0;
    const value = $(this);

    var count = setInterval(function () {
      if (i <= itemValue) {
        var iStr = i.toString();
        item.css({
          width: iStr + "%",
        });
        value.find(".progress_bar__value").html(iStr + "%");
      } else {
        clearInterval(count);
      }
      i++;
    }, 20);
  });

  // Portfolio Filtering
  const $portfolioFilterArea = $(".portfolio_filter_area");
  let grid;
  $portfolioFilterArea.each(function () {
    const $this = $(this),
      $portfolioFilterItem = ".grid_item";
    $this.imagesLoaded(function () {
      grid = $this.isotope({
        itemSelector: $portfolioFilterItem,
        percentPosition: true,
        masonry: {
          columnWidth: 0,
        },
      });

      // filter items on button click
      $(".filter_btns").on("click", "button", function (e) {
        $(".filter_btns button").removeClass("active");
        $(this).addClass("active");
        // Filter Item
        var filterValue = $(this).attr("data-filter");
        grid.isotope({
          filter: filterValue,
        });
      });
    });
  });

  /*-------------------------------------------------
	  wow js init
	--------------------------------------------------*/
  new WOW().init();

  // Scroll
  window.addEventListener("scroll", function () {
    const navbar_height = document.querySelector(".header").offsetHeight;
    if (window.scrollY > navbar_height + 150) {
      document.getElementById("sticky_header").classList.add("fixed_top");
    } else if (window.scrollY < navbar_height) {
      document.getElementById("sticky_header").classList.remove("fixed_top");
    }

    if (window.scrollY > window.innerHeight) {
      scroll_top_btn.classList.add("show");
    } else {
      scroll_top_btn.classList.remove("show");
    }
  });

  // Scroll to top
  scroll_top_btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})(jQuery, window);
