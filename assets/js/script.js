$(document).ready(function () {
    // Set the date and time to count down to
    var targetDate = new Date('July 10, 2024 01:34:00');

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);

        if (distance < 0) {
            clearInterval(x);
            $('#countdown').html("EXPIRED");
        }
    }

    updateCountdown();
    var x = setInterval(updateCountdown, 1000);

    // Add the .active-day class to the current day
    function setActiveDay() {
        var currentDayIndex = new Date().getDay() - 1; // JavaScript's getDay() returns 0 for Sunday, 1 for Monday, etc.
        // Adjust for your needs if Sunday should be considered the start of the week
        if (currentDayIndex < 0) {
            currentDayIndex = 6; // Saturday
        }
        $('.day-list-item').removeClass('active-day');
        $('.day-list-item').eq(currentDayIndex).addClass('active-day');
    }

    // Initially set the active day
    setActiveDay();

    // Handle button click event
    $('.coinrreceived-btn').click(function () {
        var parent = $(this).closest('.day-list-item');
        if (parent.hasClass('active-day')) {
            parent.removeClass('active-day').addClass('coin-received');
        }
    });

    $(".get-awerdnow").click(function () {
        $(".get-awerd-popup").toggle();
    });
});