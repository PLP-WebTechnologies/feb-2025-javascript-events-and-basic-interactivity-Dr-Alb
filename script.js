// Button click to change text
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("textChange").textContent = "You clicked me! 🎉";
  });
  
  // Hover effect on button
  const hoverBtn = document.getElementById("changeTextBtn");
  hoverBtn.addEventListener("mouseover", () => hoverBtn.style.backgroundColor = "#ffcc00");
  hoverBtn.addEventListener("mouseout", () => hoverBtn.style.backgroundColor = "");
  
  // Keypress detection
  document.addEventListener("keydown", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Secret double-click
  hoverBtn.addEventListener("dblclick", () => alert("🌟 Double-click magic! 🌟"));
  
  // Image gallery
  const galleryImg = document.getElementById("galleryImg");
  const galleryImages = [
    "https://via.placeholder.com/200/ff7f7f",
    "https://via.placeholder.com/200/7fbfff",
    "https://via.placeholder.com/200/90ee90"
  ];
  let currentImg = 0;
  
  document.getElementById("nextImgBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % galleryImages.length;
    galleryImg.src = galleryImages[currentImg];
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      const tabNum = button.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
      document.getElementById(`tab-${tabNum}`).style.display = "block";
    });
  });
  
  // Form validation
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 8;
  
    if (!emailValid) {
      feedback.textContent = "Please enter a valid email.";
    } else if (!passwordValid) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.textContent = "Success! 🎉 Form is valid.";
    }
  });
  