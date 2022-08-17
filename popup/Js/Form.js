var a_m_1=document.getElementById("add-more-1");
var a_m_2=document.getElementById("add-more-2");
var a_m_3=document.getElementById("add-more-3");
var a_l_1=document.getElementById("add-less-1");
var a_l_2=document.getElementById("add-less-2");
var a_l_3=document.getElementById("add-less-3");


//Add More

a_m_1.addEventListener("click",()=>{
    var r_1=document.getElementById("r-1").value;
    var p_1=document.getElementById("p-1").value;
    var r_2=document.querySelector(".r-2");
    var p_2=document.querySelector(".p-2");
    var options=document.querySelectorAll(".options");
    if(r_1=="" || p_1=="")
    {
        a_m_1.style.color="red";
    }
    else
    {
        a_m_1.style.display="none";
        a_m_2.style.display="block";
        p_2.style.display="block";
        r_2.style.display="block";
        a_l_1.style.display="block";
        options.forEach((option)=>{
            if(option.value == p_1)
                option.setAttribute("hidden",null);
        });
        

    }
    
});
a_m_2.addEventListener("click",()=>{
    var r_2=document.getElementById("r-2").value;
    var p_2=document.getElementById("p-2").value;
    var r_3=document.querySelector(".r-3");
    var p_3=document.querySelector(".p-3");
    var options=document.querySelectorAll(".options");
    if(r_2=="" || p_2=="")
    {
        a_m_2.style.color="red";
    }
    else
    {
        a_m_2.style.display="none";
        a_l_1.style.display="none";
        a_m_3.style.display="block";
        a_l_2.style.display="block";
        p_3.style.display="block";
        r_3.style.display="block";
        options.forEach((option)=>{
            if(option.value == p_2)
                option.setAttribute("hidden",null);
        });
        

    }
    
});
a_m_3.addEventListener("click",()=>{
    var r_3=document.getElementById("r-3").value;
    var p_3=document.getElementById("p-3").value;
    var r_4=document.querySelector(".r-4");
    var p_4=document.querySelector(".p-4");
    var options=document.querySelectorAll(".options");
    if(r_3=="" || p_3=="")
    {
        a_m_2.style.color="red";
    }
    else
    {
        a_m_3.style.display="none";
        a_l_2.style.display="none";
        a_l_3.style.display="block";
        p_4.style.display="block";
        r_4.style.display="block";
        options.forEach((option)=>{
            if(option.value == p_3)
                option.setAttribute("hidden",null);
        });
        

    }
    
});



// Add less

a_l_1.addEventListener("click",()=>{
    var r_2=document.querySelector(".r-2");
    var p_2=document.querySelector(".p-2");
    var p_1_value=document.getElementById("p-1").value;
    var options=document.querySelectorAll(".options");
        
        a_m_2.style.display="none";
        a_l_1.style.display="none";
        a_m_1.style.display="block";
        document.getElementById("p-2").value="";
        document.getElementById("r-2").value=document.getElementById("r-2").defaultValue;
        p_2.style.display="none";
        r_2.style.display="none";
        options.forEach((option)=>{
            if(option.value == p_1_value)
                option.removeAttribute("hidden");
        });
        

    
    
});

a_l_2.addEventListener("click",()=>{
    var r_3=document.querySelector(".r-3");
    var p_3=document.querySelector(".p-3");
    var p_2_value=document.getElementById("p-2").value;
    
    var options=document.querySelectorAll(".options");
        
        a_m_3.style.display="none";
        a_l_2.style.display="none";
        document.getElementById("p-3").value="";
        document.getElementById("r-3").value=document.getElementById("r-3").defaultValue;
        a_l_1.style.display="block";
        a_m_2.style.display="block";
        p_3.style.display="none";
        r_3.style.display="none";
        options.forEach((option)=>{
            if(option.value == p_2_value)
                option.removeAttribute("hidden");
        });
        

    
    
});
a_l_3.addEventListener("click",()=>{
    var r_4=document.querySelector(".r-4");
    var p_4=document.querySelector(".p-4");
    var p_3_value=document.getElementById("p-3").value;
    var p_4_value=document.getElementById("p-4").value;
    var r_4_value=document.getElementById("r-4").value;
    var options=document.querySelectorAll(".options");
        a_l_3.style.display="none";
        document.getElementById("p-4").value="";
        document.getElementById("r-4").value=document.getElementById("r-4").defaultValue;
        a_l_2.style.display="block";
        a_m_3.style.display="block";
        p_4_value = "";
        r_4_value="";
        p_4.style.display="none";
        r_4.style.display="none";
        options.forEach((option)=>{
            if(option.value == p_3_value)
                option.removeAttribute("hidden");
        });
        

    
    
});

//donot refresh
$(document).ready(function () {
    // Listen to submit event on the <form> itself!
    $('.form').submit(function (e) {
  
      // Prevent form submission which refreshes page
      e.preventDefault();
    });
  });


//focused
$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});