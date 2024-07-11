let score= document.getElementById("score")
let resultat=document.getElementById("result")
let reponses=document.getElementsByClassName("answer")


for (let i=0; i<reponses.length;i++){
    console.log(reponses[i].value)
  reponses[i].addEventListener("click",test)  
}
let reponse_juste=10000;
let pts=0;
function test(event){

    
    
    const id = event.target.getAttribute("id")
    console.log(id)


    const tab = id.split("p")[1].split("_")

    const q = questions[tab[0]]


    const ans = document.getElementsByClassName(`ans${tab[0]}`)
    if(q.reponses[tab[1]] === q.juste ){
        pts++
        score.innerHTML=`${pts} points / ${questions.length}`
        ans[0].parentNode.innerHTML = "<section class='goodAns'>Reponse Correcte</section>"
    }
    else{
        ans[0].parentNode.innerHTML = "<section class='wrongAns'>Mauvaise Reponse</section>"
    }

    
    // for (let i = 0; i < ans.length; i++) {
    //     const element = ans[i];
    //     // element.classList.add("hide")
    //     // element.perentNode.classList.add("moi")
    //     console.log(element.parentNode.getAttribute("class"))
    //     element.parentNode.innerHTML = "Correct"
    // }
    // // ans[0].parentNode.innerHTML = "Correct"
    // // console.log(ans)
   
}


let questions=[
    {
         question:"le pere d'une famille de trois enfants souhaiterait partager equitable 30000F CFA entre ses enfants <br> combien aura chaque enfant? ",
         reponses:[10000,15000,20000],
         juste:10000,
    },


    {
        question:"combien vaut 10% de 10000",
        reponses:[1500,1000,2000],
        juste:1000,
   },


   {
        question:" 1+1 ",
        reponses:[3,4,2],
        juste:2,
    }

];
// let quiz=document.getElementById("ctn")
// let questionDiv=document.createElement("div")
// let questionText=document.createTextNode("le pere d'une famille de trois enfants souhaiterait partager equitable 30000F CFA entre ses enfants combien aura chaque enfant? ")
// quiz.appendChild(questionText)

const ctn = document.getElementById("ctn")

// questions.forEach(item => {
    
// });

for (let i = 0; i < questions.length; i++) {
    const item = questions[i];
    let q =`
    <div class="question">
                <div class="elt1"> 1) ${item.question} </div>
                <div class="quiz" id="ctn"></div>

                    <div class="reponse">`





        for (let j = 0; j < item.reponses.length; j++) {
            const element = item.reponses[j];
            q+=` <input class="answer ans${i}" type="button" value="${element}" id="rep${i}_${j}" >`
            
        }
                    
                    
                    q+=`
                    </div>
                
            </div>
    `
    ctn.innerHTML += q
    let a ="je"
    a+=" suis"
}

let mesReponses = document.getElementsByClassName('answer')
// console.log(mesReponses[2])
for (let i = 0; i < mesReponses.length; i++) {
    const btn = mesReponses[i];
    btn.addEventListener("click",(e)=>{test(e)})
}

