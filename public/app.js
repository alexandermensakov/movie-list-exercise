
async function sortByGenre() {

  const selectedGenre = document.querySelector("#genre").value
  const filteredMovies = movies.filter(movie => movie.genres.includes(selectedGenre))
  renderMovies(filteredMovies)
}
document.querySelector("#genre").addEventListener("change", sortByGenre)

async function renderMovies(movies) {
  const res = await fetch("/api/movies")
  const filteredMovies = await res.json()
  console.log(filteredMovies)
  document.querySelector("#movies").innerHTML = `
    <table>
    <tr>
      <th class="one">Title</th>
      <th class="two">Year</th>
      <th class="one">Age rating</th>
      <th class="two">Genre</th>
      <th class="one">Rating</th>
    </tr>
      ${filteredMovies.map(movie => `
     <tr>
      <td class="one">${movie.title}</td>
      <td class="two">${movie.releaseDate}</td>
      <td class="one">${movie.age}</td>
      <td class="two">${movie.genres}</td>
      <td class="one">${movie.rating * 10}</td>`).join("")}
     </tr>
    </table>
            `
} renderMovies()