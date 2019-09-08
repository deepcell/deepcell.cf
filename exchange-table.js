/* $().ready(function(){$("#show-data").html("jQuery code added.");}); */
$().ready(function() {
	$.get('https://openexchangerates.org/api/latest.json', {app_id: '04ef44710d2a426b9fe6b899b8ee4eeb', show_alternative: 1}, function(data) {
		//console.log(data);
		//console.log("1 USD equals " + data.rates.DOGE + " DogeCoin.");
		$("#show-data-xau").html(data.rates.XAU);
		$("#show-data-xag").html(data.rates.XAG);
		$("#show-data-btc").html(data.rates.BTC);
		$("#show-data-bch").html(data.rates.BCH);
		$("#show-data-nmc").html(data.rates.NMC);
		$("#show-data-doge").html(data.rates.DOGE);
		$("#show-data-dash").html(data.rates.DASH);
		$("#show-data-zec").html(data.rates.ZEC);
		$("#show-data-xzc").html(data.rates.XZC);
		$("#show-data-xmr").html(data.rates.XMR);
		$("#show-data-ltc").html(data.rates.LTC);
		$("#show-data-usd").html(data.rates.USD);
		$("#show-data-brl").html(data.rates.BRL);
		$("#show-data-thb").html(data.rates.THB);
	});
});
