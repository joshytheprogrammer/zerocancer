const data = {
  states: [
    { id: 'lagos', name: 'Lagos', regions: ["surulere"] },
    // { id: 'lagos', name: 'Lagos', regions: ["surulere", "ago"] },
    { id: 'abuja', name: 'Abuja', regions: ["kubwa"] },
    { id: 'enugu', name: 'Enugu', regions: ["ogui"] },
  ],
  regions: [
    { id: 'surulere', name: ' Surulere', centres: ['centre1'] },
    // { id: 'ago', name: ' Ago', centres: ['centre4'] },
    { id: 'kubwa', name: 'Kubwa', centres: ['centre2'] },
    { id: 'ogui', name: 'Ogui', centres: ['centre3'] },
    
  ],
  centres: [
    { 
      id: 'centre1', 
      name: 'The Female Doc', 
      managerName: 'Dr. Ayodele Akenzua', 
      services: 'Screening + Diagnosis and Treatment',
      mapsLink: 'https://is.gd/8HKDW7', 
      address: 'No 11 Gbajumo Close, off Adeniran Ogunsanya Street, Surulere, Lagos, Nigeria.', 
      phone:'+234 806 261 6951', 
      formlink: 'https://forms.gle/eCLRi6mHxXei9Nwm9'
    },
    { 
      id: 'centre2', 
      name: 'Xabat Clinic Ltd', 
      managerName: 'Dr. Christian Omale Musa',  
      services: 'Screening + Diagnosis and Treatment',
      mapsLink: 'https://maps.app.goo.gl/Nu6sSmAp7hNRTxQj6', 
      address: 'Suite B7 Goshen Plaza, Kubwa Abuja.', 
      phone: '08039559525', 
      formlink: 'https://forms.gle/2heiXGNFPSUeaRDN6' 
    },
    { 
      id: 'centre3', 
      name: 'Nufan Diagnostic services', 
      managerName: 'Okoye Emmanuel Chibuzo',  
      services: 'Screening only',
      mapsLink: 'https://goo.gl/maps/5MijcNRdNTo3diJd7', 
      address: 'No 14 Oba Street Ogui Enugu, Nigeria', 
      phone: '08137272674, 08037411702', 
      formlink: 'https://forms.gle/pPitAobC3ucFCk657'
    },
    // { 
    //   id: 'centre4', 
    //   name: 'Test Pharmacy', 
    //   managerName: 'joshytheprogrammer',  
    //   services: 'Buy Self Sampling Device',
    //   mapsLink: 'https://goo.gl/maps/5MijcNRdNTo3diJd7', 
    //   address: 'No 14 Oba Street Ogui Enugu, Nigeria', 
    //   phone: '08137272674, 08037411702', 
    //   formlink: 'https://forms.gle/pPitAobC3ucFCk657'
    // },
    
  ],
};

const stateSelect = document.getElementById('state');
const regionSelect = document.getElementById('region');
const centreSelect = document.getElementById('centre');
const serviceSelect = document.getElementById('service');
const centreCardContainer = document.getElementById('centreCard');
const serviceContainer = document.getElementById('serviceContainer');

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
  document.getElementById('serviceContainer').classList.add('hidden');
  centreCardContainer.classList.add('hidden');
  appointmentContainer.classList.add('hidden');
});

// Populate centre select
regionSelect.addEventListener('change', () => {
  // Clear existing options in centre select
  centreSelect.innerHTML = '<option value="" disabled selected>Select Centre</option>';
  serviceSelect.innerHTML = '<option value="" disabled selected>Select Service Type</option>';
  centreCardContainer.innerHTML = '';

  const selectedRegionId = regionSelect.value;
  const selectedRegion = data.regions.find(region => region.id === selectedRegionId);
  
  // Populate service select options based on selected region
  const servicesSet = new Set();
  selectedRegion.centres.forEach(centreId => {
    const matchingCentre = data.centres.find(centre => centre.id === centreId);
    if (matchingCentre) {
      const services = matchingCentre.services.split(', ');
      services.forEach(service => servicesSet.add(service));
    }
  });

  servicesSet.forEach(service => {
    const option = document.createElement('option');
    option.value = service.toLowerCase();
    option.textContent = service;
    serviceSelect.appendChild(option);
  });

  // Show serviceContainer
  document.getElementById('centreContainer').classList.add('hidden');
  document.getElementById('serviceContainer').classList.remove('hidden');
  centreCardContainer.classList.add('hidden');
  appointmentContainer.classList.add('hidden');
});

serviceSelect.addEventListener('change', () => {
  centreSelect.innerHTML = '<option value="" disabled selected>Select Centre</option>';

  const selectedRegionId = regionSelect.value;
  const selectedServiceType = serviceSelect.value;
  const selectedRegion = data.regions.find(region => region.id === selectedRegionId);

  // Populate centre select options based on selected region and service type
  selectedRegion.centres.forEach(centreId => {
    const matchingCentre = data.centres.find(centre => centre.id === centreId);
    
    if (matchingCentre && matchingCentre.services.toLowerCase() === selectedServiceType) {
      const option = document.createElement('option');
      option.value = matchingCentre.id;
      option.textContent = matchingCentre.name;
      centreSelect.appendChild(option);
    }
  });

  // Show centreContainer
  document.getElementById('centreContainer').classList.remove('hidden');
  centreCardContainer.classList.add('hidden');
  appointmentContainer.classList.add('hidden');
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
      <p class="py-2 text-lg">
        Please note that the following centre is for:
        <span class="block font-bold my-2">${selectedCentre.services}</span>
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