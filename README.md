##

# Message client

Cette application react.js a pour objectif d'afficher une liste de messages venant d'une API REST et de proposer en formulaire pour la création d'un message.

Ce projet a été généré à l'aide de **create-react-app**, lien vers la documentation :
https://github.com/facebook/create-react-app/blob/master/README.md

Pour utiliser ce projet clonez-le et installez ensuite les dépendances en utilisant la commande :

```
yarn install
```

Une fois les dépendances installées, démarrez le serveur de développement en utilisant la commande :

```
yarn start
```
Vous pouvez également utiliser les commandes :

```
npm install
```
et

```
npm start
```
---

## Structure des dossiers

```
├───public
└───src
    ├───actions
    ├───api
    ├───components
    │   ├───messages
    │   └───svg
    ├───reducers
    └───style

```

- Le dossier **public** contient les fichiers statiques
- Le dossier **src** contient les fichiers sources de l'application
  - Le dossier **actions** contient les _actions creator_ utilisé avec redux ainsi que les types d'actions
  - Le dossier **api** contient la configuration de l'API (base url)
  - Le dossier **components** contient les composants de l'application
    - Le dossier **messages** tous les composants liés à l'affichage des messages
    - Le dossier **svg** contient les components retournant des icônes au format svg
  - Le dossier **reducers** contient les reducers qui retourne de nouveaux _state_ pour gérer l'état de l'application à chaque fois que des _actions creator_ sont appelés
  - Le dossier **style** contient les fichiers .scss pour le style de l'application
---
## API utilisée
https://jsonplaceholder.typicode.com/
---
## Liste des composants :

* 1.App.js
* 2.Menu.js
* 3.MessageList.js
* 4.MessageListElement.js
* 5.MessagePagination.js
* 6.MessageShow.js
* 7.MessageCreate.js
* 8.IconInbox
* 9.IconSend
---
## Vue d'ensemble de l'application

3 vues :
* Vue principale
* Vue "show"
* Vue "create"

### vue principale

