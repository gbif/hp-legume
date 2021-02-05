---
layout: compose
title: Legume Occurrences Working Group
background: /assets/images/map.png
description: Assembling a global, expert-verified species occurrence dataset for family Leguminosae
height: 70vh
structure:
	- type: heroImage
---

Coordinators: [Edeline Gagnon](mailto:edeline.gagnon@gmail.com) [(Royal Botanic Garden, Edinburgh, U.K.)](https://www.rbge.org.uk/), [Jens Ringelberg](mailto:jens.ringelberg@gmail.com) (University of Zurich, Switzerland) and [Joe Miller](mailto:jmiller@gbif.org) [(Global Biodiversity Information Facility) Copenhagen Denmark](https://www.gbif.org).

## Introduction

The central goal of the Legume Occurrence Working Group is to produce an expert-verified, global occurrence dataset for the entire legume family. As legumes are economically and ecologically important, such a dataset would find many uses among ecologists, evolutionary biologists, conservationists, plant breeders, foresters and others. To ensure data reproducibility, we focus primarily on preserved specimens from herbaria, although other records that are verifiable are also being considered.
While it is now extremely easy to download data from global occurrence databases such as GBIF and use standard cleaning tools, custom-made R scripts and OpenRefine to edit the data, there are still a number of important bottlenecks to assembling high-quality occurrence data for legume species, including:
-	Having an up-to-date and accurate list of accepted names and synonyms for all legumes;
-	Verifying the taxonomic identity of occurrence records;
-	Assessing whether the final set of occurrence records for any given species is accurately represents the known geographic distribution.

## Strategy

Our strategy is to overcome these difficulties by:
-	Basing our occurrence dataset on the checklist produced by the Legume Taxonomic WG;
-	Working with legume experts to assess the quality of the occurrence dataset;
-	Encouraging collaboration with taxonomists and other botanists to clean, assess and contribute geo-referenced data through a semi-automated process of micro-publications. 
-	Encouraging return of cleaned occurrence records back to the original data providers so that the data improvement is sustained.
We expect different occurrence datasets will present different challenges (e.g. additional geo-referencing, use of different databases depending on geographic regions, how to identify occurrence non-native records) and will require different strategies to clean the data. All data will be required to meet minimum standards based on specified guidelines and tools, while some users will clean and explore their data further if they wish. Each dataset would generate a micro-publication including the methods and tools they used, and an assessment of data quality and completeness. Furthermore, micro-publications, with associated DOIs would make the work citable providing recognition for this type of work. 

## Future plans

Pending completion of the Legume Taxonomic WG checklist the Occurrence Working Groups has:
-	Compiled a list of current and on-going efforts to assemble and geo-reference occur-rence record data. Our survey indicates that while considerable efforts have been made for certain subfamilies, considerable challenges remain for amassing data for subfamily Papilionoideae, in which most legume species diversity is concentrated. 
-	Produced a series of Rscripts for (i) retrieval of GBIF data based on a list of accepted names and synonyms; (ii) cleaning of the retrieved occurrence data, based on the framework of the script from Ringelberg et al. (2020), modified to add tools from the R Package “CoordinateCleaner” (Zizka et al. 2019), plus additional custom scripts provided by E. Gagnon and Y. Barros Souza. These scripts will be made available shortly through GitHub. 
During 2021 we plan to organize a meeting to present and discussed the proposed work-flow and Rscripts for retrieval of data directly from GBIF and standard cleaning tools. In addition, updates are expected about new GBIF-hosted data cleaning tools and occurrence data indexing to an updated taxonomy that includes many recommendations from the legume taxonomic working group. We are also planning a brainstorming meeting to explore ideas for using the new expert-verified global legume occurrence data in legume biogeography. Further details about these meetings will be available shortly. Finally, once the Taxonomic checklist is available, we plan to move forward with legume-wide data cleaning. 
New community developed best practices document in geo-referencing have been published by GBIF. This set of three guides provide theory, methods and advice on spatial interpretation of locations.

## Join the Working Group

If you are interested in participating in our group, or have questions, please contact [Edeline Gagnon](mailto:edeline.gagnon@gmail.com), [Jens Ringelberg](mailto:jens.ringelberg@gmail.com) or [Joe Miller](mailto:jmiller@gbif.org). We are keen to hear from everyone working to expand and improve the quality of available legume occurrence data.

## Resources

* [Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/) by Arthur Chapman and John Wieczorek offers theoretical background and methods for georeferencing descriptive localities. The document updates best practices, recommendations, and common terms and technologies developed and refined since publication of the same authors' 2006 Guide to Best Practices for Georeferencing.

* The [Georeferencing Quick Reference Guide](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) by Paula Zermoglio, Arthur Chapman, John Wieczorek, Maria Celeste Luna and David Bloom provides a citable protocol in the form of a practical how-to guide with rules and procedures for determining the shapes of geospatial features and using their outcomes as the basis for georeferencing.

* The [Georeferencing Calculator Manual](https://docs.gbif.org/georeferencing-calculator-manual/1.0/en/) by David Bloom, John Wieczorek and Paula Zermoglio lays out instructions for the [Georeferencing Calculator](http://georeferencing.org/georefcalculator/gc.html). This browser-based tool works both online and offline, helping users georeference descriptive localities using the point-radius method based on the theory given in Georeferencing Best Practices.



