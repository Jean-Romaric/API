  document.addEventListener('DOMContentLoaded', function() {
     let elemnt_footer = document.querySelector('footer');
     let  div_footer = elemnt_footer.querySelector('div');
    

  async function fetchData() {
  try {
    const rat = await fetch('https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=25'); // Remplacez par votre URL d'API
      console.log(rat);
    // Vérifiez si la requête a réussi => Response { type: "cors", url: "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=6", redirected: false, status: 200, ok: true, statusText: "", headers: Headers(6), body: ReadableStream, bodyUsed: false }
    if (!rat.ok) {
      throw new Error('La réponse du réseau n\'était pas OK');
    }

    const data = await rat.json(); // Convertissez la réponse en JSON
    console.log(data); // Affichez les données dans la console => Object { total_count: 69202, results: (6) […] }
    console.log(data.results); // Utilisez les données récupérées => Array(6) [ {…}, {…}, {…}, {…}, {…}, {…} ]

    console.log(data.results.nom_etablissement); // Affiche "undefined" car results est un tableau
    console.log(data.results[0].nom_etablissement); // Affiche le nom du premier établissement


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