![message-client_files_structure-vue-principale](https://user-images.githubusercontent.com/5464386/57422227-86041080-720f-11e9-8297-9873b37b65a7.jpg)

![message-client_files_structure-vue-principale-composants](https://user-images.githubusercontent.com/5464386/57422321-e5622080-720f-11e9-945c-862569e96679.jpg)

### vue show

![message-client_files_structure-vue-show](https://user-images.githubusercontent.com/5464386/57422362-0c205700-7210-11e9-9940-4ed6b44522c7.jpg)

![message-client_files_structure-vue-show-composants](https://user-images.githubusercontent.com/5464386/57422385-2823f880-7210-11e9-9f3f-affcad8482c7.jpg)

### vue create

![message-client_files_structure-vue create](https://user-images.githubusercontent.com/5464386/57422425-4ab61180-7210-11e9-9f47-1740adaaf48f.jpg)

![message-client_files_structure-vue-create-composant](https://user-images.githubusercontent.com/5464386/57422452-69b4a380-7210-11e9-9fcf-40c15bb0a37e.jpg)

---

## Composants

**src\components\App.js**

### 1. App

Ce composant est la base de l'application, où le _router_ est déclaré et les _routes_ associés a des composants

- Le _path_ "/" rend le composant **MessageList** qui liste les messages
- Le _path_ "/show/:id" rend le composant **MessageShow**, qui affiche un message unique (dépendant de l'id passé en paramètre)
- Le _path_ "/create" rend le composant **MessageCreate** qui affiche le formulaire de création de message

Le routeur prend en paramètre l'objet **history** car celui-ci a été extrait pour permettre de l'utiliser en dehors du contexte react (exemple : redirection dans les actions creator).

---

**src\components\Menu.js**

### 2. Menu

Menu

Ce composant est responsable de la navigation entre les 3 vues de l'application.

- La vue principale "/" Affiche les messages sous forme de liste
- La vue "show" "/show/:id" Affiche un message en particulier
- La vue de création de message "/create"

Ce composant utilise _NavLink_ un composant de _react-router-dom_ pour modifier la classe du menu actif

---

**src\components\messages\MessageList.js**

### 3. MessageList

Ce composant retourne une liste de tous les messages, ce composant est connecté au _redux store_ et les messages sont récupérés grâce a l'action creator _fetchMessages()_.
Ce composant retourne le composant _MessagePagination_ qui présente les messages sous forme de liste.

---

**src\components\messages\MessageListElement.js**

### 4. MessageListElement

Ce composant rend un élément de liste représentant un message

Il prend un objet _message_ comme **props** et rend un aperçu de celui-ci.
Le contenu est tronqué (géré en css) si il ne rentre pas dans le composant (il s'agit d'un aperçu).

| Property | Type   | Required | Default value | Description |
| :------- | :----- | :------- | :------------ | :---------- |
| message  | object | yes      |               |

---

**src\components\messages\MessagePagination.js**

### 5. MessagePagination

Ce composant mets en forme les messages sous forme de liste et divise ceux-ci en page pour améliorer la lisibilité

Le composant prends 2 props en paramètres, _messages_ et _divider_.

_messages_ est un _array_ d'_object_ un tableau contenant les messages où chacun est représenté sous forme d'objet.

_divider_ specifie le nombre de messages montrés par page.

Le composant a 2 propriétés :

- _chunkedData_ : résultat du découpage du contenu reçu en props (un _array_ contenant un _array_ par pages)
- _currentIndex_ : représente la page active a afficher

Pour présenter les données sous forme de pages, plusieurs _helper functions_ sont utilisées :

_chunkData()_ retourne les données divisés en plusieurs _array_

_nextPage()_ et _prevPage()_ sont utilisés pour naviguer entre les pages

_renderChunkedData()_ retourne la liste des messages de la page active, et retourne un composant pour chacun d'entre eux

_getPosition()_ retourne la pagination

Le composant fait scroller la liste représentant la page en cours quand le composant est _updaté_ (lors d'un changement de page par exemple)

| Property    | Type    | Required | Default value | Description |
| :---------- | :------ | :------- | :------------ | :---------- |
| divider     | number  | yes      | 25            |
| dataToChunk | arrayOf | yes      |               |

---

**src\components\messages\MessageShow.js**

### 6. MessageShow

Ce composant est connecté au _redux store_ et affiche un seul message extrait de celui-ci.

Le message est un objet obtenu depuis le _redux store_ en utilisant l'action creator _fetchMessage_

---

**src\components\svg\IconInbox.js**

### 7. messageCreate

Ce composant rend un formulaire de création de message.
Il utilise _redux-form_ pour se _connecter_ au _redux store_.

Il y a 3 champs :
 * *Title*, le titre du message
 * *Body*, le contenu du message
 * *Confidential*, un Booléen qui indique si le message est privé.

Pour chaque type champ il y a une métohde de rendu :
* renderInput 
* renderTextArea 
* renderCheckbox 

Les méthodes *renderError()* et *validate()* aide a connaître la validité du formulaire et a informer l'utilisateur si celui-ci est incomplet

### 8. IconInbox

Retourne une icône au format svg (Inbox) prend en props :

- width
- height
- fill
- color

| Property | Type   | Required | Default value               | Description |
| :------- | :----- | :------- | :-------------------------- | :---------- |
| width    | string | no       | &lt;See the source code&gt; |
| height   | string | no       | &lt;See the source code&gt; |
| fill     | string | no       | &lt;See the source code&gt; |

---

**src\components\svg\IconSend.js**

### 9. IconSend

Retourne une icône au format svg (Paper plane) prend en props :

- width
- height
- fill
- color

| Property | Type   | Required | Default value               | Description |
| :------- | :----- | :------- | :-------------------------- | :---------- |
| width    | string | no       | &lt;See the source code&gt; |
| height   | string | no       | &lt;See the source code&gt; |
| fill     | string | no       | &lt;See the source code&gt; |

---

## Flux de données

Le projet utilise Redux et Redux Form

Le Store redux possède 2 reducers :

| Redux Store | Reducers       |
| :---------- | :------------- |
| messages    | messageReducer |
| form        | formReducer    |

3 actions creators sont utilisés

| Actions creators | Actions                                                             |
| :--------------- | :------------------------------------------------------------------ |
| fetchMessages()  | fetch les messages depuis l'API                                     |
| fetchMessage(id) | fetch un message (id)                                               |
| createMessage({})| ajoute un message (seuelement en local, l'API ne permet pas le POST |

![message-client_files_structure-data-flow (1)](https://user-images.githubusercontent.com/5464386/57424002-69b7a200-7216-11e9-953f-22e91ad9cb69.jpg)

### Styles

Les styles sont tous importés dans le fichier **style.scss**
Les styles sont divisés en 7 parties

00. BASE, import de normalize.css + règles de base
01. VARIABLES, variables pour :
* valeurs concernant les breakpoints
* thème de couleurs
* valeurs concernant les ombres
* valeur d'espacement

02. MIXINS helpers pour :
* breakpoints (les media-queries)
* fontface (imports de police)

03. TYPOGRAPHY, import de police et thème typographique
* échelle de texte
* police utilisé

04. ATOM, composants unique :
* buttons (primary,secondary,light) dans différentes tailles

05. MOLECULE, composants de taille moyenne composé de plusieurs éléments
* message-controls (navigation entre les pages de liste)
* message-list (conteneur pour le liste de messages)
* message-show (message unique)
* message (élément de la liste de messages)

06. LAYOUT, éléments structurant (conteneurs)
* container ui wrapper

07. ORGANISM, partie générales
* form, règles de styles concernant le formulaire
* main, partie réservé au contenu
* menu, navigation

---
<sub>This document was partially generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
