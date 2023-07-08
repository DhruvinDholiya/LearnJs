function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form data
  const form = document.getElementById('myForm');
  const name = form.elements.name.value;
  const email = form.elements.email.value;

  // Generate PDF
  const doc = new window.jspdf.jsPDF();
  doc.text(`Name: ${name}`, 10, 10);
  doc.text(`Email: ${email}`, 10, 20);

  // Save PDF
  doc.save('form_details.pdf');
}

// Attach form submission event listener
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
