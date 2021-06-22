function valid()
{
	var phone= document.forms[0]["mobile"];
	var pass= document.forms[0]["pass"];
	var cpass= document.forms[0]["cpass"];
	
	if (pass.value == "")                                  
    { 
        window.alert("Please enter your password."); 
        pass.focus(); 
        return false; 
    } 
	if (cpass.value == "")                                  
    { 
        window.alert("Please confirm your password."); 
        cpass.focus(); 
        return false; 
    } 
	
	var len = phone.value.length;
	if(len!=10)
	{
		alert("please enter valid mobile number");
		return false;
	}
	if(pass.value!=cpass.value)
	{
		alert("enter password correctly");
		return false;
		
	}
return true;		

}
