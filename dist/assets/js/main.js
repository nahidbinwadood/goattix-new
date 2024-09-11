document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // hero--slider
  $(".hero--slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
  });

  // handleAccordion
  function handleAccordion() {
    let accordionHeader = document.querySelectorAll(".accordion-header");

    accordionHeader?.forEach((header) => {
      header.addEventListener("click", function () {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.marginTop = "0";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.marginTop = "22px";
        }

        header.classList.toggle("active");

        document
          .querySelectorAll(".accordion-content")
          .forEach((otherContent) => {
            if (otherContent !== content) {
              otherContent.style.maxHeight = null;
            }
          });

        document
          .querySelectorAll(".accordion-header")
          .forEach((otherHeader) => {
            if (otherHeader !== header) {
              otherHeader.classList.remove("active");
            }
          });
      });
    });
  }
  handleAccordion();

  // handle Quantity
  function handleQuantity() {
    let quantityWrapp = document.querySelectorAll(".quantity");
    if (quantityWrapp) {
      quantityWrapp.forEach((quantity) => {
        let plusBtn = quantity.querySelector(".plus");
        let minusBtn = quantity.querySelector(".minus");
        let inputElme = quantity.querySelector("input");
        // plusbtn
        plusBtn.addEventListener("click", function () {
          let currentValue = parseInt(inputElme.value);

          if (currentValue < 10) {
            inputElme.value = currentValue + 1;
            minusBtn.disabled = false;
          }
          if (parseInt(inputElme.value) >= 10) {
            plusBtn.disabled = true;
          }
        });

        // minus button
        minusBtn.addEventListener("click", function () {
          let currentValue = parseInt(inputElme.value);

          if (currentValue > 0) {
            inputElme.value = currentValue - 1;
            plusBtn.disabled = false;
          }
          if (parseInt(inputElme.value) <= 0) {
            minusBtn.disabled = true;
          }
        });
      });
    }
  }
  handleQuantity();
  // showPopup
  function showPopup(popElem, overlay) {
    if (popElem && overlay) {
      popElem.classList.add("opacity-100", "visible");
      overlay.classList.add("opacity-100", "visible");
      popElem.classList.remove("opacity-0", "invisible");
      overlay.classList.remove("opacity-0", "invisible");
    }
  }
  // hidePopup
  function hidePopup(popElem, overlay) {
    if (popElem && overlay) {
      popElem.classList.remove("opacity-100", "visible");
      overlay.classList.remove("opacity-100", "visible");
      popElem.classList.add("opacity-0", "invisible");
      overlay.classList.add("opacity-0", "invisible");
    }
  }
  // handleGetTicketPopup
  function handleGetTicketPopup() {
    let trigger = document.querySelector(".btn-getTicket");
    let popup = document.getElementById("getTicketPopup");
    let overlay = document.querySelector(".overlay");

    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        showPopup(popup, overlay);
      });

      // Add event listener to close the popup when clicking outside
      document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && !trigger.contains(event.target)) {
          hidePopup(popup, overlay);
        }
      });
    }
  }
  handleGetTicketPopup();
  // handleCustomTab 
  function handleCustomTab() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabLinks?.forEach((link) => {
        link?.addEventListener('click', function () {
            tabLinks.forEach((link) => link.classList.remove('active'));
            
            // Apply fade-out effect to all panes before switching
            tabPanes.forEach((pane) => {
                pane.classList.add('fade-out');
                pane.classList.remove('fade-in');
            });

            // Wait for the fade-out effect to complete, then switch tabs
            setTimeout(() => {
                tabPanes.forEach((pane) => pane.classList.add('hidden'));

                // Show the corresponding tab pane with a fade-in effect
                const tabId = link.getAttribute('data-tab');
                const activePane = document.getElementById(tabId);
                activePane.classList.remove('hidden');
                activePane.classList.remove('fade-out');
                activePane.classList.add('fade-in');
            }, 300); 

            link.classList.add('active');
        });
    });
}

handleCustomTab();

  
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    once: true,
  });
  // Initialize niceSelect
  $("select").niceSelect();
});
