//**********************Quiz description******************************/



let currentItem = 0; // a value that will modify the item shown by it's value
let answerButtons = document.querySelectorAll('.answerButton')
let isStarted = false; //check if the game is started or not to modify some function
const nextButton = document.getElementById('next-btn');
const quiz = document.querySelector(".quiz");



//Fonctionnement du quizz : les éléments du quizz sont rangé dans des tableaux qui sont indexé dans le même ordre que les liens regroupé dans l'array links,
//ce qui permet de les liés grace à l'index de links.

//**********************Tableau Images******************************
// Toutes les images sont indexées dans ce tableau

const images = [["assets/Images/Carousel/Lyon.jpg", "assets/Images/Carousel/Lyon2.jpg", "assets/Images/Carousel/Lyon3.jpg"],
["assets/Images/Carousel/bourgogne1.jpg", "assets/Images/Carousel/bourgogne2.jpg", "assets/Images/Carousel/bourgogne3.jpg"],
["assets/Images/Carousel/bretagne1.jpg", "assets/Images/Carousel/bretagne2.jpg", "assets/Images/Carousel/bretagne3.png"],
["assets/Images/Carousel/centre-val-de-loire1.jpeg", "assets/Images/Carousel/centre-val-de-loire2.jpeg", "assets/Images/Carousel/centre-val-de-loire3.jpeg"],
["assets/Images/Carousel/corse1.jpg", "assets/Images/Carousel/corse2.jpg", "assets/Images/Carousel/corse3.jpg"],
["assets/Images/Carousel/grandEst1.jpg", "assets/Images/Carousel/grandEst2.jpg", "assets/Images/Carousel/grandEst3.jpg"],
["assets/Images/Carousel/hdf1.jpg", "assets/Images/Carousel/hdf2.jpg", "assets/Images/Carousel/hdf3.jpg"],
["assets/Images/Carousel/idf1.jpg", "assets/Images/Carousel/idf2.jpg", "assets/Images/Carousel/idf3.jpg"],
["assets/Images/Carousel/normandie1.jpg", "assets/Images/Carousel/normandie2.jpg", "assets/Images/Carousel/normandie3.jpg"],
["assets/Images/Carousel/nouvelleAquitaine1.jpg", "assets/Images/Carousel/nouvelleAquitaine2.jpg", "assets/Images/Carousel/nouvelleAquitaine3.jpg"],
["assets/Images/Carousel/occitanie1.jpg", "assets/Images/Carousel/occitanie2.jpg", "assets/Images/Carousel/occitanie3.jpg"],
["assets/Images/Carousel/pdl1.jpg", "assets/Images/Carousel/pdl2.jpg", "assets/Images/Carousel/pdl3.jpg"],
["assets/Images/Carousel/paca1.jpg", "assets/Images/Carousel/paca2.jpg", "assets/Images/Carousel/paca3.jpg"],]

