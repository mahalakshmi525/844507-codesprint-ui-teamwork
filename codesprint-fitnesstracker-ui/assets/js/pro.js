var preference="";
var mypackage="";
function packM()
{
    mypackage=document.getElementById('pack1').value;
    document.getElementById('total').value=500;
    document.getElementById('val').value="0.0";
}
function packF()
{
    mypackage=document.getElementById('pack2').value;
    document.getElementById('total').value=400;
    document.getElementById('val').value="0.0";
}
function packT()
{
    mypackage=document.getElementById('pack3').value;
    document.getElementById('total').value=300;
    document.getElementById('val').value="0.0";
}
function other()
{
    document.getElementById('msg').value="quote will be shared on call";
    document.getElementById('total').value="";
    document.getElementById('val').value="";
}
function funM()
{
     preference=document.getElementById('male').value;
}
function funF()
{
   
    preference=document.getElementById('female').value
    
}
function funN()
{
    preference=document.getElementById('none').value
}
function fun()
{
let name=(document.getElementById('fname').value+" "+document.getElementById('lname').value);
let address=(document.getElementById('street').value+","+document.getElementById('city').value+","+document.getElementById('state').value+","+document.getElementById('country').value+","+document.getElementById('pcode').value);
let city=document.getElementById('city').value;
let phone=((document.getElementById('first').value)+(document.getElementById('second').value)+(document.getElementById('third').value)+(document.getElementById('fourth').value)+(document.getElementById('fifth').value)+(document.getElementById('sixth').value)+(document.getElementById('seventh').value)+(document.getElementById('eight').value)+(document.getElementById('ninth').value)+(document.getElementById('tenth').value)); 
obj = {
    name:name,
    address:address,
    city:city,
    mypackage:mypackage,
    preference:preference,
    phone:phone
}
let array=JSON.parse(localStorage.getItem("test")) || []
array.push(obj);
let a=localStorage.setItem("test",JSON.stringify(array))
alert("Details Submitted Successfully")
}
function fun2()
{
    let b=JSON.parse(localStorage.getItem("test"))
    let array=b;
    for(let i=0;i<array.length;i++)
    {
    let x=document.getElementById('tablebody')
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    td1.innerHTML=i+1;
    td2.innerHTML=array[i].name;
    td3.innerHTML=array[i].address;
    td4.innerHTML=array[i].city;
    td5.innerHTML=array[i].mypackage;
    td6.innerHTML=array[i].preference;
    td7.innerHTML=array[i].phone;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    x.appendChild(tr);
    }
}


