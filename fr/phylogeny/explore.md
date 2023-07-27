---
layout: compose
lang: fr
lang-ref: phylogeny-explorer
title: Explorateur de Phylogénie
description: |
  Cet outil expérimental permet aux utilisateurs de visualiser les données d'occurrences provenant du réseau GBIF sur une phylogénie des Légumineuses. Cet actuel projet de recherche et développement se base sur ses prédécesseurs, [PhyloJive](https://doi.org/10.1093/bioinformatics/btu024) et [PhyloLink](https://doi.org/10.1093/bioinformatics/bty792)
  <div class="feature-cta">
    <a href="#phylogenetic-exploration-of-gbif-data" class="button is-primary" style="text-decoration: none;">En apprendre plus</a>
    <button class="button" onClick="openWidgetInFullscreen()">Plein écran</button>
  </div>
background: /assets/images/abarema_cochliocarpum_lpq15538_pods11_x.jpg
imageLicense: |
  *Abarema cochliacarpos (Caesalpinioideae) Luciano de Queiroz 15538, gousse, photo Colin Hughes*
height: 50vh
composition: 
  - type: heroImage
  - type: blank
    inlineData: 
      klass: iframe-box
      markdownContent: |
        <iframe id="phylotreeiframe" seamless frameborder="150" src="{{ site.phylo.tool }}/explore?explore={{ site.url | url_encode}}{{ site.phylogony.treePath | url_encode}}&template={{ site.url | url_encode}}{{ site.phylo.template | url_encode}}" height = '790' width="1370" style="height: calc(100vh - 68px);" scrolling='yes' ></iframe> 
  - type: pageMarkdown
---

<script>
  var elem = document.getElementById("phylotreeiframe");
  function setIframeTree(name) {
    var treeOptions = {{ site.data.phylogony.trees | jsonify }};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var tree = urlParams.get('tree');
    const treePath = treeOptions[name || tree] || "{{ site.phylo.treePath }}";
    const src = "{{ site.phylo.tool }}/explore?explore={{ site.url | url_encode}}" + encodeURIComponent(treePath) + "&template={{ site.url | url_encode}}{{ site.phylo.template | url_encode}}";
    elem.src = src;
  }
  setIframeTree();

  function openWidgetInFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
</script>

## Exploration phylogénétique des données GBIF