//**********************Talbeau questions******************************
// Toutes les questions sont indexées dans ce tableau
const questions = [[{
    question: "Quelle est cette ville ?",
    answers: [
        { text: 'Lyon', correct: true },
        { text: 'Marseille', correct: false },
        { text: 'Paris', correct: false },
        { text: 'Bordeaux', correct: false }]
},
{
    question: "Laquelle de ces spécialités culinaires est originaire de cette région?",
    answers: [
        { text: 'Les galettes de froment', correct: false },
        { text: 'La bouillabaisse', correct: false },
        { text: 'Les quenelles', correct: true },
        { text: 'Les trippes', correct: false }],
},
{
    question: "Dans quelle ville d'Auvergne-Rhone-Alpes peut on célebrer la fête du roi de l'Oiseau?",
    answers: [
        { text: 'Lyon', correct: false },
        { text: 'Clermont Ferrand', correct: false },
        { text: 'Oyonnax', correct: false },
        { text: 'Le Puy en Velay', correct: true }]
}], [{
    question: "Quelle est la ville principale de la Bourgogne-Franche Comté ?",
    answers: [
        { text: 'Troyes', correct: false },
        { text: 'Macon', correct: false },
        { text: 'Dijon', correct: true },
        { text: 'Besançon', correct: false }]
}, {
    question: "Quel ingrédient est indispensable pour réaliser la recette des escargots de Bourgogne ?",
    answers: [
        { text: 'Du romarin', correct: false },
        { text: 'Du persil', correct: true },
        { text: 'Du basilic', correct: false },
        { text: 'Du citron', correct: false }]
}, {
    question: "Quel club de foot est une des fiertés de la Bourgogne ?",
    answers: [
        { text: 'Villefranche-Beaujolais', correct: false },
        { text: 'La Berrichonne de Chateauroux', correct: false },
        { text: 'AJ Auxerre  ', correct: true },
        { text: 'SC Sedan', correct: false }]
}], [{
    question: "Quelle est le chef-lieu de la Bretagne ?",
    answers: [
        { text: 'Rennes', correct: true },
        { text: 'Saint-Malo', correct: false },
        { text: 'Brest', correct: false },
        { text: 'Lorient', correct: false }]
}, {
    question: "Comment s'appelle la boisson traditionnelle bretonne à base de miel fermenté ?",
    answers: [
        { text: 'L’hydromiel', correct: false },
        { text: 'Le chouchen', correct: true },
        { text: 'La cervoise', correct: false },
        { text: 'La propolis', correct: false }]
}, {
    question: "Quelle est la devise de la Bretagne ?",
    answers: [
        { text: 'Sans peur et sans reproche', correct: false },
        { text: 'Toujours vaincra, jamais ne cèdera', correct: false },
        { text: 'Plutot la mort que la souillure', correct: true },
        { text: 'Une bonne sieste et au lit', correct: false }]
}], [{
    question: "Quelle est le chef-lieu du Centre Val de Loire ?",
    answers: [
        { text: 'Tours', correct: false },
        { text: 'Orléans', correct: true },
        { text: 'Bourges', correct: false },
        { text: 'Chateauroux', correct: false }]
}, {
    question: "Quelle est la spécialité du Limousin ?",
    answers: [
        { text: 'La buche', correct: false },
        { text: 'La charlotte', correct: false },
        { text: 'Leclafoutis', correct: true },
        { text: 'La tarte', correct: false }]
}, {
    question: "Quelle célèbre femme ayant marqué l'histoire francaise est née dans cette région?",
    answers: [
        { text: 'Catherine de Medicis', correct: false },
        { text: 'Marie Curie', correct: false },
        { text: 'Marie-Antoinette', correct: false },
        { text: "Jeanne d'Arc", correct: true }]
}], [{
    question: "Quelle ville est la préfecture de la Région Corse ?",
    answers: [
        { text: 'Bonifacio', correct: false },
        { text: 'Calvi', correct: false },
        { text: 'Bastia', correct: false },
        { text: 'Ajaccio', correct: true }]
}, {
    question: "Quel est le surnom donné à La Corse ?",
    answers: [
        { text: 'L’ile Papillon', correct: false },
        { text: 'L’ile du Levant', correct: false },
        { text: 'L’ile aux mimosas', correct: false },
        { text: 'L’ile de Beauté', correct: true }]
}, {
    question: "Quelle est la population de la Corse ?",
    answers: [
        { text: '180 000', correct: false },
        { text: '260 000', correct: false },
        { text: '340 000', correct: true },
        { text: '490 000', correct: false }]
}], [{
    question: "Quelle est la capitale de la région Grand Est ?",
    answers: [
        { text: 'Metz', correct: false },
        { text: 'Strasbourg', correct: true },
        { text: 'Nancy', correct: false },
        { text: 'Mulhouse', correct: false }]
}, {
    question: "Parmi ces fromages, lequel est alsacien ?",
    answers: [
        { text: 'Le Babybel', correct: false },
        { text: 'Le Cabécou', correct: false },
        { text: "L’Ortolan", correct: false },
        { text: 'Le Munster', correct: true }]
}, {
    question: "Quel célèbre poête français est né à Metz ",
    answers: [
        { text: 'Charles Baudelaire', correct: false },
        { text: 'Arthur Rimbaud', correct: false },
        { text: 'Paul Verlaine', correct: true },
        { text: 'Joachim Du Bellay', correct: false }]
}], [{
    question: "Quelle est la capitale de la région Hauts-de-France ?",
    answers: [
        { text: 'Dunkerque', correct: false },
        { text: 'Lille', correct: true },
        { text: 'Calais', correct: false },
        { text: 'Amiens', correct: false }]
}, {
    question: "Quel est le légume emblématique de la région Nord Pas de Calais ?",
    answers: [
        { text: 'Le chicon', correct: true },
        { text: 'le fenouil', correct: false },
        { text: "L'aubergine", correct: false },
        { text: 'la mojette', correct: false }]
}, {
    question: "Ou se termine la fameuse course cycliste qui commence a Paris?",
    answers: [
        { text: 'Roubaix', correct: true },
        { text: 'Douai', correct: false },
        { text: 'Lille', correct: true },
        { text: 'Tourcoing', correct: false }]
}], [{
    question: "Quelle est la capitale de la région Ile de France ?",
    answers: [
        { text: 'Montreuil', correct: false },
        { text: 'Créteil', correct: false },
        { text: 'Versailles', correct: false },
        { text: 'Paris', correct: true }]
}, {
    question: "Parmi ces rivières d'Ile-de-France, laquelle est la plus longue?",
    answers: [
        { text: 'L’Oise', correct: false },
        { text: 'L’Yonne', correct: false },
        { text: 'La Marne', correct: true },
        { text: 'Le grand Morin', correct: false }]
}, {
    question: "Combien y-a-t-il d'habitants en Île-de-France ?",
    answers: [
        { text: '5 Millions', correct: false },
        { text: '8 Millions', correct: false },
        { text: '12 Millions', correct: true },
        { text: '15 Millions', correct: false }]
}], [{
    question: "Quelle est la ville principale de la région Normandie ?",
    answers: [
        { text: 'Rouen', correct: true },
        { text: 'Caen', correct: false },
        { text: 'Le Havre', correct: false },
        { text: 'Deauville', correct: false }]
}, {
    question: "Que cuisine-t-on à la mode de Caen ?",
    answers: [
        { text: 'Le fromage de tête', correct: false },
        { text: 'Les pieds de porc', correct: false },
        { text: 'Les rognons', correct: false },
        { text: 'Les tripes', correct: true }]
}, {
    question: "Laquelle de ces plages se trouve en Normandie?",
    answers: [
        { text: 'La plage de la Pointe de Saint-Hernot', correct: false },
        { text: 'Omaha Beach', correct: true },
        { text: 'La plage de Keremma', correct: false },
        { text: 'Venice Beach', correct: false }]
}], [{
    question: "Quelle est la ville principale de la région Nouvelle-Aquitaine ?",
    answers: [
        { text: 'La rochelle', correct: false },
        { text: 'Poitiers', correct: false },
        { text: 'Bordeaux', correct: true },
        { text: 'Limoges', correct: false }]
}, {
    question: "Que retrouve-t-on dans la recette des célèbres canelés? ",
    answers: [
        { text: 'Du cognac et de la pate d’amande', correct: false },
        { text: 'Du rhum et de la vanille', correct: true },
        { text: 'De la bière et de la vanille', correct: false },
        { text: 'Du Cidre et du Miel', correct: false }]
}, {
    question: "Dans quelle ville d'Aquitaine sont fabriquées les pièces de notre monnaie?",
    answers: [
        { text: 'Arcachon', correct: false },
        { text: 'Cadillac', correct: false },
        { text: 'Pessac', correct: true },
        { text: 'Bayonne', correct: false }]
}], [{
    question: "Quelle est la ville principale de la région Occitanie ?",
    answers: [
        { text: 'Nimes', correct: false },
        { text: 'Montpellier', correct: false },
        { text: 'Toulouse', correct: true },
        { text: 'Perpignan', correct: false }]
}, {
    question: "Lequel de ces villages d’Occitanie n’a pas donné son nom à un fromage ?",
    answers: [
        { text: 'Rocamadour', correct: false },
        { text: 'Pélardon', correct: false },
        { text: 'Laguiole', correct: false },
        { text: 'Colioure', correct: true }]
}, {
    question: 'Comment dit-on "Bonjour, comment vas-tu? en langue occitane ?',
    answers: [
        { text: 'Adissiatz, va plan?', correct: false },
        { text: 'Adiu, ont vas? ', correct: false },
        { text: '"Adiu, va plan?"', correct: true },
        { text: 'Adissiatz, ont vas?', correct: false }]
}], [{
    question: "Quelle est le chef-lieu de la région Pays de la Loire ?",
    answers: [
        { text: 'Nantes', correct: true },
        { text: 'Angers', correct: false },
        { text: 'Saint-Nazaire', correct: false },
        { text: 'Guérande', correct: false }]
}, {
    question: "Quelle marque célèbre est née à Nantes ?",
    answers: [
        { text: 'La Vache qui Rit', correct: false },
        { text: 'Les cachous Lajaunie', correct: false },
        { text: 'La biscuiterie LU', correct: true },
        { text: 'Les pates Lustucru', correct: false }]
}, {
    question: "Comment s'appelle l'espace d'exposition habritant d'impressionantes machines?",
    answers: [
        { text: 'Les Machines de Nantes', correct: false },
        { text: "Les Machines de l'Île", correct: true },
        { text: 'Les Animaux Imaginaires', correct: false },
        { text: 'Les Animaux de Nantes', correct: false }]
}], [{
    question: "Quelle est le chef-lieu de la région Provence-Alpes-Côte d’Azur ?",
    answers: [
        { text: 'Nice', correct: false },
        { text: 'Marseille', correct: true },
        { text: 'Toulon', correct: false },
        { text: 'Avignon', correct: false }]
}, {
    question: "Quelle est la spécialité culinaire la plus connue de Marseille ?",
    answers: [
        { text: 'les huitres', correct: false },
        { text: 'L’aligot', correct: false },
        { text: 'Le pot au feu', correct: false },
        { text: 'La bouillabaisse', correct: true }]
}, {
    question: "Dans quelle ville voit on défiler des chars couverts de citron une fois par an ?",
    answers: [
        { text: 'Ayguiers', correct: false },
        { text: 'Aix-En-Provence', correct: false },
        { text: 'Avignon', correct: false },
        { text: 'Menton', correct: true }]
}]]
let question = questions[0];


