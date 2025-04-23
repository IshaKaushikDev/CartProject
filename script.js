const prices = { 1: 10.00, 2: 18.00, 3: 24.00 };
function updateTotal() {
  const selected = document.querySelector('input[name="units"]:checked').value;
  document.getElementById('totalValue').textContent = `$${prices[selected].toFixed(2)} USD`;
}
document.querySelectorAll('input[name="units"]').forEach(radio => {
  radio.addEventListener('change', updateTotal);
});
updateTotal();

function updatePopularClass() {
  document.querySelectorAll('input[name="units"]').forEach(rb => {
    const optionSection = rb.closest('.option');
    if (optionSection) {
      if (rb.checked) {
        optionSection.classList.add('popular');
      } else {
        optionSection.classList.remove('popular');
      }
    }
  });
}
document.querySelectorAll('input[name="units"]').forEach(radio => {
  radio.addEventListener('change', updatePopularClass);
});
updatePopularClass();

document.querySelectorAll('input[name="units"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
    radio.closest('.option').classList.add('selected');
  });
});
window.addEventListener('DOMContentLoaded', function() {
  const checked = document.querySelector('input[name="units"]:checked');
  if (checked) {
    checked.closest('.option').classList.add('selected');
  }
});

document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Added to cart!');
});