Cet outil expérimental permet aux utilisateurs d'explorer une phylogénie des Légumineuses en combinaison avec les données d'occurrence du réseau GBIF.
Ce projet de recherche et développement en cours se base sur ses prédécesseurs, [PhyloJive](https://doi.org/10.1093/bioinformatics/btu024) et [PhyloLink](https://doi.org/10.1093/bioinformatics/bty792)

N'hésitez pas à nous faire part de vos commentaires à propos de votre expérience utilisateur et les problématiques que vous rencontrez lors de l'utilisation de cet outil. Remerciements particuliers à **Morten Høfft** et [**Thomas Stjernegaard Jeppesen**](https://orcid.org/0000-0003-1691-239X) du Secrétariat GBIF pour leur programmation.

> [Qu'est-ce ?](#what-is-this) • [Pourquoi ?](#why-do-this) • [Comment l'utiliser ?](#how-do-i-use-this) • [Légende de la table](#table-legend) • [Autres notes](#other-notes)  

## Qu'est-ce ?

Cet outil de visualisation combine une phylogénie des Mimosoideae ([Ringelberg et al. 2023](https://www.science.org/doi/10.1126/sciadv.ade4954)) et l'aligne avec les données d'occurrences de GBIF. L'outil de visualisation fait correspondre les extrémités de l'arbre et certains noeuds internes avec la taxonomie de GBIF. Nous utilisons ensuite les correspondances taxonomiques afin de faire correspondre les données d'occurrences provenant de GBIF à ce taxon. Pour une espèce individuelle cela correspond à une cartographie d'espèce sur GBIF.org.

L'innovation provient du fait que le clade entier peut être cartographié par un simple clic et que de multiples clades, comme des clades frères, peuvent l'être en utilisant des couleurs différentes. Nous avons inclus plusieurs outils pour naviguer dans l'arbre, modifier la visualisation et les couleurs des cartes et télécharger les occurrences correspondantes pour un clade.

## Pourquoi ?

Depuis presque 300 ans, les biologistes ont organisés l'information à propos de l'identité et des relations évolutives des organismes dans le monde selon la taxonomie Linnéenne. Développée par Carl Linnaeus, ce système a pour objectif de décrire les relations évolutives en se basant sur l'observation attentive des similarités et différences de traits physiques entre les organismes.

L'émergence d'outils, de techniques et de systèmes permettant aux biologistes de tester et échantillonner rapidement les organismes et leur environnement pour obtenir des fragments d'ADN a engendré la création d'une nouvelle branche scientifique : la phylogénie moléculaire. Au lieu d'évaluer les parentés à travers des caractéristiques physiques, cette nouvelle discipline utilise des analyses biochimiques afin de comparer des sections clés de la preuve ADN provenant de paramètres variés afin d'évaluer les relations entre les organismes.

Cet outil présente la première visualisation phylogénétique à grande échelle et interactive de données d'occurrences d'espèces mises à disposition par GBIF, outil qui organise les occurrences en se basant sur les connaissances phylogénétiques actuelles (dans le cas présent, pour la vaste famille de plantes que sont les Fabaceae, communément appelée Légumineuses), plutôt qu'une visualisation taxonomique traditionnelle. Alors que l'utilisation immédiate la plus importante est l'étude des relations entre les occurrences d'espèces soeurs adjacentes, nous prévoyons que l'existence de cette nouvelle visualisation "la plus complète, disponible de manière ouverte, indépendante d'applications (le plus impartial), la plus facilement utilisable, et point d'accès moderne aux données digitales connues d'occurrences d'espèces" pourrait permettre le développement de nouvelles avenues de recherche ainsi que de nouveaux indicateurs de diversité phylogénétique pertinents pour les politiques.


## Comment l'utiliser ?

Voici un bref aperçu des fonctionnalités de base, mais cliquez partout et amusez-vous.

Tout d'abord, utilisez le plein écran sur un grand écran pour explorer la phylogénie (ce qui signifie : cela peut fonctionner sur un iPhone, mais nous ne recommandons pas l'expérience). Les grandes phylogénies restent plus difficiles à naviguer.

Ensuite, utilisez le menu de redimension pour adapter au mieux l'arbre à votre écran. Les étiquettes d'extrémité peuvent ne pas apparaître sur l'arborescence tant que vous n'avez pas choisi une taille plus grande et effectué un zoom avant. Lorsque vous survolez une extrémité ou un nœud, les extrémités sont mises en surbrillance et l'étiquette d'extrémité ou la plage flottera dans une boîte noire en bas à gauche. Cela vous aidera à naviguer dans l'arborescence plus tard.

Utilisez la boîte de recherche de l'arbre. Tapez un nom binomial d'espèce ou un nom de genre que vous pensez être dans l'arbre et choisissez la sélection telle qu'elle apparaît. Essayez de taper Erythrophleum dans la boîte puisque ce genre a une distribution intéressante. Choisissez l'une des deux espèces reconnues lors de la recherche. L'arbre se déplacera pour montrer cette espèce dans une boîte. Cliquez sur le cercle à gauche du nom et sa répartition s'affichera sur la carte.

Après avoir cliqué une ligne avec un cercle de couleur, une icône apparaitra sous la carte dans un tableau. Cliquez sur le cercle coloré afin de modifier celle-ci.

L'utilité la plus importante de cet outil est à priori l'étude des relations géospatiales entre les occurrences d'espèces soeurs.

Retournez maintenant à l'arbre et cliquez sur l'autre espèce d'Erythrophleum. Sa distribution apparaitra sous une autre couleur et une seconde ligne apparaîtra dans le tableau.

Cliquez sur le cercle au niveau du nœud contenant les deux espèces d'Erythrophleum. Une troisième ligne apparaîtra dans le tableau. Celle-ci sera étiquetée avec les espèces supérieures et inférieures du clade tel que vu dans l'arbre; cependant, les points sur la carte n'ont pas changé de couleur. Passez maintenant le curseur sur les trois lignes horizontales devant cette nouvelle ligne dans le tableau. Une main apparaîtra et vous permettra de cliquer et faire glisser cette ligne vers le haut du tableau. Observez le changement de couleur sur la carte. Vous pouvez également voir qu'il y a trois couleurs sur la phylogénie, chacune représentant un taxon dans le tableau.


## Légende de la table

{: .legend-prose}
- {% include icon-burger.html %} : cliquer, déplacer et modifier l'ordre des couches d'occurrences. Déplacer un clade vers le haut ou le bas offrira une visualisation plus claire si les enregistrements sont superposés.
- {% include icon-color.html %} : changer la couleur des points. Veuillez prendre en compte que le nombre de couleur pouvant être affichées (ou reconnues par nos yeux) est limité.
- {% include icon-eye.html %} : masquer ou révéler le taxon sur la carte.
- {% include icon-nodes.html %} : déplacer la visualisation de l'arbre afin de mettre en surbrillance ce clade (cela vous aidera si vous vous perdez dans l'arbre).
- {% include icon-funnel.html %} : montrer le clade sélectionné sur la carte du portail des Légumineuses, où les données pourront être étudiées plus en détail et être téléchargées.
- Clade: nom du clade ou des espèces délimitantes dans la phylogénie.

## Autres notes

- Les utilisateurs peuvent sélectionner plusieurs noeuds, même des noeuds étant pas frères.
- Si vous sélectionnez un clade comprenant plus de 200 espèces, vous recevrez un avertissement spécifiant que seules les 200 premières espèces apparaîtront sur la carte. Veuillez choisir un noeud correspondant à moins d'espèces ou soyez conscients que toutes les espèces ne sont pas visibles sur la carte.
- Cette visualisation ne cartographie que les espèces présentes dans l'arbre. Elle n'impute pas d'autres espèces faisant partie du genre mais absentes de l'arbre. Il existe quelques exceptions à cette règle, comme le genre Acacia, codés comme des noeuds. Si vous cliquez sur ce noeud, vous obtiendrez toutes les espèces de ce noeud, et pas seulement les espèces dans l'arbre. Dans ce cas particulier, l'outil de visualisation utilise la hiérarchie taxonomique de GBIF en plus de la hiérarchie de l'arbre. Nous étudions de quelle manière faire en sorte que ces nœuds internes se démarquent des autres.
- La carte propose quatre couches de base, essayez-les. Effectuez un zoom avant ou arrière comme vous le feriez normalement, soit avec +/- soit avec votre souris.

Merci d'avoir testé ce nouveau développement du GBIF. Aidez-nous à améliorer cet outil en nous faisant part de vos commentaires sur vos expériences et sur tous les problèmes que vous avez pu rencontrer. **Merci d'envoyer un courriel à [phylogeny@gbif.org](mailto:phylogeny@gbif.org) avec vos commentaires et idées**.