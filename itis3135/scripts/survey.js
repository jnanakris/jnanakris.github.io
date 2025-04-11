// survey.js

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("output").innerHTML = "";
    document.querySelectorAll('.course-field').forEach(field => field.remove());
  }
  
  function addCourse() {
    const container = document.getElementById("coursesContainer");
    const div = document.createElement("div");
    div.className = "course-field";
    div.innerHTML = `
      <input type="text" class="course" placeholder="Enter course name" required>
      <button type="button" onclick="removeCourse(this)">Delete</button>
    `;
    container.appendChild(div);
  }
  
  function removeCourse(button) {
    button.parentElement.remove();
  }
  
  function validateImage(fileInput) {
    const file = fileInput.files[0];
    if (file && !['image/png', 'image/jpeg'].includes(file.type)) {
      alert("Please upload a PNG or JPG image only.");
      fileInput.value = "";
      return false;
    }
    return true;
  }
  
  function getCourses() {
    return Array.from(document.querySelectorAll('.course'))
                .map(input => input.value.trim())
                .filter(val => val);
  }
  
  function buildIntroPage(event) {
    event.preventDefault();
    const imageInput = document.getElementById("image");
    if (!validateImage(imageInput)) return;
  
    const courses = getCourses();
    const output = `
      <h2>${document.getElementById("name").value}</h2>
      <h3>${document.getElementById("mascot").value}</h3>
      <figure>
        <img src="${URL.createObjectURL(imageInput.files[0])}" alt="Uploaded Image">
        <figcaption>${document.getElementById("caption").value}</figcaption>
      </figure>
      <p><strong>Personal Background:</strong> ${document.getElementById("personal").value}</p>
      <p><strong>Professional Background:</strong> ${document.getElementById("professional").value}</p>
      <p><strong>Academic Background:</strong> ${document.getElementById("academic").value}</p>
      <p><strong>Web Development Background:</strong> ${document.getElementById("webDev").value}</p>
      <p><strong>Primary Platform:</strong> ${document.getElementById("platform").value}</p>
      <p><strong>Courses:</strong> <ul>${courses.map(c => `<li>${c}</li>`).join('')}</ul></p>
      <p><strong>Funny Thing:</strong> ${document.getElementById("funny").value}</p>
      <p><strong>Anything Else:</strong> ${document.getElementById("other").value}</p>
      <p><em>You can <a href="byo_intro.html" onclick="resetForm()">start over</a>.</em></p>
    `;
  
    document.getElementById("introForm").style.display = "none";
    document.getElementById("output").innerHTML = output;
  }
  
  document.getElementById("introForm").addEventListener("submit", buildIntroPage);
  