let formSubmit = event => {
  event.preventDefault();
  let data = {};
  document.getElementsByClassName('resultsContainer')[0];
  resultsContainer.textContent = JSON.stringify(data, null, " ");
  let form = document.getElementClassName("searchInput")[0];
  form.addEventListener("submit", formSubmit);
}

fetch("https://crossorigin.me/http://www.recipepuppy.com/api/")
  .then(
    function(searchBox) {
      searchBox.json().then(function(data) {
        console.log(data.results)
        for (let i = 0; i < data.results.length; i++) {
          console.log(data.results[i])
          let resultsContainer = document.createElement("resultsContainer");
          document.body.appendChild(resultsContainer);
          resultsContainer.innerHTML = `<h2>${data.results[i].title}</h2>
              <li><img id="image" src=${data.results[i].thumbnail}></li>
              <li><a>${data.results[i].href}</a>`
        }
      })
    })
