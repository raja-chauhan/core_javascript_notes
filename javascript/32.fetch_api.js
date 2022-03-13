// fetch api in js
fetch(url).then((response)=>{
    return response.text;
}).then((data)=>{
    console.log(data)
})