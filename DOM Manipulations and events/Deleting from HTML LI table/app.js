function deleteByEmail() {
  const rows = Array.from(document.querySelectorAll("tr")).splice(1, 4);
  let input = document.querySelector('input[name="email"]').value;

  let found = false;

  for (const row of rows) {
    if (row.children[1].textContent == input) {
      const parent = row.parentElement;
      parent.removeChild(row);
      found = true;
      document.querySelector('input[name="email"]').value = "";

      break;
    }
  }

  document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.'
}
