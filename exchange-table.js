$().ready(function() {
   $("#show-data").html("Text added by jQuery code.");
});
$.get('https://openexchangerates.org/api/latest.json', {app_id: '04ef44710d2a426b9fe6b899b8ee4eeb', show_alternative: 1}, function(data) {
    console.log(data);
    alert(data);
});
