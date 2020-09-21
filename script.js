let main =document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=2')
.then(Response=>Response.json())
.then(data=>{
  
    data.results.map((i,j)=>{


        if(j >18)
            return;
        if(j == 0){
            main.innerHTML+=`

            <div class="bannerP" style="background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

           `;

            
        }else{
            if(j == 1){
                main.innerHTML+=` 
                <h2>Assita o melhor</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
                
                ;`

            }else{
               main.innerHTML+=`
               <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
               ;`
            }
        }

    })

    
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=4')
.then(Response=>Response.json())
.then(data=>{
  
    data.results.map((i,j)=>{


        if(j >18)
            return;
        if(j == 0){
            main.innerHTML+=`

            <div class="bannerP" style="background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

           `;

            
        }else{
            if(j == 1){
                main.innerHTML+=` 
                <h2>Assita o melhor</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
                
                ;`

            }else{
               main.innerHTML+=`
               <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
               ;`
            }
        }

    })

    
})