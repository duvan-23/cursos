// let comics = document.getElementById('comics');

// fetch("http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=14f3749325a2fa38c9a5c8a9cade3e26&hash=d3c02d626f565d285a7726d2aca1c0e2")
// .then(response=>response.json())
// .then(json=>{
//     console.log(json);
// })



// const marvel ={
//     render:()=>{
//         const urlAPI = 'http://gateway.marvel.com/v1/public/events?ts=1000&apikey=14f3749325a2fa38c9a5c8a9cade3e26&hash=d3c02d626f565d285a7726d2aca1c0e2';
//         const container = document.querySelector('#marvel-row');
//         let contentHTML = '';

//         fetch(urlAPI)
//         .then(res=> res.json())
//         .then((json)=>{
//             for (const hero of json.data.results){
//                 let urlHero = hero.urls[0].url;
//                 contentHTML += `
//                 <div class="col-md-4">
//                     <a href="${urlHero}" target="_blank">
//                         <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
//                     </a>
//                     <h3 class="title">${hero.title}</h3>
//                     <p>${hero.description}</p>
//                 </div>
//                 `
//             }
//             container.innerHTML = contentHTML;
//         })
//     }
// }

// marvel.render();

const url =  'http://gateway.marvel.com/v1/public/events?ts=1000&apikey=14f3749325a2fa38c9a5c8a9cade3e26&hash=d3c02d626f565d285a7726d2aca1c0e2';


const marvel ={
    render:()=>{
        const urlAPI = url;
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        let idPelicula=0;
        fetch(urlAPI)
        .then(res=> res.json())
        .then((json)=>{
            console.log(json.data.results);
            const cantidad= json.data.results.length;
            for (const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML += `
                <input type="hidden" id="cantidad" value="${cantidad}">
                <div class="col-md-4">
                    <label>
                        <input type="radio" name="nature" value="nature1" checked id="pelicula${idPelicula}">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        <h3 class="title">${hero.title}</h3>
                        <p>${hero.description}</p>
                    </label>
                </div>
                `
                idPelicula ++;
            }
            container.innerHTML = contentHTML;
        })
    }
}

async function obtenerId(){
    const response = await fetch(url)
    return await response.json();
}

marvel.render();


function validarPelicula(){
    let cantidad = document.getElementById("cantidad").value;
    for(let i =0; i<cantidad; i++){
        pelicula=document.getElementById(`pelicula${i}`);
        if(pelicula.checked){
            return i;
        }
    }
}
let oprimir = document.getElementById("oprimir");

oprimir.addEventListener('click',()=>{
    console.log(validarPelicula());
    obtenerId().then((json)=>{
        console.log(json.data.results[validarPelicula()].id)
    })
})