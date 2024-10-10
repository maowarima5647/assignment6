
const loadpets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
        displaypets(data.pets);  
    })
    .catch((error) => console.log(error));
}

const loadDetails = async (videoId) =>{
console.log(videoId);
const uri =`https://openapi.programming-hero.com/api/peddy/pet/${videoId}`;
const res = await fetch(uri);
const data =await res.json();

 displaydetails(data.petData)
};




const displaydetails = (videos) => {
  console.log(videos);
  const detailscontainer = document.getElementById("modalcontent")
detailscontainer.innerHTML = `
<img src=${videos.image}  >

<p class='flex py-5'> <img class='w-5' src="https://img.icons8.com/?size=16&id=ZnVXW9UKCoBA&format=png" alt=""> Breed : ${videos.breed}  </p>
<p class='flex'><img class='w-5' src="https://img.icons8.com/?size=48&id=2azHwQoaHAyg&format=png" alt=""> Birth : ${videos.date_of_birth}  </p>
<p class='flex' ><img class='w-5'  src="https://img.icons8.com/?size=24&id=Es8k4i3GFhT6&format=png" alt="">  Gender : ${videos.gender} </p>
<p class='flex' ><img class='w-5'src="https://img.icons8.com/?size=24&id=85782&format=png" alt="">  $Price : ${videos.price} </p>
   

  <div class="divider"></div>

</p>
${videos.pet_details}
</p>
`
  document.getElementById('showmodeldata').click();
}
//adopt button------------
const loadAdopt = async (adopt) =>{
  //console.log(adopt);
  const uri =`https://openapi.programming-hero.com/api/peddy/pet/${adopt}`;
  const res = await fetch(uri);
  const data =await res.json();
  
   displaydetails(data.adpted)
  };

const displayAdopt = (adpted) => {
  console.log(adpted);
const adoptdetails = document.getElementById('adoptcontent');
document.getElementById("showadoptmodal").click();
}

//dispalypet-------------

const displaypets = (pets) => {
    const petcontainer = document.getElementById("cardContainer")
    petcontainer.innerHTML = "";


if (pets.length == 0){
  petcontainer.classList.remove("grid");
  petcontainer.innerHTML =
  `
  <div class='min-h-[300px] flex flex-col justify-center items-center'> 
  <img class ='items-center flex' src ='https://img.icons8.com/?size=80&id=1rigVifJNfvE&format=png' />
<h2 class = 'text-center text-2xl font-bold '>  No Information Available</h2>
  </div>
  `;
  return;

}
else{
  petcontainer.classList.add("grid");
}



    pets.forEach((pet) => {
       // console.log(pet);
        const card =document.createElement("div");
        card.classList ='card bg-base-100'
        card.innerHTML = `
       
  <figure class='h-[200px]'>
    <img
      src=${pet.image}
      class ='h-full w-full object-cover'
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${pet.pet_name}
     
    </h2>

    
<p class='flex'> <img class='w-5' src="https://img.icons8.com/?size=16&id=ZnVXW9UKCoBA&format=png" alt=""> Breed : ${pet.breed}  </p>
<p class='flex'><img class='w-5' src="https://img.icons8.com/?size=48&id=2azHwQoaHAyg&format=png" alt=""> Birth : ${pet.date_of_birth}  </p>
<p class='flex' ><img class='w-5'  src="https://img.icons8.com/?size=24&id=Es8k4i3GFhT6&format=png" alt="">  Gender : ${pet.gender} </p>
<p class='flex' ><img class='w-5'src="https://img.icons8.com/?size=24&id=85782&format=png" alt="">  $Price : ${pet.price} </p>
   <div class="divider"></div>



    <div class="flex justify-between">
   
  <button  class="btn btn-outline btn-success -my-3"><img class='w-5'src= "https://img.icons8.com/?size=48&id=U6uSXVbuA1xU&format=png" alt=""></button>
    <button onclick='loadAdopt(${pet.petData})' class="btn btn-outline btn-success -my-3">Adopt</button>
    <button onclick ='loadDetails(${pet.petId})' class="btn btn-outline btn-success -my-3">Details</button>
    </div>
  </div>

        `
        petcontainer.append(card)

    });
}


loadpets();

//catagoris............

const loadcategorybutton = (name) => {
//alert(id)
fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
 .then((res) => res.json())
 .then((data) => {
  displaypets(data.data);  
 })
 .catch((error) => console.log(error));



}




const loadcatagoris = () =>{
 fetch("https://openapi.programming-hero.com/api/peddy/categories")
 .then((res) => res.json())
 .then((data) => {
  displaycategoress(data.categories);  
 })
 .catch((error) => console.log(error));



};
const displaycategoress = (categories) =>{

  /* if (categories.length == 0){
    petcontainer.innerHTML = "no content here";
    return;
  
  };*/

categories.forEach((item) =>{
const catagorycontainer = document.getElementById("catagoris");

//crate abuuton
const buttoncontainer = document.createElement('div');
buttoncontainer.innerHTML = `
<button onclick ="loadcategorybutton('${item.category}')" class='btn'>
<img class='w-7' src=${item.category_icon} alt="">
${item.category}</button>
    
`
//add button

catagorycontainer.append(buttoncontainer);


});


};

loadcatagoris();











 


 






