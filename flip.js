
let calcy = () =>{
    let web = document.querySelector("#webs").value;
    let maths = document.querySelector("#maths").value;
    let comp = document.querySelector("#comp").value;
    let phy = document.querySelector("#phy").value;
    let total;
    let percent;
    let grade = " ";
      

    total = parseInt(web) + parseInt (maths) + parseInt(comp) + parseInt(phy);
     
     let x;
     x = total;
     
        if( (isNaN(x)) == true){
        alert("wrong");
        return;
     }
     

    percent = (total/400) * 100;
    
    if(percent <= 100 && percent >= 80)
    {
        grade ="A";  
    }
    else if(percent <= 79 && percent >= 60)
    {
        grade ="B";  
    }
    else if(percent <= 59 && percent >= 40)
    {
        grade ="c";  
    }
    else
    {
        grade ="f";
    }
    
    document.getElementById("notes").innerHTML = ` <h1> out of 400 your total MARKS :- ${total} <br> and your PERCENT :- is ${percent} <br> your GRADES :- ${grade} </h1>`;
    
    
    let card = document.querySelector(".show");
    let ptag = document.querySelector("#ptag");     
    let cardtwo = document.querySelector(" .flip-card-inner "); 
    card.addEventListener("click", () => {
    cardtwo.style.transform = "translateX(-100%) rotateY(-180deg)";
   });
   
  let cardthree = document.querySelector(".flip-card-back");
     cardthree.addEventListener("click", () => {
        cardtwo.style.transform = "translateX(0) rotateY(0deg)";   
  });



}
       
 