$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".header-top__menus").slideToggle();
        $(this).toggleClass("cross");
    });

    $(".play-button").click(function () {
        $(".modal-background").show();
        $(".page-content__taking-the-lead__play-video").show();
    });

    $(".modal-background").click(function () {
        $(this).hide();
    })

    $(".header-top__menus ul li").click(function () {
        $(this > ul).show();
    })
})