//**********************Talbeau explications******************************
// Toutes les explications sont indexées dans ce tableau


const explanations = [["Se trouvant à la jonction entre la Saone et le Rhone, Lyon, ancienne capitale des gaules, est le chef lieu de la région Rhônes-Alpes.", "La quenelle est un plat typique de Lyon, traditionellement au brochet, elle est servie avec une sauce Nantua (une autre ville de la région).", "La fête du Roi de l'Oiseau est un festival de la renaissance qui se déroule la troisième semaine du mois de septembre au Puy-en-Velay."],
["Dijon, aussi appellé la cité des Ducs, est la capitale de la Bourgogne, l'un des principaux territoires viticoles du pays.", "L'escargot de Bourgogne est traditionnellement consommé préparé en coquille avec un beurre persillé.", "Club emblématique de la région, l'AJ Auxerre a connu ses grandes heures entre 1995 et 2005 sous la direction de Guy Roux."],
["Rennes, chef lieu de la région Bretagne, est connue pour ses nombreux espaces verts et sa qualité de vie.", `Le chouchen (en breton : chouchenn ou mez), est un breuvage liquoreux issu de la fermentation d'un mélange d'eau et de miel. <br/>"Y a du chouchen à volonté, viens donc faire un tour à Lambé" `, ` En breton "kentoc'h mervel eget em zaotra", la devise aurait été prononcée par Alain Barbe Torte après qu'il ait vu une hermine blanche préférer mourrir sous les coups des chasseurs que tomber dans la boue.`],
["Ancienne capitale du Royaume de France au 5em siècle, elle est située au cœur du Val de Loire et aux portes des régions naturelles de la forêt d'Orléans", "Originaire du Limousin le clafouti, traditionnellement aux cerises, est un gateau aux fruits que l'ont recouvre d'un appareil à flan. ", "Au début du xve siècle, cette jeune fille d'origine paysanne affirme qu'elle a reçu de la part des saints Michel, Marguerite d'Antioche et Catherine d'Alexandrie la mission de délivrer la France de l'occupation anglaise."],
["« Cité impériale » et autrefois « cité du corail », la capitale corse est connue pour être la ville de naissance de Napoléon Bonaparte", " Cette expression apparaît au XIXème siècle dans une formule publicitaire inventée par les corses eux-mêmes pour attirer les touristes.", "La Corse est aussi la 4e île française la plus peuplée après la Réunion, la Guadeloupe et la Martinique"],
["Strasbourg est une des trois « capitales européennes » aux côtés de Bruxelles et Luxembourg, elle est parfois qualifiée de capitale parlementaire de l'Union européenne.", "La recette de ce fromage aurait été laissée aux Vosgiens (habitants du massif vosgien) au IXe siècle par un moine irlandais lors de son passage.", "La Maison natale de Paul Verlaine, située en face du Palais de justice, transformée en musée en 2011 par l'association Les amis de Verlaine."],
["Centre culturel important au croisement des aires picarde et flamande, son nom en ancien français est L'Isle et se réfèrerait à sa localisation primitive supposée près d'une île des marécages de la vallée de la Deûle.", "Les feuilles vertes de chicorée sauvage ont été récoltées et consommées depuis très longtemps. Vers 1610-1615, les feuilles étiolées sont signalées comme excellentes en salades.", "Paris-Lille est une ancienne course cycliste française, organisée de 1908 à 1937."],
["À l'époque gallo-romaine, Lutèce n'est qu'une cité relativement modeste du monde romain avec une population de l'ordre de dix mille habitants à son apogée.", " Elle représente à ce titre la plus grande rivière de France. C'est aussi le principal affluent de la Seine.", "Il s'agit d'une région très fortement peuplée, qui représente à elle seule 18,8 % de la population de la France métropolitaine sur seulement 2,2 % de sa superficie, ce qui en fait la région la plus peuplée et la plus densément peuplée de France."],
["Rouen vient du toponyme gaulois qui s'appelait Ratumacos et qui signifierait 'lieu d'échange'", "On attribue la paternité de ce plat au moine Sidoine Benoît. Las de perdre la cinquième partie du bœuf, il se mit à cuisiner les estomacs du bœuf auxquels il ajouta les pieds du bœuf et des condiments aromatiques.", "Alliés, Allemands et civils : au total, près de 140 000 morts. Le bilan humain du débarquement puis de la bataille de Normandie apparaît aujourd'hui encore comme exorbitant."],
["Avec 1 250 mètres réservés aux piétons, la rue Sainte Catherine est la plus longue rue piétonne de toute la France et même d’Europe.", "La version la plus répandue, raconte que la naissance du cannelé serait liée au petit gâteau que préparaient les religieuses au 16ème siècle dans le couvent bordelais des Annonciades.", "L'usine frappe environ 1 milliard de pièces de monnaies par an, dont la moitié pour les pièces d’euros et la moitié pour les monnaies courantes étrangères"],
["Toulouse a été édifiée en utilisant principalement la brique romaine et la tuile. Et c’est dans cette ville que la brique romaine a été inventée!", "Le site de Collioure était déjà occupé par les hommes préhistoriques, si l’on en croit les divers dolmens recensés", "L'occitan ou langue d'oc est une langue romane parlée dans le tiers sud de la France, les Vallées occitanes et Guardia Piemontese en Italie, le Val d'Aran en Espagne et à Monaco."],
["Jules Verne est né à Nantes le 8 février 1828, le musée qui porte le nom du célèbre auteur se trouve butte Sainte Anne à Nantes.", "Depuis 2012, à la suite d'une scission du groupe Kraft Foods, la marque LU est la propriété de la multinationale américaine Mondelez International.", "Il s'agit de l'une des attractions touristiques d'Europe à avoir été distingué par un Thea Award"],
["La légende de Gyptis et Protis est le mythe fondateur qui raconte la fondation légendaire de Marseille (Massalia) par des colons grecs venus de la cité de Phocée en Ionie.", "La bouillabaisse est originaire de la Grèce antique : elle aurait des vertus magiques. Appelée Kakavia à l’origine, elle devient bouillabaisse au XII° siècle avant JC.", "Le citron de Menton est un produit rare, moins commun que sont les citrons venus d’ailleurs d’autant plus qu’il dispose d’une indication géographique protégée (IGP)."]]
let explanation = explanations[0]; // la valeur qui va determiner quelle explication est a l'écran


