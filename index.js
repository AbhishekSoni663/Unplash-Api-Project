let input = document.querySelector("#searchimg"); // Correct selector, assuming ID
let form = document.querySelector("form");
let apiKey = "PA1pu-t5uPm0yibbZu7pz_Tfmz514vJxZ0gLM-0LF90";
let container = document.getElementById('newCont')
let boxCard = document.getElementById('box1')
form.addEventListener("submit", runEvent);

async function runEvent(e) {
  e.preventDefault();
container.innerHTML = ""
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${apiKey}`
    );
    const data = await response.json();
    console.log(data);

    if(data.results.length !== 0){
        data.results.map(item =>{
          let card = document.createElement('div')
         
          card.classList.add ("card");

          let img = document.createElement('img');
          img.src = item.urls.full;
          img.alt = item.alt_description;
          let imgLink = document.createElement('a');
          imgLink.href = item.links.html;
          imgLink.target = '_blank';
          imgLink.appendChild(img)
          card.appendChild(imgLink)
          boxCard.appendChild(card)
          container.appendChild(boxCard)
        })
    }

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

  } catch (error) {
    console.error("Data not found:", error.message); // Log the actual error message
  }
}
