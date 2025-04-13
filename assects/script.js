//get input value

const userForm=document.getElementById('userForm')

userForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const subject1=Number(document.getElementById('subject1').value)
    const subject2=Number(document.getElementById('subject2').value)
    const subject3=Number(document.getElementById('subject3').value)
    const subject4=Number(document.getElementById('subject4').value)
    const subject5=Number(document.getElementById('subject5').value)

    const totalMark = subject1+subject2+subject3+subject4+subject5;
       
    //avarage calculation
    const avarage = totalMark/5;
    console.log(avarage);
let message;

if(avarage>=90){
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : A+"

    
}else if(avarage>=80 && avarage<=89){
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : A"

}else if(avarage >=70 && avarage <=79){
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : B"

}else if(avarage >=60 && avarage <=69){
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : C"

}else if(avarage >=50 && avarage <=59){
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : D"

}else{
    message="Total Mark is: "+totalMark + "\n" +"Avarage Mark is : "+avarage +"\n" +"Your Grade is : F"

}


console.log(message);
alert(message)





}) 






























// userForm.addEventListener('submit', function (event) {
//     event.preventDefault()
//     const firstNumber = Number(document.getElementById('firstNumber').value)
//     const secondNumber = Number(document.getElementById('secondNumber').value)



    
// })