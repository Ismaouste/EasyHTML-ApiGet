function fetchData() {
    fetch("http://91.121.88.38:3000/api/people")
        .then(response => {
            if (!response.ok) {
                throw Error("No answer from API");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(user => {

                for (const dataKey in data) {
                    return `
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
                            <div class="user">
                                 <div class="card-content white-text">
                                <span class="card-title">                                 
                                    <h2>${user.name}</h2></span>
                                <p class="flow-text"> Age : ${user.age} ans</p>
                                    <ul> <p class="flow-text">Marques favorites :</p>
                                        <li class="flow-text">${user.cars}</li>
                                    </ul>
                             </div>
                        </div>
                    </div>
                 </div>
                    `;
                }
            })
                .join("");
            console.log(html);
            document.querySelector("#apiData").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
}
fetchData();
