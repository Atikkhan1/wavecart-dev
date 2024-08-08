function sortSame(obj){
    let res = []
    let ans = []
    for (let i = 0; i < obj.length; i++) {
        if (obj[i] == obj[i+1]){
            for (let j = 0; j < obj.length; j++) {
            res.push(obj[j])
        }
    }
    }

    return res
}


let obj = [{_id:"a"},{_id:"a"},{_id:"a"},{_id:"c"},{_id:"d"},{_id:"b"},{_id:"a"}]

console.log(sortSame(obj))
