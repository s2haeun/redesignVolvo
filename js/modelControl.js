function getArrayModel(type,category,array){
    let result = "";
    array.map(function(car,index){
        if(car.category==category && car.type==type){
            result += `<li>
                <a href="#">
                <h4>${car.title}</h4>
                <p>${car.desc}</p>
                <img src="./img/model/${car.img[0]}" alt="c40">
                </a>
            </li>`
        }
    })
    return result
}