const textReponse = function () {
    const explication = document.createElement('div')
    explication.classList.add('explication')
    explication.classList.add('container')
    explication.innerHTML = explanation[currentItem];
    quiz.appendChild(explication);
} // la fonction qui crée le conteneur du texte d'explication et qui le rempli avec le bon texte
const textDelete = function () {
    if (document.querySelector(".explication") != null) {
        quiz.removeChild(document.querySelector(".explication"));
    }
} // la fonction qui supprime le texte d'explication quand on change de question

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function () {
        textDelete();
        textReponse();
    });
} // ajoute un event sur les boutons qui fait apparaitre le text quand on clique

const links = document.querySelectorAll(".link"); // crée le tableau des élément de la classe "link"
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const carousel = document.querySelector(".carousel")

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        image1.src = images[i][0];
        image2.src = images[i][1];
        image3.src = images[i][2];
        question = questions[i];
        explanation = explanations[i];
        currentItem = 0;
        nextButton.classList.add('hide');
        resetStartButton();
        removeAnswer();
        textDelete();
        resetAnswerButtons();
        slideItem();
        dotSwitch();
        quiz.classList.remove("hide");
        carousel.style.marginBottom = "0px"
    }
    )
} // créer le liens entre le clique sur un lien et le contenu qui correspond dans les tableaux images/question/explication et reset le jeu

