const imagesDB = [
  {
    id: 1,
    name: "Lamburgani",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, iusto provident? Facilis doloremque libero asperiores rerum. Expedita minima beatae, magni voluptate nihil quod, dolorum ad neque libero ab dignissimos obcaecati!",
    src: "../Assets/Images/Lamburgini.jpg",
  },
  {
    id: 2,
    name: "BMW",
    describtion:
      "BMW ipsum dolor, sit amet consectetur adipisicing elit. Ea, iusto provident? Facilis doloremque libero asperiores rerum. Expedita minima beatae, magni voluptate nihil quod, dolorum ad neque libero ab dignissimos obcaecati!",
    src: "../Assets/Images/BMW.jpg",
  },
  {
    id: 3,
    name: "Ferari",
    describtion:
      "Ferari ipsum dolor, sit amet consectetur adipisicing elit. Ea, iusto provident? Facilis doloremque libero asperiores rerum. Expedita minima beatae, magni voluptate nihil quod, dolorum ad neque libero ab dignissimos obcaecati!",
    src: "../Assets/Images/Ferari.jpg",
  },
  {
    id: 4,
    name: "Jiff",
    describtion:
      "Jiff ipsum dolor, sit amet consectetur adipisicing elit. Ea, iusto provident? Facilis doloremque libero asperiores rerum. Expedita minima beatae, magni voluptate nihil quod, dolorum ad neque libero ab dignissimos obcaecati!",
    src: "../Assets/Images/Jiff.jpg",
  },
  {
    id: 5,
    name: "Bogati",
    describtion:
      "Bogati ipsum dolor, sit amet consectetur adipisicing elit. Ea, iusto provident? Facilis doloremque libero asperiores rerum. Expedita minima beatae, magni voluptate nihil quod, dolorum ad neque libero ab dignissimos obcaecati!",
    src: "../Assets/Images/Bogati.jpg",
  },
];

let bigImge = document.querySelector('.big-img');
let imgTitle = document.querySelector('.img-title');
let imgDesc = document.querySelector('.img-desc');

bigImge.src = imagesDB[0].src;
imgTitle.textContent = imagesDB[0].name;
imgDesc.textContent = imagesDB[0].describtion;

let images = document.querySelector(".images-contr");

Array.from(images.children).forEach((image,index) =>{
  image.src = imagesDB[index].src;
  image.addEventListener("click", e=>{
    // bigImge.src = e.target.src;
    bigImge.src = imagesDB[index].src;
    imgTitle.textContent = imagesDB[index].name;
    imgDesc.textContent = imagesDB[index].describtion;

    bigImge.classList.add("animate-img");
    setTimeout(() => {
      bigImge.classList.remove("animate-img");
    }, 400);
  })
})
