  document.addEventListener('DOMContentLoaded', function() {
     let elemnt_footer = document.querySelector('footer');
     let  div_footer = elemnt_footer.querySelector('div');
    

  async function fetchData() {
  try {
    const response = await fetch('https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=25'); // Remplacez par votre URL d'API
      console.log(response);
    if (!response.ok) {
      throw new Error('La réponse du réseau n\'était pas OK');
    }

    const data = await response.json(); 


    data.results.forEach(item=> {
     console.log(item); 

      let p_element = document.createElement('p');
      p_element.textContent = item.nom_etablissement;
      div_footer.appendChild(p_element);
      p_element.style.color = "green";});


  } catch (error) {
    console.error('Il y a eu un problème avec l\'opération fetch :', error);
  }
}
// Appelez la fonction pour exécuter la requête
  fetchData();
  console.log('S execute apres fetchData mais avant la fin de fetchData' );


});