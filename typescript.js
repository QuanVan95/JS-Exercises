var a = 100;
console.log(a);
var ds = ["Bi", "Bo"];
console.log(ds[1]);
console.log(ds.length);
for (var ket in ds) {
    console.log("IN " + ket);
}
for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
    var k = ds_1[_i];
    console.log("OF " + k);
}
var HocSinh = /** @class */ (function () {
    function HocSinh(m, h, n, t) {
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
        this.tien = t;
    }
    HocSinh.prototype.setTien = function (n) {
        if (n > 0) {
            this.tien = n;
        }
        else {
            this.tien = 0;
        }
    };
    HocSinh.prototype.getTien = function () {
        return this.tien;
    };
    return HocSinh;
}());
var bi = new HocSinh("ms", "Bi", 1995, -10000);
// bi.setTien(250);
console.log(bi);
