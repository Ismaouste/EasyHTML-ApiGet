function fetchData() {
    fetch("http://91.121.88.38:3000/api/people")
        .then(response => {
            return response.json();
        })
        .then(foo => {
            const html = foo.map(data => {

                for (const fooKey in foo) {
                    return `<div class="col s12 m6"><div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                <span class="card-title">                                 
                                <h2>${data.name}</h2></span>
                                <p class="flow-text"> Age : ${data.age} ans</p>
                                <p class="flow-text">Marques favorites : ${data.cars}</p> 
                             </div>
                        </div>
                    </div>`;
                }
            })
            document.querySelector("#apiData").insertAdjacentHTML("afterbegin", html);
        })
}

fetchData();
