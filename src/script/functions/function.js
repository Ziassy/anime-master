import $ from 'jquery';
import "../component/app-bar.js";
import "../component/season-bar.js";


$('.btn-genre').on('click', function () {
    $('.btn-genre').removeClass('btn-genre-active');
    $('.link-season').removeClass('link-season-active');
    $(this).addClass('btn-genre-active');
});

$('.link-season').on('click', function () {
    $('.btn-genre').removeClass('btn-genre-active');
    $('.link-season').removeClass('link-season-active');

    $(this).addClass('link-season-active');
});