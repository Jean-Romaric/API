
const  div = document.querySelector("div")


async function fetchData() {
  try {
    const response = await fetch('https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=25');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data,);

    data.results.forEach(item=> {
     console.log(item); 

      let p_element = document.createElement('p');
      p_element.textContent = item.nom_etablissement;
      div.appendChild(p_element);
      p_element.style.color = "green";
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
