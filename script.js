const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Apply animate.css classes after content is loaded
window.addEventListener('load', function () {
  document.querySelectorAll('.animate__animated').forEach(function (el) {
    el.classList.add('animate__fadeIn');
  });
});

let deferredPrompt;
  
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  const addToHomeButton = document.getElementById('add-to-home-button');
  addToHomeButton.style.display = 'block';
});

const addToHomeButton = document.getElementById('add-to-home-button');
  
addToHomeButton.addEventListener('click', () => {
  // Show the deferred installation prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt');
      } else {
        console.log('User dismissed the installation prompt');
      }
      
      // Reset the deferred prompt
      deferredPrompt = null;
    });
  }
});

// ReadMore feature
function showRemaining() {
  const paragraphs = document.querySelectorAll('.toShowText');
  for (let i = 3; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'block';
    paragraphs[i].classList.add('animate__animated', 'animate__fadeIn');
  }

  // Hide the "Read More" link after showing remaining paragraphs
  document.getElementById('readMoreLink').style.display = 'none';
}

// Form change feature

const data = {
  states: [
    { id: 'lagos', name: 'Lagos', regions: ["surulere"] },
    { id: 'abuja', name: 'Abuja', regions: ["kubwa"] },
    { id: 'enugu', name: 'Enugu', regions: ["ogui"] },
    
  ],
  regions: [
    { id: 'surulere', name: ' Surulere', centres: ['centre1'] },
    { id: 'kubwa', name: 'Kubwa', centres: ['centre2'] },
    { id: 'ogui', name: 'Ogui', centres: ['centre3'] },
    
  ],
  centres: [
    { id: 'centre1', name: 'The Female Doc', managerName: 'Dr. Ayodele Akenzua', mapsLink: 'https://is.gd/8HKDW7', address: 'No 11 Gbajumo Close, off Adeniran Ogunsanya Street, Surulere, Lagos, Nigeria.', phone:'+234 806 261 6951', formlink: 'https://docs.google.com/forms/d/e/1FAIpQLSccXsXhUx-a61qcgKeG3Vpa9o9f30jDnNnPJi_5dir5fcFXCQ/viewform', },
    { id: 'centre2', name: 'Xabat Gynecology Clinic Ltd', managerName: 'Dr. Christian Omale Musa', mapsLink: 'https://maps.app.goo.gl/Nu6sSmAp7hNRTxQj6', address: 'Suite B7 Goshen Plaza, Kubwa Abuja.', phone: '08039559525', formlink: '', },
    { id: 'centre3', name: 'Nufan Diagnostic services', managerName: 'Okoye Emmanuel Chibuzo', mapsLink: 'https://goo.gl/maps/5MijcNRdNTo3diJd7', address: 'No 14 Oba Street Ogui Enugu, Nigeria', phone: '08137272674, 08037411702', formlink: '', },
    
  ],
};

const stateSelect = document.getElementById('state');
const regionSelect = document.getElementById('region');
const centreSelect = document.getElementById('centre');
const centreCardContainer = document.getElementById('centreCard');

const appointmentContainer = document.getElementById('appointmentCont');
const appointmentLink = document.getElementById('appointmentLink');
const appointmentIframe = document.getElementById('appointmentIframe');

// Populate state select options
data.states.forEach(state => {
  const option = document.createElement('option');
  option.value = state.id;
  option.textContent = state.name;
  stateSelect.appendChild(option);
});

// Populate region select
stateSelect.addEventListener('change', () => {
  // Clear existing options in region select
  regionSelect.innerHTML = '<option value="" disabled selected>Select Region</option>';
  centreSelect.innerHTML = '';
  centreCardContainer.innerHTML = '';
  appointmentContainer.classList.add('hidden');

  const selectedStateId = stateSelect.value;
  const selectedState = data.states.find(state => state.id === selectedStateId);

  // Populate region select options based on selected state
  selectedState.regions.forEach(regionId => {
    const matchingRegion = data.regions.find(region => region.id === regionId);
    if (matchingRegion) {
      const option = document.createElement('option');
      option.value = matchingRegion.id;
      option.textContent = matchingRegion.name;
      regionSelect.appendChild(option);
    }
  });
  
  // Show regionContainer
  document.getElementById('regionContainer').classList.remove('hidden');
  // Hide centreContainer and centreCard
  document.getElementById('centreContainer').classList.add('hidden');
  centreCardContainer.classList.add('hidden');
});

// Populate centre select
regionSelect.addEventListener('change', () => {
  // Clear existing options in centre select
  centreSelect.innerHTML = '<option value="" disabled selected>Select Centre</option>';
  centreCardContainer.innerHTML = '';

  const selectedRegionId = regionSelect.value;
  const selectedRegion = data.regions.find(region => region.id === selectedRegionId);

  // Populate centre select options based on selected region
  selectedRegion.centres.forEach(centreId=> {
    const matchingcentre = data.centres.find(centre => centre.id === centreId);
    if (matchingcentre) {
      const option = document.createElement('option');
      option.value = matchingcentre.id;
      option.textContent = matchingcentre.name;
      centreSelect.appendChild(option);
    }
  });

  // Show centreContainer
  document.getElementById('centreContainer').classList.remove('hidden');
  centreCardContainer.classList.add('hidden');
});

centreSelect.addEventListener('change', () => {
  const selectedCentreId = centreSelect.value;
  const selectedCentre = data.centres.find(centre => centre.id === selectedCentreId);

  // Display centre details card based on selected centre
  centreCardContainer.innerHTML = `
  <div class="p-4 lg:p-6 bg-primary text-white rounded-lg my-6 animate__animated">
    <h2 class="font-semibold text-2xl lg:text-3xl transition duration-300 mb-2">${selectedCentre.name}</h2>
    <div class="">
      <p class="py-2 transition duration-300 text-lg">
      ${selectedCentre.name} is managed by ${selectedCentre.managerName} and is located at:
      </p>
      <address class="py-2 text-lg">
      ${selectedCentre.address}
      </address>
      <p class="py-2 text-lg">
        For inquiries, you can reach out on:
        <span class="block my-2">Phone: ${selectedCentre.phone}</span>
      </p>
    </div>
    <div class="mt-4 ">
      <a rel="noopener" class="underline after:content-['_↗'] transition duration-300 block text-lg text-white" target="_blank" href="${selectedCentre.mapsLink}">View on Maps</a>
    </div>
  </div>
  `;

  // Show centreCard
  centreCardContainer.classList.remove('hidden');

  appointmentContainer.classList.remove('hidden');
  appointmentLink.href = selectedCentre.formlink;
  appointmentIframe.src = selectedCentre.formlink;
});