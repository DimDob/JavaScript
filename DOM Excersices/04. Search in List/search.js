function search() {
   let txtInput = document.getElementById("searchText").value;
   const towns = Array.from(document.getElementById("towns").children);
 
   let matches = 0;
 
   for (const town of towns) {
     if (town.textContent.includes(txtInput)) {
       matches += 1;
       town.style.fontWeight = "bold";
       town.style.textDecoration = "underline";
     }
   }
   document.getElementById("result").textContent = `${matches} matches found`;
   document.getElementById("searchText").value = "";
 }
 