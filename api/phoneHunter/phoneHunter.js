// Loder
const loder = (isLoding) => {
  const lodingContainer = document.getElementById("loder");
  if (isLoding === true) {
    lodingContainer.classList.remove("d-none");
  } else if (isLoding === false) {
    lodingContainer.classList.add("d-none");
  }
};

const getUserData = () => {
  loder(true);
  const userText = document.getElementById("userText").value;
  loadPhoneData(userText);
};

const loadPhoneData = async (text) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${text}`
    );
    const data = await res.json();
    showPhoneData(data.data);
  } catch (error) {
    console.log(error);
  }
};

const showPhoneData = (data) => {
  const phoneContainer = document.getElementById("phoneContaienr");
  data.forEach((element) => {
    const { brand, phone_name, slug, image } = element;
    const phoneItem = document.createElement("div");
    phoneItem.classList.add("phoneItem");
    phoneItem.innerHTML = `
    <div class="col p-5">
    <div class="card h-100">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-title">${brand}</h6>
        <h5 class="card-title">${phone_name}</h5>
        <p class="card-text">${slug}</p>
        <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="phone('${slug}')">
        More Details
      </button>
      </div>
    </div>
  </div>
    `;
    phoneContainer.appendChild(phoneItem);
    loder(false);
  });
  //   console.log(data);
};

// Load Single Phone Data
const phone = (id) => {
  try {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      .then((response) => response.json())
      .then((data) => showPhone(data.data));
  } catch (error) {
    console.log(error);
  }
};

// show PHone Data
const showPhone = (data) => {
  const phoneDiv = document.getElementById("phoneDetails");
  const { brand, image, name, releaseDate, slug } = data;
  const { chipSet, displaySize, memory, sensors, storage } = data?.mainFeatures;
  const { Bluetooth, GPS, NFC, Radio, USB, WLAN } = data?.others;
  phoneDiv.innerHTML = `
  <!-- Button trigger modal -->
 
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        <h6>${brand}</h6>
          <h1 class="modal-title fs-5 mx-2" id="staticBackdropLabel">${name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${image}"></img>
          <hr>
          <p>ChipSet: ${chipSet}</p>
          <p>DisplaySize: ${displaySize}</p>
          <p>Memory: ${memory}</p>
          <p>Sensors: ${sensors}</p>
          <p>Storage: ${storage}</p>
          <hr>
          <p>Bluetooth: ${Bluetooth ? Bluetooth : "NOT Avialabe"}</p>
          <p>GPS: ${GPS}</p>
          <p> NFC: ${NFC}</p>
          <p>Radio: ${Radio}</p>
          <p>USB: ${USB}</p>
          <p>WLAN: ${WLAN}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
   `;
  console.log(data);
};
