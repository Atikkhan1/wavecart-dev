


function searchAndFind(Object, toFind){
    let res = []
    for (let i = 0; i < Object.length; i++) {
        const element = Object[i].name.match(/\b\w+\b/g);
        for (let j = 0; j < element.length; j++) {
            if (toFind.toLowerCase()== element[j].toLowerCase()) {
                res.push(Object[i])
            }
        }

    }
    return res
}


