# Correction du MCD

- Tu as dans l'ensemble compris le principe d'un MCD
- Attention toutefois aux cardinalités, la relation entre un produit et un utilisateur qui like. c'est une relation de type Many-to-Many. Un utilisateur peut n'avoir liker aucun produit comme plusieurs, et ainsi un produit peut ne pas avoir été liké ou être liké par plusieurs utilisateurs.
=> Les cardinalités seront donc de 0,N de chaqué côté.
- En mettant 1,1 de chaque côté, tu forces un utilsateur à liker uiquement un produit, et un produit ne peut être liké que par un utilisateur.
- N'hésites pas à relir les types de cardinalités existantes et leurs écritures

- Afin de réaliser tes MCD tu disposes de beaucoup d'outils disponible.
- Tu peux très bien le réaliser à la main ou utiliser un outils en ligne ou sur déjà présent sur ton ordinateur, certains étant plus simples pour la réalisation.
- En ligne le choix est très vaste:
- https://www.mocodo.net/ peut être difficile à appréhender au début du fait de la syntaxe imposée, mais une fois maitrisé, il permet de réaliser très facilement et rapidement ton MCD.
- https://app.diagrams.net/ est un logiciel permettant la création de diagramme en ligne. Sa prise en main est rapide ressemblant à du Paint/Powerpoint de par son utilisation.
- https://gitmind.com/ assez similaire au précédent.
