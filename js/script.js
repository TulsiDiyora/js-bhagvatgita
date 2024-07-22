let chap = document.getElementById("chap");
let sloka = document.getElementById("sloka");
let gitaa= document.getElementById("gitaa");
let slokka = document.getElementById("slokka");
let schap = document.getElementById("schap");
let tran = document.getElementById("tran");
let rams = document.getElementById("rams");
let ht = document.getElementById("ht");
let hc = document.getElementById("hc");
let gitaimg = document.getElementById("gitaimg");
let verse = document.getElementById("verse");
const display = () =>{

    fetch('https://vedicscriptures.github.io/chapters').then((res) =>{

        // console.log("slok-chapter",res);

        return res.json();

    }).then((list) => {

        // console.log("list",list);
        
        // let getlist = list

       let chatper = 0;
        for(const gita of list){
            
            chatper++;
            console.log("gita",gita);
        
            const unik = `${chatper}`;

            chatper++;

            console.log("chatper",chatper);
            
            gitaa = "";
            for(let i=1; i<= gita.verses_count; i++){
                gitaa +=`<li style="list-style-type: none; " onclick="return slok(${gita.chapter_number},${i})">slok -  ${i} <hr/></li>`
                
            }
            // let gitaid = `${chatper}`

            chap.innerHTML += `<div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed p-3 mt-3" style="font-size: 18px; font-weight: 600;   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);" type="button" data-bs-toggle="collapse" data-bs-target="#${unik}" aria-expanded="false" aria-controls="${unik}" style="cursor: pointer; background-color: #f5f5f5; box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" onclick="return getdata()">
                        ${gita.name}
                        </button>
                      </h2>
                      <div id="${unik}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                          <ul class="list-group list-group-flush" style="cursor: pointer; font-size: 16px; font-weight: 500">
                             ${gitaa} 
                          </ul> 
                        </div>
                      </div>
            </div> `

        }
  

    }).catch((err) => {

        console.log("error",err);

    })
    
}

display()

const slok = (ch , slokk) =>{

    fetch(`https://vedicscriptures.github.io/slok/${ch}/${slokk}`).then((res) => {
        return res.json()
    }).then((slokdata) => {
        console.log(slokdata);
        slokka.innerHTML = "";



        gitaimg.innerHTML = `<img src="./img/gita2.webp" class="py-2 ">`

        schap.innerHTML = `<p class="text-center " style="font-size: 30px; font-weight: 700" >Chapter - ${slokdata.chapter}  , Slok : ${slokdata.verse} </p>`

      
        slokka.innerHTML += `<p class="text-center " style="font-size: 18px; font-weight: 500" >Slok : ${slokdata.slok} </p>`

        tran.innerHTML = `<p class="text-center " style="font-size: 18px; font-weight: 500" >Transliteration : ${slokdata.transliteration} </p>`

        rams.innerHTML = `<p class="text-center " style="font-size: 18px; font-weight: 500" >Author :  ${slokdata.rams.author}  </p>`

        ht.innerHTML = `<p class="text-center " style="font-size: 18px; font-weight: 500" >Ht :  ${slokdata.rams.ht}  </p>`

        hc.innerHTML = `<p class="text-center " style="font-size: 18px; font-weight: 600" >व्याख्या : &nbsp;${slokdata.rams.hc}  </p>`



        
    }).catch((err)=>{
        console.log(err);
    })
}
