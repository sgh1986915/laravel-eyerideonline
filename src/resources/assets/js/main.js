/// <reference path="../../../typings/jquery/jquery.d.ts"/>

$(function () {
	$('#solutions-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('.btn-calc').on('click', function () {
		console.log('test');
		var noOfDrivers = $('#drivernum').val();
		var costPerDriver = $('#cpdriver').val();
		var hoursSpent = $('#hoursspent').val();
		var installedDevices = noOfDrivers;
		var connectivityCost = 89 / 20;

		var dailyLoss = noOfDrivers * costPerDriver * hoursSpent;
		var monthlyLoss = dailyLoss * 20;
		var yearlyLoss = monthlyLoss * 12;

		$('.daily-loss span').text('$' + dailyLoss.toFixed(2).toLocaleString());
		$('.monthly-loss p').text('$' + monthlyLoss.toFixed(2).toLocaleString());
		$('.yearly-loss p').text('$' + yearlyLoss.toFixed(2).toLocaleString());

		var dailyCost = installedDevices * connectivityCost;
		var monthlyCost = dailyCost * 20;
		var yearlyCost = monthlyCost * 12;

		$('.daily-cost span').text('$' + dailyCost.toFixed(2).toLocaleString());
		$('.monthly-cost p').text('$' + monthlyCost.toFixed(2).toLocaleString());
		$('.yearly-cost p').text('$' + yearlyCost.toFixed(2).toLocaleString());

		var dailySavings = dailyLoss - dailyCost;
		var monthlySavings = dailySavings * 20;
		var yearlySavings = monthlySavings * 12;

		$('.daily-savings span').text('$' + dailySavings.toFixed(2).toLocaleString());
		$('.monthly-savings p').text('$' + monthlySavings.toFixed(2).toLocaleString());
		$('.yearly-savings p').text('$' + yearlySavings.toFixed(2).toLocaleString());

	});

	$('.btn-clear').on('click', function () {
		$('.roi-calc input').each(function () {
			$(this).val('');
		});
	});

	$('#homepage-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('#product-slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '#product-slider-thumbs',
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../../media/icons/product-left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../../media/icons/product-right-arrow.png'>",
		// variableWidth: true
	});
	$('#product-slider-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '#product-slider-main',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});

	function rateLimiter(callback, rate) {
		var timeout = null;
		rate = rate || 100;
		return function () {
			if (!timeout) {
				timeout = window.setTimeout(function () {
					callback();
					timeout = null;
				}, rate);
			}
		};
	}

	function initCounter() {
		var $window = $(window);
		var elements = $('.timer');
		var counterOptions = {
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.'
		};

		function check() {

			var toRemove = [];

			elements.each(function () {
				var counter = $(this);
				if (counter.visible(true)) {
					// start the counter animation

					var from = Number(counter.data('from')),
						to = Number(counter.data('to')),
						decimals = Number(counter.data('decimals') || 0),
						duration = Number(counter.data('duration') || 4);	// seconds

					new CountUp(this, from, to, decimals, duration, counterOptions).start();

					// remove this counter from elements, so it will not be triggered again
					toRemove.push(counter[0]);
				}
			});

			elements = elements.filter(function () {
				return toRemove.indexOf(this) === -1;
			});
		}
		$window.scroll(rateLimiter(check, 50));
		check();
	}

	initCounter();

	$('body').on('click', '.tile-link .box', function () {
		var location = $(this).parents('.tile-link').attr('data-href');
		window.location.href = location;
	});
	
	$('body').on('click', '.special-button', function (e) {
		e.preventDefault();
		var newLocation = $(this).attr('href');
		window.location.href = newLocation;
		location.reload();
	});
	

});