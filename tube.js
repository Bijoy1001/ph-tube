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
    cardContainer.innerHTML = "";

    data.data.forEach((card)=>{
        console.log(card);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl mt-4">
        <figure><img class="h-48 max-h-full mt-2" src=${card.thumbnail}></figure>
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

const handleModeal= async (modalId) => {
    console.log(modalId);

   const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${modalId}`
   );
      const data = await response.json();
      console.log(data.data);
    const modalContainer = document.getElementById("modal-container");
            const div = document.createElement("div");
            div.innerHTML = `
            <button onclick=handleModeal('${category.category[0].message}') class="btn btn-secondary m-4">Blog</button>
            <dialog id="my_modal_1" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                  <form method="dialog">
                    <button class="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            
            `
        modalContainer.appendChild(div);

        const modal = document.getElementById(my_modal_1)

        modalContainer.showModal();
};

allCategory();
categoryData(1000);
