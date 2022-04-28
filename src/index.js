import { navbar,appendfood } from "../components/navbar";
import '../styles/navbar.css'
 let nav=document.querySelector("#navbar")
 nav.innerHTML=navbar()
 let foodappend=async()=>{
    let food= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await food.json()
    console.log(data)
    appendfood(data.categories)

}
foodappend()
