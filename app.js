const getDadJoke = async ()=>{
    try {
        let config = {headers:{Accept:"application/json"}}//ini an pag add header sa axios
        let req = await axios.get("https://icanhazdadjoke.com/",config)
        return req.data.joke
    } catch (error) {
        console.log("adi man an error",error)
    }
}
let btn = document.querySelector("button")

btn.addEventListener("click",async()=>{
    let ul =await document.querySelector("ul");
    let li = await document.createElement("li")
    await console.log(ul)
    let joke = await getDadJoke();
    await console.log(joke);
    li.innerText= await joke
    await console.log(li)


    ul.append(li)

})