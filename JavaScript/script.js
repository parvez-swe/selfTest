

function promptMe(){

                  let namee = prompt("What is your name?").toUpperCase();
                  // let question = prompt("Do want to know who is gonna wife of Md Parvez Mushara? Yes or No").toUpperCase();

                  if(namee === "FARJANA" || namee === "YEASMIN"|| namee === "ALE" || namee==="FARJAN YEASMIN ALE"){
                        
                        document.write("Hi dear Farjana Yeasmin Ale! Many many congratulations to you. You are gonna be the wife of Mohammad Parvez Musharaf. You are so good we know .Musharaf gonna marry you❤️");
                  }
                  else if( namee ==="ANJUMAN" || namee ==="ANJUMAN ARA" || namee === "ANJUMAN ARA BEGUM"){
                        document.write("আসসালামুয়ালাইকুম আম্মু! মোশারফ ও এলি আপনাকে খুব ভালোবাসেন, তারা আপনার শন্তান হতে পেরে গর্ভিত");
                  }    
                  else if(namee === "MAKBUL" || namee ==="MAKBUL HOSSAIN" || namee ==="MAKBUL HOSSAIN SARKER"){
                        document.write("আসসালামুয়ালাইকুম আব্বু! মোশারফ ও এলি আপনাকে খুব ভালোবাসেন, এক জন শিক্ষক কে বাবা হিসেবে পেয়ে তারা গর্ভিত");
                  }
                  else if(namee === "TAWHID" || namee === "TAWHIDUL ISLAM" || namee ==="TAWHIDUL ISLAM TAWHID" || namee ==="NANNU"|| namee==="TAWHIDUL ISLAM NANNU") {
                        document.write("Founder ans CEO of Tawhid Solution Academy.Father of Tawfiq and  Elder brother of Farjana Yeasmin Ale.")
                  }
                  else if(namee === "KHATIJA BEGUM" || namee ==="KHATIJA"){
                        document.write("Mohther of Mohammad Parvez Musharaf. Your love and prayer makes musharaf's life beautifull")
                  }
                  else if(namee === "RASHIDUL ALAM" || namee === "RASHID"){
                        document.write("We know that you are the father of Mohammad Parvez Musharaf. Your Hardwork and prayer make musharaf's life easy")
                  }
                  else if( namee === "RISHAT" || namee === "RISHAT ASHRAF"|| namee === "ASHRAF"){
                        document.write("You are brother Musharaf")
                  }
                  else if (namee === "SABRIN" || namee === "SADIKA AFRIN" || namee === "SADIKA" || namee === "AFRIN"){
                        document.write("Dear Sadika Afrin! We know about you. you are the sister of Mohammad Parvez Musharaf")
                   }
                  else{
                        document.write("Sorry I dont know...😬")
                  }
}

//color generator code are below:
const h3 = document.querySelector('#colorGeneratorh');
const buttons = document.querySelector('#colorGenerator');

const randomColor = () =>{
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgb(${r}, ${g}, ${b})`; 
}



buttons.addEventListener('click',function (){
      const newColor = randomColor();
      document.body.style.backgroundColor = newColor;
      h3.innerHTML=`HI I'm ${newColor}`;
})