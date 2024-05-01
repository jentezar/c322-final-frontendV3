
  const host = "http://localhost:8080";
  window.onload = function() {
            displayDeliveryInfo();
            displayFlowerDetails();
            toggleLoginLinks();
        };


    function displayFlowerDetails() {
      const flowerName = localStorage.getItem("flowerName");
      const flowerImage = localStorage.getItem("flowerImage");

      if (flowerName && flowerImage) {
        const flowerDetailsContainer = document.getElementById('flowerDetails');
        flowerDetailsContainer.innerHTML = `
        <h2>${flowerName}</h2>
        <img src="${flowerImage}" alt="${flowerName}" style="max-width: 25%; height: 5;">
            `;
        } else {
            console.error("Flower name or image not found in local storage.");
        }
    }


    function displayDeliveryInfo() {
        const purchasePrice = localStorage.getItem("purchasePrice");
        const deliveryDate = localStorage.getItem("deliveryDate");

        if (purchasePrice && deliveryDate) {
            document.getElementById("purchasePrice").textContent = purchasePrice;
            document.getElementById("deliveryDate").textContent = deliveryDate;
        } else {
            console.error("Purchase option or delivery date not found in local storage.");
        }
    }

function continueButton() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let relationship = document.getElementById("relationship").value;
        let address = document.getElementById("address").value;
        let apt = document.getElementById("apt").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let zip = document.getElementById("zip").value;

        if(!firstName || !lastName 
        || !relationship || !address || 
        !city || !state || !zip){
          alert("Fill in required fields (*)");
          return;
        }

        let info = {
            firstName: firstName,
            lastName: lastName,
            relationship: relationship,
            address: address,
            apt: apt,
            city: city,
            state: state,
            zip: zip
        };

        localStorage.setItem("info", JSON.stringify(info));
    window.location.href = "placeorder.html"
    }

    function toggleLoginLinks() {
        const loginLinksContainer = document.getElementById('loginLinks');
        if (isLoggedIn()) {
            loginLinksContainer.style.display = 'none';
        }
    }
    