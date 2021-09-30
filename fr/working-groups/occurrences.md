---
layout: heroImage
lang-ref: occurrences
title: Legume Occurrences Working Group
background: /assets/images/map.png
description: Assembling a global, expert-verified species occurrence dataset for family Leguminosae
height: 70vh
toc: true
---

Coordinateurs: [Edeline Gagnon](mailto:edeline.gagnon@gmail.com) [(Royal Botanic Garden, Edinburgh, U.K.)](https://www.rbge.org.uk/), [Jens Ringelberg](mailto:jens.ringelberg@gmail.com) (University of Zurich, Switzerland) et [Joe Miller](mailto:jmiller@gbif.org) [(Global Biodiversity Information Facility) Copenhagen Denmark](https://www.gbif.org).

## Introduction
L'objectif principal du Groupe de Travail sur les Occurrences des Légumineuses est de générer un jeu de données vérifié par des experts et contenant des données d'occurrences globales pour la famille des Légumineuses au complet. Les Légumineuses ayant une grande importance écologique et économique, un tel jeu de données trouverait de nombreux usages parmi les écologistes, biologistes évolutionnaires, conservationnistes, hybrideurs, forestiers et autres. Afin de s'assurer de la reproductivité des données, nous nous concentrons principalement sur les spécimens d'herbiers, mais d'autres enregistrements vérifiables pourraient être considérés.
Alors qu'il est désormais extrêmement facile de télécharger des données depuis des bases de données d'occurrences globales, telles que GBIF, et d'utiliser des outils de nettoyage standards, des scripts R personnalisés et OpenRefine pour modifier les données, il existe toujours de nombreuses barrières dans la construction de jeux de données d'occurrences de haute qualité pour les espèces de Légumineuses, incluant: 
-	Avoir une liste d'espèce mise-à-jour et précise de noms acceptés et de synonymes pour toutes les Légumineuses;
-	Vérifier l'identité taxonomique des enregistrements d'occurrences;
-	Évaluer si le jeu de données d'occurrence final pour n'importe quelle espèce représente de manière précise la distribution géographique connue.

## Stratégie
Notre stratégie est de surmonter ces difficultés en :
-	Basant notre jeu de données d'occurrences sur la liste d'espèces produite par le Groupe de Travail sur la Taxonomie des Légumineuses (Legume Taxonomic Working Group).
-	Travaillant avec les experts sur les Légumineuses afin de vérifier la qualité du jeu de données d'occurrences.
-	Encourageant le retour des occurrences nettoyées vers le fournisseur de données original afin de maintenir une amélioration constante des données. Nous prévoyons que différents jeux de données d'occurrences vont représenter différents défis (e.g. géo-référencement additionnels, utilisation de différentes bases de données dépendamment de la région géographique, nécessité d'identifier des occurrences non-natives) et que ceci va nécessiter différentes stratégies afin de nettoyer les données. Toutes les données devront rencontrer des standards minimums basés sur des guides et des outils, mais certains utilisateurs voudront nettoyer et explorer plus en détail les données.
-	Encourageant la collaboration avec des taxonomistes et autres botanistes afin de nettoyer, évaluer et contribuer au géo-référencement des données via un procédé automatisé de micro-publications. Chaque micro-publication devra contenir la méthode et des outils utilisés pour nettoyer le jeu de données, et une évaluation de la qualité et complétude des données. Associés à des DOI, les micro-publications permettent la citation des travaux, permettant ainsi une reconnaissance de ce type de travail.


## Plans futurs
-	Pour le moment, nous avons compilé une liste des projets actuels et prévus afin d'assembler et géo-référencer les données d'occurrences. Notre sondage indique que, bien que de considérables efforts aient été faits afin d'assembler des données de certaines sous-familles, des défis demeurent afin d'amasser des données pour la sous-famille des Papilionoideae, au sein de laquelle la majorité de la diversité des espèces de Légumineuses est concentrée.
-	Le Groupe de Travail sur les Occurrences a produit une série de scripts R afin de (i) retrouver les données GBIF basées sur une liste de noms acceptés et de synonymes; (ii)
nettoyer les données d'occurrences retrouvées , en se basant sur la structure du script de Ringleberg et al. (2020) modifié afin d'ajouter des outils provenant du paquet R "CoordinateCleaner" (Zizka et al., 2019), en plus de scripts additionnels fournis par E. Gagnon et Y. Barros Souza. Ces scripts seront bientôt disponibles sur GitHub. Au cours de l'année 2021 nous prévoyons d'organiser une rencontre afin de présenter et discuter le flux de travail proposé et les scripts R pour retrouver des données directement depuis GBIF et des outils de nettoyage de données standards.
-	Des mises à jour sont attendues par rapport à des outils de nettoyage de données hébergés par GBIF et à l'indexation des données d'occurrences par rapport à une taxonomie révisée, tel que recommandé par le legume taxonomic working group.
-	Nous prévoyons une rencontre de réflexion afin d'explorer des idées pour utiliser les nouvelles données d'occurrences vérifiées par les experts sur les Légumineuses dans des analyses sur la biogéographie des Légumineuses. De plus amples informations à propos de ces rencontres seront disponibles bientôt.
-	Pour finir, dès que la liste taxonomique vérifiée des Légumineuses, nous prévoyons avancer dans le nettoyage des données des Légumineuses. De nouveaux documents développés par la communauté à propos des meilleures pratiques en géoréférencement ont été publiés sur GBIF. Cet ensemble de trois [guides](/fr/working-groups/occurrences#resources) fournissent la théorie, les méthodes et les conseils à propos de l'interprétation spatiale de la localité.


## Rejoignez le Groupe de Travail

Si vous êtes intéressés à participer à notre groupe de travail, ou si vous avez des questions, veuillez contacter [Edeline Gagnon](mailto:edeline.gagnon@gmail.com), [Jens Ringelberg](mailto:jens.ringelberg@gmail.com) ou [Joe Miller](mailto:jmiller@gbif.org). Nous serions ravis de discuter avec quiconque intéressé à travailler sur l'expansion et l'amélioration de la qualité des données d'occurrences disponibles sur les Légumineuses.

## Ressources

* [Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/) by Arthur Chapman and John Wieczorek offers theoretical background and methods for georeferencing descriptive localities. The document updates best practices, recommendations, and common terms and technologies developed and refined since publication of the same authors' 2006 Guide to Best Practices for Georeferencing.

* The [Georeferencing Quick Reference Guide](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) by Paula Zermoglio, Arthur Chapman, John Wieczorek, Maria Celeste Luna and David Bloom provides a citable protocol in the form of a practical how-to guide with rules and procedures for determining the shapes of geospatial features and using their outcomes as the basis for georeferencing.

* The [Georeferencing Calculator Manual](https://docs.gbif.org/georeferencing-calculator-manual/1.0/en/) by David Bloom, John Wieczorek and Paula Zermoglio lays out instructions for the [Georeferencing Calculator](http://georeferencing.org/georefcalculator/gc.html). This browser-based tool works both online and offline, helping users georeference descriptive localities using the point-radius method based on the theory given in Georeferencing Best Practices.


