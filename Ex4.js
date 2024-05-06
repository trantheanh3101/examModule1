class Mobile{
    constructor(num,name,manufacturer,price) {
        this.num = num;
        this.name = name;
        this.manufacturer = manufacturer;
        this.price = price;
    }
    getNum(){
        return this.num;
    }
    getName(){
        return this.name;
    }
    getManufacturer(){
        return this.manufacturer;
    }
    getPrice(){
        return this.price;
    }
    setNum(num){
        this.num = num;
    }
    setName(name){
        this.name = name;
    }
    setManufacturer(manufacturer){
        this.manufacturer = manufacturer;
    }
    setPrice(price){
        this.price = price;
    }

    toString(){
        return this.num + " , " + this.name + " , " + this.manufacturer + " , "+ this.price;
    }
}


let arrayMobile = [];
let mobile1 = Mobile(1,"iphone6","apple",1000);


arrayMobile.push(mobile1);

document.getElementById("showList").innerHTML = arrayMobile;

// function addMoile() {
//     let numMobile = +prompt("fill num");
//     let nameMobile = prompt("fill name mobile");
//     let maunufactor = prompt("fill manufactor");
//     let priceMobile = prompt("fill price");
//     let newmobile = new Mobile(numMobile,nameMobile,maunufactor,priceMobile);
//     arrayMobile.push(newmobile);
// }
//
// function display(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i] + "<br>");
//     }
// }
// document.getElementById("showList").innerHTML = display(arrayMobile);




