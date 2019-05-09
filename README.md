##

# Message client

Cette application react.js a pour objectif d'afficher une liste de messages venant d'une API REST et de proposer en formulaire pour la création d'un message.

Ce projet a été généré à l'aide de **create-react-app**, lien vers la documentation :
https://github.com/facebook/create-react-app/blob/master/README.md

Pour utiliser ce projet clonez le et ensuite, installez les dépendances en utilisant la commande :

```
yarn install
```

Une fois les dépendances installées, démarrez le serveur de développement en utilisant la commande :

```
yarn start
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
* 7.IconInbox
* 8.IconSend
---
## Vue d'ensemble de l'application

3 vues :
* Vue principale
* Vue "show"
* Vue "create"

### vue create

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

Ce composant est la base de l'application, où le _router_ est déclaré et les routes associés a des composants

- Le path "/" rend le composant **MessageList** qui liste les messages
- Le path "/show/:id" rend le composant **MessageShow**, qui affiche un message unique (dépendant de l'id passé en paramètre)
- Le path "/create" rend le composant **MessageCreate** qui affiche le formulaire de création de message

Le retour prend en paramètre l'onjet **history** car celui-ci a été extrait pour permettre de l'utiliser en dehors du contexte react (exemple : redirection dans les actions creator).

---

**src\components\Menu.js**

### 2. Menu

Menu

Ce composant est responsable de la navigation entre les vues en fonction des actions de l'utilisateur

Dans cette application il y a 3 vues :

- La vue principale "/" Affiche les messages sous forme de liste
- La vue "show" "/show/:id" Affiche un message en particulier
- La vue de création de message "/create"

Ce composant utilise _NavLink_ un composant de _react-router-dom_ pour modifier la classe du menu actif

---

**src\components\messages\MessageList.js**

### 3. MessageList

This component return the list of all the messages
The messages are objects in an array fetched from redux the redux store using _fetchMessages_ action

This component return the _MessagePagination_ component passing all the messages as a props to build a list of messages.

---

**src\components\messages\MessageListElement.js**

### 4. MessageListElement

Ce composant rend un élément de liste représentant un message

Il prend un objet _message_ comme **props** et rend un appercu de celui-ci.
Le contenu est tronqué (géré en css) si il ne rentre pas dans le composant (il s'agit d'un appercu).

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

- _chunkedData_ : résultat du découpage du contenu recu en props (un _array_ contenant un _array_ par page)
- _currentIndex_ représente la page active a afficher

Pour présenter les données sous forme de pages plusieurs _helper functions_ sont utilisées :

_chunkData()_ retourne les données divisés en plusieurs _array_

_nextPage()_ et _prevPage()_ sont utilisés pour naviguer entre les pages

_renderChunkedData()_ retourne la liste des messages de la page active, et retourne un composant pour chacun d'entre eux

_getPosition()_ retourne la pagination

Le composant fait scroller la liste représentant la page en cours quand le composant est _updaté_ (changement de page par exemple)

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

### 7. IconInbox

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

### 8. IconSend

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

<sub>This document was partially generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
