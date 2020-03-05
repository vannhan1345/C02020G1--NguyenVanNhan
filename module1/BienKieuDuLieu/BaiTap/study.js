function thongtin() {
let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let birthday= document.getElementById("date").value;
let email= document.getElementById("email").value;
let address = document.getElementById("address").value;
let customerType = document.getElementById("customerType").value;
let discount= document.getElementById("discount").value;
let numberCome = document.getElementById("numberCome").value;
let rentDay=document.getElementById("rentDay").value;
let seviceType=document.getElementById("seviceType").value;
let roomType= document.getElementById("roomType").value;
let totalRoom= document.getElementById("amount");
if (seviceType==="Villa") {
    totalRoom.value=500*rentDay*(1-discount/100);
}
 else if (seviceType==="House") {
        totalRoom.value = 300 * rentDay * (1 - discount / 100);
    }
    else { totalRoom.value = 100 * rentDay * (1 - discount / 100);
    }

    document.getElementById("showID").innerText = id;
    document.getElementById("showName").innerText=name;
    document.getElementById("showDate").innerText=birthday;
    document.getElementById("showEmail").innerText=email;
    document.getElementById("showAddress").innerText=address;
    document.getElementById("showCustomerType").innerText=customerType;
    document.getElementById("showDiscount").innerText=discount;
    document.getElementById("showNumberCome").innerText=numberCome;
    document.getElementById("showRentDay").innerText=rentDay;
    document.getElementById("showSevicetype").innerText=seviceType;
    document.getElementById("showRoomType").innerText=roomType;
    // document.getElementById("amount").value=totalRoom;

}