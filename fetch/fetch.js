const app = {

    // Ecouteur d'évènement sur le submit du formulaire
    addListenerToForm: function () {
        document.getElementById('form').addEventListener('submit', app.getCard);
    },

    // Fonction permettant de récuperer les infos d'une carte puis de l'afficher
    getCard: async function (event) {
        // empêche le rechargement de la page dû au submit
        event.preventDefault()

        // permet de formatter le formulaire afin d'en extraire les valeurs des inputs
        let form = new FormData(document.getElementById("form"));

        // On récupère la valeur de l'input 'card-number'
        let inputValue = form.get("card-number");

        // on peut voir dans la console la valeur de la carte demandée
        console.log(inputValue);

        try {

            // On défini les paramêtre de notre requête
            let myRequestParam = {
                method: 'GET',
            };

            // On envoie la requête au back via le fetch (premier argument l'url, et en second les paramêtre que l'on a défini précédemment)
            // Fetch est une requête asynchrone qui renvoie une promesse
            let response = await fetch(`http://localhost:1235/card/${inputValue}`, myRequestParam);
            
            // on attend le retour de la réponse puis on la modifie afin de la manipuler plus facilement
            const card = await response.json();
            
            // On peut voir dans la console le retour du back avec toutes les infos sur la carte demandée
            console.log(card);


            // Insertion de l'image de la carte sur la page
            document.getElementById('result').innerHTML = ""
            let img = document.createElement('div')
            img.innerHTML = `<img src="../public/visuals/${card.visual_name}">`
            document.getElementById('result').appendChild(img)

        } catch (error) {
            console.log(error);
        }
    },


}






app.addListenerToForm()