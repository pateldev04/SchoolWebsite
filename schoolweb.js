
// document.getElementById('admissionForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     if (validateAdmissionForm()) {
//         alert("Admission form submitted successfully!");
//         window.location.href = "thankyou.html"; 
//     }
// });

// function validateAdmissionForm() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     let isValid = true;

//     document.getElementById("nameError").textContent = "";
//     document.getElementById("emailError").textContent = "";
//     document.getElementById("phoneError").textContent = "";

//     if (name.trim() === "") {
//         document.getElementById("nameError").textContent = "Name is required!";
//         isValid = false;
//     }

//     if (email.trim() === "" || !email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
//         document.getElementById("emailError").textContent = "Valid email is required!";
//         isValid = false;
//     }

//     if (phone.trim() === "") {
//         document.getElementById("phoneError").textContent = "Phone number is required!";
//         isValid = false;
//     }

//     return isValid;
// }

//            document.getElementById('loginForm').addEventListener('submit', function(event) {
//             event.preventDefault();
        
//             if (validateForm()) {
//                 document.getElementById("loginMessage").textContent = "Login successful! Redirecting to Home...";
        
//                 setTimeout(() => {
//                     window.location.hash = "#home"; 
//                 }, 1000); 
//             }
//         });
        
//         function validateForm() {
//             const username = document.getElementById("username").value;
//             const password = document.getElementById("password").value;
        
//             let isValid = true;
        
//             document.getElementById("usernameError").textContent = "";
//             document.getElementById("passwordError").textContent = "";
        
//             if (username.trim() === "") {
//                 document.getElementById("usernameError").textContent = "Username is required!";
//                 isValid = false;
//             }
        
//             if (password.trim() === "") {
//                 document.getElementById("passwordError").textContent = "Password is required!";
//                 isValid = false;
//             }
        
//             return isValid;
//         }   //this code for  login form
   

   
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });


// const navLinksItems = document.querySelectorAll(".nav-links a");
// navLinksItems.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href").slice(1); 
//     const targetElement = document.getElementById(targetId);

//     window.scrollTo({
//       top: targetElement.offsetTop - 50, // Offset for navbar height
//       behavior: "smooth", // Smooth scroll 
//     });
//   });
// });


// const sections = document.querySelectorAll("section");

// const revealSection = () => {
//   sections.forEach((section) => {
//     const sectionTop = section.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (sectionTop < windowHeight - 100) {
//       section.classList.add("visible");
//     } else {
//       section.classList.remove("visible");
//     }
//   });
// };

// window.addEventListener("scroll", revealSection);
// revealSection();


// const anchors = document.querySelectorAll('a[href^="#"]');
// anchors.forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     document.querySelector(targetId).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });
//   });
// });


// const scrollToTopBtn = document.createElement('button');
// scrollToTopBtn.classList.add('scroll-to-top');
// scrollToTopBtn.innerHTML = "&#8679;"; 
// document.body.appendChild(scrollToTopBtn);

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     scrollToTopBtn.classList.add("visible");
//   } else {
//     scrollToTopBtn.classList.remove("visible");
//   }
// });

// scrollToTopBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// function validateForm(event) {
//   const form = event.target;
//   const name = form.querySelector("input[name='name']");
//   const email = form.querySelector("input[name='email']");
  
//   if (!name.value || !email.value) {
//     alert("All fields are required!");
//     event.preventDefault();
//   } else {
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.value.match(emailPattern)) {
//       alert("Please enter a valid email address.");
//       event.preventDefault();
//     }
//   }
// }

// document.querySelector("form")?.addEventListener("submit", validateForm);