const listRegion = document.querySelectorAll(".linkQuestion")

for (let i = 0; i < listRegion.length; i++) {
    listRegion[i].addEventListener('click', function () {
        image1.src = images[i][0];
        image2.src = images[i][1];
        image3.src = images[i][2];
        question = questions[i];
        explanation = explanations[i];
        currentItem = 0;
        nextButton.classList.add('hide');
        resetStartButton();
        removeAnswer();
        textDelete();
        resetAnswerButtons();
        slideItem();
        dotSwitch();
        quiz.classList.remove("hide");
        carousel.style.marginBottom = "0px"

    }
    )
}

//**********************Carousel******************************

const carouselItem = document.querySelectorAll(".carouselItem"); // selecting all items in the carousel into an array

carouselItem.forEach((item, indx) => {
    item.style.transform = `translateX(${indx * 100}%)`;
}); // donne a chaque élément du tableau une valeur X sur l'axe X
const nextItem = document.querySelector(".buttonNext");

let maxItem = carouselItem.length - 1 // fixe l'item maximum a la taille du carousel

const dotSwitch = function () {
    if (currentItem === 0) {
        dotUn.style.backgroundColor = "white";
        dotDeux.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotTrois.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
    }
    else if (currentItem === 1) {
        dotUn.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotDeux.style.backgroundColor = "white";
        dotTrois.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
    }
    else if (currentItem === 2) {
        dotUn.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotDeux.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotTrois.style.backgroundColor = "white";
    }
    textDelete();
} // a function that checks what the current item is shown and lighten the right navigation dot

const slideItem = function () {
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    })
}; // a function that move the item shown by the value of currentItem


nextItem.addEventListener("click", function () {
    if (currentItem === maxItem) {
        currentItem = 0
    } //if the item is the last, goes back to the first
    else {
        currentItem++;
    };
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons();
    textDelete();
    nextButton.classList.add('hide')
    if (isStarted === true) {
        startAnswer(currentItem)
    };

}); // checks if the currentItem isn't the last and then shitf it it by one to the left. Also reset the game, and if the game is already started show the right question

const prevItem = document.querySelector(".buttonPrev");

prevItem.addEventListener("click", function () {
    if (currentItem === 0) {
        currentItem = maxItem;
    } //if the item is the first, goes to the last
    else {
        currentItem--;
    }
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    textDelete();
    nextButton.classList.add('hide')
    if (isStarted === true) {
        startAnswer(currentItem)
    };


});// checks if the currentItem isn't the first and then shitf it it by one to the right
const dotUn = document.getElementById("dot1")

dotUn.addEventListener("click", function () {
    currentItem = 0;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    nextButton.classList.add('hide')
    textDelete();
    if (isStarted === true) {
        startAnswer(currentItem)
    };


});//when clicking on a dot put the item shown to the right index

const dotDeux = document.getElementById("dot2")

dotDeux.addEventListener("click", function () {
    currentItem = 1;
    slideItem()
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    nextButton.classList.add('hide')
    textDelete();
    if (isStarted === true) {
        startAnswer(currentItem)
    };


});//when clicking on a dot put the item shown to the right index

const dotTrois = document.getElementById("dot3")

dotTrois.addEventListener("click", function () {
    currentItem = 2;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    nextButton.classList.add('hide')
    textDelete();
    if (isStarted === true) {
        startAnswer(currentItem)
    };


}); //when clicking on a dot put the item shown to the right index
dotSwitch(); //initialize the dots


