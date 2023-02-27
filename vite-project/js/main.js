import "../styles/style.css";
import { DOMselectors } from "./DOM";
import {colleges} from "./colleges";



DOMselectors.box.innerHTML = "";

function getData() {


        
        let college = DOMselectors.college.value
        colleges.filter( (el) => el.name == `${college}`)
        .forEach(el => { 
            console.log(el.);
            DOMselectors.box.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <div class=collegeName">${el.name}</div>
                <img class="images" src="${el.img}"/>
               
                </div>`
            );
            
        }); }
       
        
   

DOMselectors.btn.addEventListener("click", getData);
