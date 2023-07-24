---
layout: compose
lang: en
lang-ref: phylogeny-explorer
title: Phylogeny Explorer
description: |
  This experimental tool allows the user to view occurrence data from the GBIF network aligned to legume phylogeny. This ongoing research and development project builds on its predecessors, [PhyloJive](https://doi.org/10.1093/bioinformatics/btu024) and [PhyloLink](https://doi.org/10.1093/bioinformatics/bty792)
  <div class="feature-cta">
    <a href="#about-this-tool" class="button is-primary" style="text-decoration: none;">Learn more</a>
    <button class="button" onClick="openWidgetInFullscreen()">Fullscreen</button>
  </div>
background: /assets/images/abarema_cochliocarpum_lpq15538_pods11_x.jpg
imageLicense: |
  *Abarema cochliacarpos (Caesalpinioideae) Luciano de Queiroz 15538, fruit pods, photo Colin Hughes*
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

## Phylogenetic exploration of GBIF data

This experimental tool allows the user to explore legume phylogeny in combination with occurrence data from the GBIF network. This ongoing research and development project builds its predecessors [PhyloJive](https://doi.org/10.1093/bioinformatics/btu024) and [PhyloLink](https://doi.org/10.1093/bioinformatics/bty792).

We welcome your feedback on your experiences and any issues you encounter. Special thanks to **Morten Høfft** and [**Thomas Stjernegaard Jeppesen**](https://orcid.org/0000-0003-1691-239X) of the GBIF Secretariat for programming.

> [What is this?](#what-is-this) • [Why do this?](#why-do-this) • [How do I use this?](#how-do-i-use-this) • [Table legend](#table-legend) • [Other notes](#other-notes)  

## What is this?

This visualization tool combines a recently published phylogeny of Mimosoid legumes ([Ringelberg et al. 2023](https://www.science.org/doi/10.1126/sciadv.ade4954)) and aligns it with GBIF occurrence data. The visualization tool matched the tree tip terminals and some internal nodes to the GBIF taxonomy. We then use the taxonomic match to map occurrence data from GBIF for that taxon. For an individual species this is identical to a species map on GBIF.org. 

The novelty is that an entire clade can be mapped with a single click and that multiple clades, such as sister clades, can be mapped in different colors.  We have included several tools to navigate the tree, change maps views and colors and to download the resulting occurrences from a clade

## Why do this?

For nearly three hundred years, biologists have organized information about the identities and evolutionary relationships of the world’s organisms around Linnaean taxonomy. Developed by Carl Linnaeus, this system seeks to describe evolutionary relationships based on close observation of the similarities and differences in organisms’ physical traits.

The emergence of tools, techniques and systems that enable biologists to rapidly test and sample organisms and their environments for fragments of DNA sparked the creation of a new branch of science: molecular phylogeny. Rather than assessing relatedness through physical characteristics, this new discipline uses biochemical analyses to compare key sections of DNA evidence collected from various settings to assess how organisms are related. 

This tool presents the first large-scale interactive phylogenetic view of GBIF-mediated species occurrence data—one that organizes occurrences based on current phylogenetic understanding (in this case, for the large plant family Fabaceae, commonly known as legumes), rather than a traditional taxonomic view. While the most valuable immediate use is investigating the relationship between occurrences of adjacent “sister” species, we anticipate that having this novel view of the “the most comprehensive, openly available, application-agnostic (most unbiased), easiest-to-use, and modern access point to known digital species occurrence data” could enable the development of new avenues for research as well as new policy-relevant indicators of phylogenetic diversity.

## How do I use this?

Here is a brief overview of the basic functionality—but click around and have fun.

First, use a full-screen on a large monitor to explore the phylogenetic viewer (meaning: it may work on an iPhone, but we don’t recommend the experience). Large phylogenies remain more difficult to navigate.

Then use the sizing menu to best fit the tree to your screen. The tip labels may not show up on the tree until you choose a larger size and zoom in. When you hover over a tip or node, the tips are highlighted, and the tip label or range will float in a black box in the lower left. This will help you navigate the tree later. 

Use the Search Tree Box. Type in a species binomial or a genus name, that you think is in the tree and choose the selection as it appears. Try typing Erythrophleum into the box as it has an interesting distribution.  Choose one of the two species that it recognizes from the search. The tree will move to show that species in a box. Click on the circle to the left of the name and its distribution will be displayed on the map. 

After clicking a line with a color circle, and icons will appear in a table under the map. Click on the color circle to change color.

The most immediate value of this tool may be in investigating the geospatial relationships between occurrences of sister species. 

Now go back to the tree and click on the other Erythrophleum species. Its distribution will show up with a different color and a second line will appear in the table.

Click on the circle at the node that contains the two Erythrophleum species. Now a third line will occur in the table. This will be labeled by the top and bottom species in the clade as seen in the tree; however, but the dots on the map did not change color. Now hover the cursor over the three horizontal lines in front of this new line in the table. A hand will appear and you can click and slide this line to the top of the table. Watch how the color changes on the map. Also see that there are three colors on the phylogeny, each representing the taxa in the table.

## Table legend

{: .legend-prose}
- {% include icon-burger.html %} : to Click and drag to change the layer order of the occurrences. Dragging a clade up or down to offers a clearer view if records are overlapping each other.
- {% include icon-color.html %} : change the color of dots. Please remember that there is also limit to the number of colors that can be displayed (or recognized by our eyes).
- {% include icon-eye.html %} : hide or unhide that taxa on the map.
- {% include icon-nodes.html %} : Move the tree view to highlight that clade (this helps if you get lost in the tree).
- {% include icon-funnel.html %} : Shows the selected clade on the legume portal map, where they can be further investigated and downloaded.
- Clade: Name of clade or the bounding species in the phylogeny.

## Other notes

- Users can select multiple nodes—even non-sister nodes  
-	If you select a node that has more than 200 species, you will receive a warning message that only the first 200 will show on the map. Please choose a smaller node or be aware that not all are mapped. 
-	This visualization only maps the species that are in the tree. It does not impute other species that are part of the genus but not in the tree. There are a few exceptions to this rule, such as the genera Acacia, which are coded in at nodes. If you click on that node, you get all the species of that node, not just the ones in the tree. In this case the viewer is using GBIF taxonomic hierarchy as well as the tree hierarchy. We are investigating how we can make these internal nodes stand out from the others.
-	The map provides four baselayers—try them out. Zoom in and out as you normally would, either with the +/- or your mouse.

Thank you for investigating this new GBIF development. Please help us to improve this tool by providing feedback on your experiences and any issues you encounter. **Please email [phylogeny@gbif.org](mailto:phylogeny@gbif.org) with your comments and ideas**.