// **************************Quiz****************************




const startButton = document.getElementById('start-btn');
const button = document.querySelector('.buttons-grid');
const questionElement = document.getElementById('question');

let curentQuestionIndex = 0;

const resetAnswerButtons = function () {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('good-answer');
        answerButtons[i].classList.remove('wrong-answer');

    }
} //remet le css des boutons de base

nextButton.addEventListener('click', function () {
    resetAnswerButtons()
    if (currentItem === maxItem) {
        currentItem = 0
    } //if the item is the last, goes back to the first
    else {
        currentItem++;
    };
    nextButton.classList.add('hide')


    startQuestion(currentItem);
    startAnswer(currentItem);
    slideItem();
    textDelete();
    dotSwitch();

}); //permet au bouton next de passer à l'item suivant

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    startQuestion(currentItem)
    startAnswer(currentItem);
    isStarted = true;

} //démare le jeu, cache le bouton start et faire ressortir les questions
startButton.addEventListener('click', startGame);


function resetStartButton() {
    startButton.classList.remove('hide');
    questionElement.classList.add('hide')
    button.classList.add('hide')
    isStarted = false;
}// reset le jeu et remet le bouton start
function startQuestion(questionIndex) {
    let questionObject = question[questionIndex]; //here question is questions[i], with the index being the index of the region clicked in links
    showQuestion(questionObject);
    removeAnswer()
}//fait apparaitre la bonne question et retire les réponses précedentes
function startAnswer(questionIndex) {
    let questionObject = question[questionIndex]; //here question is questions[i], with the index being the index of the region clicked in links
    showAnswer(questionObject.answers);
    checkAnswer(questionObject.answers);
}//fait apparaitre les bonne réponses

function showQuestion(questionObject) {
    questionElement.innerText = questionObject.question;
}//la fonction qui remplace le texte de la question


function checkAnswer(questionAnswers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function () {
            if (questionAnswers[i].correct === true) {
                nextButton.classList.remove('hide')
                answerButtons[i].classList.add('good-answer')
            }
            else if (questionAnswers[i].correct === false) {
                answerButtons[i].classList.remove('good-answer')
                answerButtons[i].classList.add('wrong-answer')
            }
        });
    }
}//permet de montrer si la réponse est juste (true) ou fausse (false) quand on clique dessus. Active également le bouton next si la bonne réponse est trouvée.

const buttonContainer = document.getElementById("answer-buttons")

function showAnswer(questionAnswers) {
    for (let i = 0; i < 4; i++) {
        const answerButton = document.createElement("button")
        answerButton.classList.add("btn");
        answerButton.classList.add("answerButton");
        answerButton.innerText = questionAnswers[i].text;
        buttonContainer.appendChild(answerButton);
    }
    answerButtons = document.querySelectorAll('.answerButton');
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function () {
            textDelete();
            textReponse();
        });
    }
    return answerButtons;
}// crée 4 nouveau boutons en y insérant le texte adéquat selon la question, retourne un tableau avec les 4 boutons pour être utilisé dans d'autres fonctions

function removeAnswer() {
    const answers = document.querySelectorAll('.answerButton')
    for (let i = 0; i < answers.length; i++) {
        buttonContainer.removeChild(answers[i]);
    }
} // supprime les boutons réponse existants

// **************************Sidebar****************************


const burgermenu = document.querySelector(".burgermenu");
const menuAside = document.querySelector(".left")
const body = document.querySelector("body")
const rightElements = document.querySelector(".right")
const mapRegion = document.querySelectorAll(".mapQuestion")

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        menuAside.style.translate = ("-2000px");
    } else {
        menuAside.style.translate = ("2000px");
    }
    event.preventDefault();
})

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        body.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        body.style.backgroundColor = "#dddddd";
    }
    event.preventDefault();
})

rightElements.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        menuAside.style.translate = ("-2000px");
        body.style.backgroundColor = "#dddddd";
    }
})



const logo = document.querySelector('.logo');

logo.addEventListener('click', function () { location.reload() });
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ************************** Form ****************************

// ******* Username**********

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('username');
    let myRegex = /^[a-zA-Z-\s]+$/;         // \s autorise les espaces, +$ pour répéter plusieurs fois

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorUsername');
        myError.innerHTML = "Le champ username est requis";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorUsername');
        myError.innerHTML = 'Le champ ne doit comporter que des lettres et des tirets uniquement.';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Mail ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('email');
    let myRegex = /^[@]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorMail');
        myError.innerHTML = "Le champ mail n'est pas complété";
        myError.style.color = 'red';
        event.preventDefault();

    }
    else if (myRegex.test(myInput.value) == true) {
        let myError = document.getElementById('errorMail');
        myError.innerText = 'Le mail nest pas au bon format';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Number ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('number');      //Les chaînes de caractères sont définies entre guillemets ('),
    let myRegex = /^[0-9]+$/;                      //les regex ou expressions régulières sont entre des slashs (/)

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorNumber');
        myError.innerHTML = "Le numéro n'est pas complété";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorNumber');
        myError.innerText = 'Le numéro est invalide';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Message ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('message');
    let myRegex = /^[a-zA-Z0-9]+$/;

    if (myInput.value.trim() == "") {           // trim permet d'inclure les espaces également en + du champ vide
        let myError = document.getElementById('errorMessage');
        myError.innerHTML = "Veuillez écrire votre message";
        myError.style.color = 'red';
        event.preventDefault();
    }


});

