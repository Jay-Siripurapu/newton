function validate(){
  var formvalues = document.forms["sign-up"]
  var username = formvalues["username"].value
  var pass = formvalues["pass"].value
  var repass = formvalues["repass"].value
  var phn = formvalues["phn"].value
  var Add = formvalues["Add"].value
  console.log("username",username)
  console.log("password",pass)
  console.log("repassword",repass)
  console.log("Phone",phn)
  console.log("Adress",Add)
  if(pass=="" || repass=="")
  {
    showerror("passwords cant be empty")
    return false

  }
  if(pass!=repass)
  {
    showerror("both passwords should match")
    return false
  }
  if(username.includes(' '))
  {
    showerror("first name can't contain spaces")
    return false;
  }
  if(Number(phn)==NaN){
    showerror("number cant be other than phone")
    return false;
  }

  return true;
}
function showerror(err){
  var errdiv = document.getElementById("error-area")
  errdiv.innerText = err
  errdiv.style.display = "block"
}
