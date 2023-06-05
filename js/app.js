function validateForm() {  

  var pw1 = document.getElementById("pswd1").value;  
  var pw2 = document.getElementById("pswd2").value;  
  var name1 = document.getElementById("fname").value;  
  var name2 = document.getElementById("lname").value;  
    
   
  if(name1 == "") {  
    document.getElementById("blankMsg").innerHTML = "**Điền tên trước";  
    return false;  
  }  
    
   
  if(!isNaN(name1)){  
    document.getElementById("blankMsg").innerHTML = "**Chỉ nhập ký tự cho phép";  
    return false;  
  }  

  
  if(!isNaN(name2)){  
    document.getElementById("charMsg").innerHTML = "**Chỉ nhập ký tự cho phép";  
    return false;  
  }   
  
  
  if(pw1 == "") {  
    document.getElementById("message1").innerHTML = "**Vui lòng điền mật khẩu!";  
    return false;  
  }  
  

  if(pw2 == "") {  
    document.getElementById("message2").innerHTML = "**Nhập mật khẩu!";  
    return false;  
  }   
   
 
  if(pw1.length < 8) {  
    document.getElementById("message1").innerHTML = "**Mật khẩu phải dài ít nhất 8 ký tự";  
    return false;  
  }  

 
  if(pw1.length > 15) {  
    document.getElementById("message1").innerHTML = "**Mật khẩu không được quá 15 ký tự";  
    return false;  
  }  
  
  if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Mật khẩu không giống";  
    return false;  
  } else {  
    alert ("Mật khẩu của bạn đã tạo thành công");  
    document.write("JavaScript form đã tạo thành công");  
  }  
}  
function validateForm() {  

  var pw1 = document.getElementById("pswd1").value;  
  var pw2 = document.getElementById("pswd2").value;  
  var name1 = document.getElementById("fname").value;  
  var name2 = document.getElementById("lname").value;  
    
   
  if(name1 == "") {  
    document.getElementById("blankMsg").innerHTML = "**Điền tên trước";  
    return false;  
  }  
    
   
  if(!isNaN(name1)){  
    document.getElementById("blankMsg").innerHTML = "**Chỉ nhập ký tự cho phép";  
    return false;  
  }  

  
  if(!isNaN(name2)){  
    document.getElementById("charMsg").innerHTML = "**Chỉ nhập ký tự cho phép";  
    return false;  
  }   
  
  
  if(pw1 == "") {  
    document.getElementById("message1").innerHTML = "**Vui lòng điền mật khẩu!";  
    return false;  
  }  
  

  if(pw2 == "") {  
    document.getElementById("message2").innerHTML = "**Nhập mật khẩu!";  
    return false;  
  }   
   
 
  if(pw1.length < 8) {  
    document.getElementById("message1").innerHTML = "**Mật khẩu phải dài ít nhất 8 ký tự";  
    return false;  
  }  

 
  if(pw1.length > 15) {  
    document.getElementById("message1").innerHTML = "**Mật khẩu không được quá 15 ký tự";  
    return false;  
  }  
  
  if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Mật khẩu không giống";  
    return false;  
  } else {  
    alert ("Mật khẩu của bạn đã tạo thành công");  
    document.write("JavaScript form đã tạo thành công");  
  }  
}  