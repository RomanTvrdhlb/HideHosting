import vars from "../_vars";
import { addCustomClass } from "../functions/customFunctions";

const { mainLinks, mainTable } = vars;


if(mainTable){
mainLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    addCustomClass(mainTable, 'active');
  })
})
}


