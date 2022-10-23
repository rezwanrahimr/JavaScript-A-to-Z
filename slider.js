var allImage = [
  "https://azislam.com/wp-content/uploads/2019/03/Al-Quran-1-300x239.jpg",
  "https://img.freepik.com/premium-vector/nuzul-ar-quran_178028-58.jpg?w=2000",
  "https://i.pinimg.com/736x/cb/77/ee/cb77eefa0f8ab15c5759f39da1f791dc.jpg",
];
var image = document.getElementById("imgg");

var count = 0;
function next() {
  count++;
  if (count >= allImage.length) {
    count = 0;
    image.src = allImage[count];
  } else {
    image.src = allImage[count];
  }
}

function pre() {}
