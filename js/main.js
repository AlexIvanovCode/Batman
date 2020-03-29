$(document).ready(function() {
  let tabsItem = $(".tabs-item");
  //console.log('tabsItem: ', tabsItem);
  tabsItem.on("click", function(event) {
    event.preventDefault();
    let activeContent = $(this).attr("href");
    $(".visible").toggleClass("visible");
    // console.log("activeContent: ", activeContent);
    $(activeContent).toggleClass("visible");

    $(".tabs-item-active").toggleClass("tabs-item-active");
    $(this).toggleClass("tabs-item-active");
    //   console.log($(this).attr('href'));
  });
});
