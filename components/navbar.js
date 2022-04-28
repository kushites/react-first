let navbar =()=>{
 return   `    <h3><a href="index.html">Home</a></h3>
    <div id="option">
        <h3>
            <a href="product.html">Product</a>
        </h3>
        <h3>
            <a href="electronics.html">Electronics</a>
        </h3>
        <h3>
            <a href="product.html">Login</a>
        </h3>
        <h3>
            <a href="product.html">Signup</a>
        </h3>
    </div>`
}


let appendfood=(data)=>{
data.map((el)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    let h3=document.createElement("h3")
    h3.innerText=el.strCategory
    img.src=el.strCategoryThumb
    div.append(img,h3)
    document.getElementById(`food`).append(div)
})
}

export {navbar,appendfood}