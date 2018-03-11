var a:number=  100;
console.log(a);

var ds:string[] = ["Bi","Bo"];
console.log(ds[1]);
console.log(ds.length);

for(let ket in ds){
    console.log("IN " + ket);
}

for(let k of ds){
    console.log("OF " + k);
}

class HocSinh {
    public maso:string;
    public hoten:string;
    public namsinh:number;
    private tien:number;
    constructor(m:string, h:string, n:number,t:number){
            this.maso = m;
            this.hoten = h;
            this.namsinh = n;
            this.tien = t;
    }

    setTien(n:number){
        if (n > 0){
            this.tien = n;
        }else {
            this.tien = 0;
        }
    }

    getTien(){
        return this.tien;
    }
}

var bi:HocSinh = new HocSinh("ms", "Bi", 1995,-10000);
// bi.setTien(250);
console.log(bi);