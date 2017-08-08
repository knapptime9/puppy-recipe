let formSubmit = event => {
  event.preventDefault();
  let data = {};
  document.getElementsByClassName('resultsContainer')[0];
  resultsContainer.textContent = JSON.stringify(data, null, " ");
  let form = document.getElementClassName("searchInput")[0];
  form.addEventListener("submit", formSubmit);
}
