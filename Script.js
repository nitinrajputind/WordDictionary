var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById("SearchBtn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inpWord").value;
//   console.log(inpWord);

//   console.log(`${url}${inpWord}`);

var len = 0;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for(let i = 0; i < data[0].phonetics.length; i++){
        len = i;
      }

      result.innerHTML = `
        <div class="word">
        <h3>${inpWord}</h3>
        <button><i class="fas fa-volume-high"></i></button> 
      </div>
      <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p> 
         <p>/${data[0].phonetics[len].text}/</p>
      </div>
      <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}.
      </p>
      <p class="word-example">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex debitis, maxime nihil earum voluptatibus consequatur fugiat voluptas in a eveniet quaerat ipsam dignissimos accusantium nisi nulla voluptates asperiores ab suscipit!
      </p>
      `;
    });
});
