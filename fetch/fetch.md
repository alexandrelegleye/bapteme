# La notion du FETCH


- Sur beaucoup d'application, l'on dissocie la partie front (le rendu coté client, ce que l'on voit) et la partie back (côté serveur qui gère par exemple les authentifications, relations avec la base de donnée...)
- Cela permet notamment à un seul back d'être relié à plusieurs applications front (ex: un site web, une appli mobile...)
- Fetch est une méthode permettant d'envoyer une requête au serveur en back et ainsi de récupérer les nouvelles informations en front.
- Cette requête est asynchrone car l'on doit attendre la réponse du back.

## Ex avec la route de récupération d'une carte via son id

- Dans le dossier Fetch tu trouveras un exemple d'un front récupérant les infos d'une carte, en faisant une requête au back que tu as déjà codé.

!! Le back ne gérant pas le rendu pour cette requête il faut modifier le retour envoyer afin qu'au lieu de renvoyer une vue ejs, on ne renvoit uniquement les informations de la carte

```js
renderOneCard: async (req, res, next) => {
    try {
      // Je récupère la valeur de l'Id dans le paramètre
      const id = Number(req.params.id);
      // Je recherche la carte correspondant à l'Id
      const card = await dataMapper.getOneCard(id);
      // console.log(card);
      if(card){

        /* res.render("card/card-item", { card }) */

        // On renvoie uniquement les informations de la carte
        res.send(card)
        
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
```

- le front pour l'exemple est constitué d'un input et d'un bouton submit
- Tu choisi la carte que tu souhaite et celle ci s'affiche.
- En évitant de recharger une vue pour chaque demande, on peut uniquement mettre à jour dans la page la partie souhaitée (ici l'image de la carte), tu verras ainsi qu'à chaque demande la page n'est pas rechargée.

## En détail

- Notre nouveau front fait appel au fichier js fetch.js
- celui se sert de rajouter un écouteur d'évènement sur le formulaire.
- Lorsqu'un évènement de type 'submit' est intercepté, l'on déclenche la fonction 'getCard'
- Tu verras dans les commentaires le cheminement de la fonction
  
```js
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
    }
```

- Tu trouveras ci dessous des ressources afin d'en découvrir un peu plus, tu seras également amené lors d'une prochaine à voir fetch en détail et à le pratiquer.

- https://fr.javascript.info/fetch
- https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

