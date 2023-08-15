var fddb = $(".fddb");
var from = "Celcius",
    to = "Fahrenheit";

$(".fddi").click(function (e) {
    fddb.html(e.target.innerHTML);
    from = e.target.innerHTML;
});

var tddb = $(".tddb");

$(".tddi").click(function (e) {
    tddb.html(e.target.innerHTML);
    to = e.target.innerHTML;
});

$(".input").on("input", function (e) {
    if (e.target.value !== "") {
        $(".convert").removeAttr("disabled");
    } else {
        $(".convert").attr("disabled", "true");
        var res = $(".result");
        res.html("Result: 0.00");
    }
});

function convert(val, from, to) {
    var f, t;
    if (from === "Celcius") {
        f = val;
    } else if (from === "Fahrenheit") {
        f = (val - 32) * (5 / 9);
    } else {
        (f = -273.15 + val), 2;
    }

    if (to === "Celcius") {
        t = f.toFixed(2).toString() + " \u00B0C";
    } else if (to === "Fahrenheit") {
        t = (f * 1.8 + 32).toFixed(2).toString() + " \u00B0F";
    } else {
        t = (f + 273.15).toFixed(2).toString() + " \u00B0K";
    }

    return t;
}

$(".convert").click(function (e) {
    var inp = Number($(".input").val());
    var res = $(".result");
    res.html("Result: " + convert(inp, from, to));
});