//**********************Text presentaion ans informations***************/

const infoButton = document.getElementById('information');
const infoText = document.querySelector('.bloctexte');
const presentationText = document.getElementById('presentation');
const description = document.getElementById('description');

infoButton.addEventListener('click', function () {
    description.classList.remove('hide');
    infoText.classList.remove('hide');
})

const contactButton = document.getElementById('contact');
const contactForm = document.getElementById('myForm');
const exitButton = document.querySelector('.exitForm')
const exitDescription = document.querySelector('.exitDescription')


contactButton.addEventListener('click', () => {
    if (getComputedStyle(contactForm).display != "none") {
        contactForm.classList.add('hide');
    } else {
        contactForm.classList.remove('hide');
    }
})

// Autre façon d'écrire l'évent précédent

// contactButton.addEventListener('click', () => {
//     if (getComputedStyle(formulaire).display != "none") {
//         formulaire.style.display = 'none';
//     } else {
//         formulaire.style.display = "block";
//     }
// })

exitButton.addEventListener('click', function () {
    contactForm.classList.add('hide');
})

exitDescription.addEventListener('click', function () {
    description.classList.add('hide');
})



const modal = document.querySelector(".modal");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// const contactButton = document.getElementById('contact');
// const contactForm = document.getElementById('myForm');

// contactButton.addEventListener('click', toggleForm);

// function toggleForm() {
//     contactButton.classList.toggle('active');
//     contactForm.classList.toggle('active');
// }


// const infoBouton = document.getElementById('information');
// const present = document.getElementById('presentation');
// const inform = document.querySelector('.bloctexte');

// infoBouton.addEventListener('click', function () {
//     present.classList.add('hide');
//     inform.classList.remove('hide');
// })

// const contactButton = document.getElementById('contact');
// const formulaire = document.getElementById('myForm');
// const exitButton = document.querySelector('.exitForm')


// contactButton.addEventListener('click', () => {
//     if (getComputedStyle(formulaire).display != "none") {
//         formulaire.classList.add('hide');
//     } else {
//         formulaire.classList.remove('hide');
//     }
// })

// exitButton.addEventListener('click', function () {
//     formulaire.classList.add('hide');
// })


/********************************* Light zone on map from region list in sidebar ***************************************/

/******************** ARA *********************/
const territoireARA = document.getElementById('FRARA');
const lienARA = document.querySelector('.linkQuestion1');

lienARA.addEventListener('mouseover', () => {
    territoireARA.style.fill = '#2F4558';
})
lienARA.addEventListener('mouseout', () => {
    territoireARA.style.fill = '#F6B12D';
})

territoireARA.addEventListener('mouseover', () => {
    territoireARA.style.fill = '#2F4558';
})

territoireARA.addEventListener('mouseout', () => {
    territoireARA.style.fill = '#F6B12D';
})

/******************** BFC *********************/
const territoireBFC = document.getElementById('FRBFC');
const lienBFC = document.querySelector('.linkQuestion2');

lienBFC.addEventListener('mouseover', () => {
    territoireBFC.style.fill = '#2F4558';
})
lienBFC.addEventListener('mouseout', () => {
    territoireBFC.style.fill = '#F6B12D';
})

territoireBFC.addEventListener('mouseover', () => {
    territoireBFC.style.fill = '#2F4558';
})

territoireBFC.addEventListener('mouseout', () => {
    territoireBFC.style.fill = '#F6B12D';
})
/******************** BRE *********************/
const territoireBRE = document.getElementById('FRBRE');
const lienBRE = document.querySelector('.linkQuestion3');

lienBRE.addEventListener('mouseover', () => {
    territoireBRE.style.fill = '#2F4558';
})
lienBRE.addEventListener('mouseout', () => {
    territoireBRE.style.fill = '#F6B12D';
})

territoireBRE.addEventListener('mouseover', () => {
    territoireBRE.style.fill = '#2F4558';
})

territoireBRE.addEventListener('mouseout', () => {
    territoireBRE.style.fill = '#F6B12D';
})
/******************** CVL *********************/
const territoireCVL = document.getElementById('FRCVL');
const lienCVL = document.querySelector('.linkQuestion4');

lienCVL.addEventListener('mouseover', () => {
    territoireCVL.style.fill = '#2F4558';
})
lienCVL.addEventListener('mouseout', () => {
    territoireCVL.style.fill = '#F6B12D';
})

territoireCVL.addEventListener('mouseover', () => {
    territoireCVL.style.fill = '#2F4558';
})

territoireCVL.addEventListener('mouseout', () => {
    territoireCVL.style.fill = '#F6B12D';
})

/******************** GES *********************/
const territoireGES = document.getElementById('FRGES');
const lienGES = document.querySelector('.linkQuestion5');

