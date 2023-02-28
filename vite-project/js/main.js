import "../styles/style.css";
import { DOMselectors } from "./DOM";
import {colleges} from "./colleges";
import{usedColleges} from "./colleges";


DOMselectors.box.innerHTML = "";

function getData() {
    
        let college = DOMselectors.college.value
        colleges.filter( (el) => el.name == `${college}`)
        .forEach(el => { 
            console.log(el.name);
            DOMselectors.box.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <div class=collegeName">${el.name}</div>
                <div class=collegeName">${el.AcceptanceRate}</div>
                <div class=collegeName">${el.GPA}</div>
                <div class=collegeName">${el.SATmath}</div>
                <div class=collegeName">${el.SATenglish}</div>
                <div class=collegeName">${el.ACTcomposite}</div>
                <img class="images" src="${el.img}"/>
               
                </div>`
            );
            usedColleges.push(`${el.name}`)
            if (usedColleges.includes(`${el.name}`)) {
                DOMselectors.history.insertAdjacentHTML(
                    "beforeend",
                    `<div class="card">
                    <div class=collegeName">${el.name}</div>
                    <img class="images" src="${el.img}"/>
                    </div>` )
                
            } else {
                console.log(el.name)
            }
        }); 
        
      
    
    }
       
        
   

DOMselectors.btn.addEventListener("click", getData);



