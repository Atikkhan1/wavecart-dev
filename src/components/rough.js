let CategoryObject = [
    {category:"cloths", subcategory:["tshirts","shirts"]},
    {category:"watch", subcategory:["menswatch","ladieswatch"]},
    {category:"electronic", subcategory:[]},
    {category:"toys", subcategory:[]},
  ]
let findCy = "watch";

function getIndex(FindC){
    let getSubindex ;
    for (let i = 0; i < CategoryObject.length; i++) {
        if (CategoryObject[i].category == FindC){
            getSubindex = i
        }
       
    }
    return getSubindex
}
console.log(getIndex(findCy))
