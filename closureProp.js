var a = 50
function scope(b) {
    return function (c) {
        return function (d) {
            return a - b * c + d
        }
    }
}
console.log(scope(10)(5)(5))

function scope2() {
    var e = 10
    function inner() {
        var f = 10;
        {
            var g = 10
            return a * e + f / g
        }
    }
    console.log(inner())
}
scope2()