lienGES.addEventListener('mouseover', () => {
    territoireGES.style.fill = '#2F4558';
})
lienGES.addEventListener('mouseout', () => {
    territoireGES.style.fill = '#F6B12D';
})

territoireGES.addEventListener('mouseover', () => {
    territoireGES.style.fill = '#2F4558';
})

territoireGES.addEventListener('mouseout', () => {
    territoireGES.style.fill = '#F6B12D';
})
/******************** HDF *********************/
const territoireHDF = document.getElementById('FRHDF');
const lienHDF = document.querySelector('.linkQuestion6');

lienHDF.addEventListener('mouseover', () => {
    territoireHDF.style.fill = '#2F4558';
})
lienHDF.addEventListener('mouseout', () => {
    territoireHDF.style.fill = '#F6B12D';
})

territoireHDF.addEventListener('mouseover', () => {
    territoireHDF.style.fill = '#2F4558';
})

territoireHDF.addEventListener('mouseout', () => {
    territoireHDF.style.fill = '#F6B12D';
})
/******************** IDF *********************/
const territoireIDF = document.getElementById('FRIDF');
const lienIDF = document.querySelector('.linkQuestion7');

lienIDF.addEventListener('mouseover', () => {
    territoireIDF.style.fill = '#2F4558';
})
lienIDF.addEventListener('mouseout', () => {
    territoireIDF.style.fill = '#F6B12D';
})

territoireIDF.addEventListener('mouseover', () => {
    territoireIDF.style.fill = '#2F4558';
})

territoireIDF.addEventListener('mouseout', () => {
    territoireIDF.style.fill = '#F6B12D';
})
/******************** NOR *********************/
const territoireNOR = document.getElementById('FRNOR');
const lienNOR = document.querySelector('.linkQuestion8');

lienNOR.addEventListener('mouseover', () => {
    territoireNOR.style.fill = '#2F4558';
})
lienNOR.addEventListener('mouseout', () => {
    territoireNOR.style.fill = '#F6B12D';
})

territoireNOR.addEventListener('mouseover', () => {
    territoireNOR.style.fill = '#2F4558';
})

territoireNOR.addEventListener('mouseout', () => {
    territoireNOR.style.fill = '#F6B12D';
})
/******************** NAQ *********************/
const territoireNAQ = document.getElementById('FRNAQ');
const lienNAQ = document.querySelector('.linkQuestion9');

lienNAQ.addEventListener('mouseover', () => {
    territoireNAQ.style.fill = '#2F4558';
})
lienNAQ.addEventListener('mouseout', () => {
    territoireNAQ.style.fill = '#F6B12D';
})

territoireNAQ.addEventListener('mouseover', () => {
    territoireNAQ.style.fill = '#2F4558';
})

territoireNAQ.addEventListener('mouseout', () => {
    territoireNAQ.style.fill = '#F6B12D';
})
/******************** OCC *********************/
const territoireOCC = document.getElementById('FROCC');
const lienOCC = document.querySelector('.linkQuestion10');

lienOCC.addEventListener('mouseover', () => {
    territoireOCC.style.fill = '#2F4558';
})
lienOCC.addEventListener('mouseout', () => {
    territoireOCC.style.fill = '#F6B12D';
})

territoireOCC.addEventListener('mouseover', () => {
    territoireOCC.style.fill = '#2F4558';
})

territoireOCC.addEventListener('mouseout', () => {
    territoireOCC.style.fill = '#F6B12D';
})
/******************** PDL *********************/
const territoirePDL = document.getElementById('FRPDL');
const lienPDL = document.querySelector('.linkQuestion11');

lienPDL.addEventListener('mouseover', () => {
    territoirePDL.style.fill = '#2F4558';
})
lienPDL.addEventListener('mouseout', () => {
    territoirePDL.style.fill = '#F6B12D';
})

territoirePDL.addEventListener('mouseover', () => {
    territoirePDL.style.fill = '#2F4558';
})

territoirePDL.addEventListener('mouseout', () => {
    territoirePDL.style.fill = '#F6B12D';
})
/******************** PAC *********************/
const territoirePAC = document.getElementById('FRPAC');
const lienPAC = document.querySelector('.linkQuestion12');

lienPAC.addEventListener('mouseover', () => {
    territoirePAC.style.fill = '#2F4558';
})
lienPAC.addEventListener('mouseout', () => {
    territoirePAC.style.fill = '#F6B12D';
})

territoirePAC.addEventListener('mouseover', () => {
    territoirePAC.style.fill = '#2F4558';
})

territoirePAC.addEventListener('mouseout', () => {
    territoirePAC.style.fill = '#F6B12D';
})

/******************** COR *********************/
const territoireCOR = document.getElementById('FRCOR');
const lienCOR = document.querySelector('.linkQuestion13');

lienCOR.addEventListener('mouseover', () => {
    territoireCOR.style.fill = '#2F4558';
})
lienCOR.addEventListener('mouseout', () => {
    territoireCOR.style.fill = '#F6B12D';
})

territoireCOR.addEventListener('mouseover', () => {
    territoireCOR.style.fill = '#2F4558';
})

territoireCOR.addEventListener('mouseout', () => {
    territoireCOR.style.fill = '#F6B12D';
})