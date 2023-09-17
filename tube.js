const allCategory = async () =>{
    const response = await fetch (
        "https://openapi.programming-hero.com/api/videos/categories"
        );

    const data = await response.json();

   const button = document.getElementById("button");

    data.data.forEach((category) => {
       const div = document.createElement("div");
       div.innerHTML = `
       <button class="btn btn-outline btn-info">${category.category}</button>
       `;
      
      button.appendChild(div);
  });

    console.log(data.data);
};

allCategory();