const allCategory = async () =>{
    const response = await fetch (
        "https://openapi.programming-hero.com/api/videos/categories"
        );

    const data = await response.json();

   const button = document.getElementById("button");

    data.data.forEach((category) => {
       const div = document.createElement("div");
       div.innerHTML = `
       <button onclick = "categoryData('${category.category_id}')" class="btn btn-outline btn-info">${category.category}</button>
       `;
      
      button.appendChild(div);
  });
 
};

const categoryData = async (categoryId) => {
    const response = await fetch (
        ` https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
   

    const cardContainer = document.getElementById("card-container");

    data.data.forEach((card)=>{
        console.log(card);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl mt-4">
        <figure><img class="h-48 max-h-full" src=${card.thumbnail}></figure>
        <div class="card-body">
        <div class = "card-footer flex justify-between mt-8">
        <div class = "flex">
        <div>
        <div class ="avatar">
        <div class ="w-14 rounded-full">
        <img src= ${card.authors[0].profile_picture}/>
        </div>
        </div>
        </div>
          <h2 class="card-title pl-4">${card.title}</h2>
          </div>
          </div>
          <div class = "flex">
          <p> ${card.authors[0].profile_name}</p>
          <div class="badge badge-secondary">${card.authors[0]?.verified}</div>
          </div>
          <h1>${card.others.views}</h1>
      
     </div>

        `;

    cardContainer.appendChild(div);
    });
};


allCategory();
