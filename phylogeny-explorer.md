---
layout: compose
lang: en
lang-ref: phylogeny-explorer
title: Phylogeny explorer
description: |
  This tool allows the user to explore legume phylogeny in combination with occurrence data from GBIF.  This tool is still an experiment, and as such, there may be some limitations and potential errors in the data and functionality.
  <div class="feature-cta">
    <a href="#about-this-tool" class="button is-primary" style="text-decoration: none;">Learn more</a>
    <button class="button" onClick="openWidgetInFullscreen()">Fullscreen</button>
  </div>
background: /assets/images/placeholder_ai_beans.jpg
height: 50vh
composition: 
  - type: heroImage
  - type: blank
    inlineData: 
      klass: iframe-box
      markdownContent: |
        {: .button }
        [example - Pararchidendroncercis](?tree=example)
        
        {: .button }
        [hippocampus - BOLD:AAF0603](?tree=hippocampus)
        
        {: .button }
        [legume - Cercis](?tree=legume)
        

        <iframe id="phylotreeiframe" seamless frameborder="150" src="{{ site.phylo.tool }}/explore?explore={{ site.url | url_encode}}{{ site.phylogony.treePath | url_encode}}&template={{ site.url | url_encode}}{{ site.phylo.template | url_encode}}" height = '790' width="1370" style="height: calc(100vh - 68px);" scrolling='yes' ></iframe> 
  - type: pageMarkdown
---

<script>
  function setIframeTree(name) {
    var treeOptions = {{ site.data.phylogony.trees | jsonify }};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var tree = urlParams.get('tree');
    const treePath = treeOptions[name || tree] || "{{ site.phylo.treePath }}";
    var elem = document.getElementById("phylotreeiframe");
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

## Untested example files

Tree         | Clade              | Publication     | GBIF dataset  |   OpenTree Study
-------------|------------------- |------------     |-------------  |--------------- 
[1-Ringelberg-2023](?tree=1-Ringelberg-2023) | Fabaceae | [Publication](https://www.science.org/doi/10.1126/sciadv.ade4954)     | GBIF dataset          |   [OpenTree Study](https://tree.opentreeoflife.org/curator/study/view/ot_2227/?tab=home)
[2-Azani-2017](?tree=2-Azani-2017) | Fabaceae | [Publication](https://onlinelibrary.wiley.com/doi/abs/10.12705/661.3)    | GBIF dataset          |   [OpenTree Study](https://tree.opentreeoflife.org/curator/study/view/ot_1050/?tab=home)
[3-Cardoso-2012](?tree=3-Cardoso-2012) | Fabaceae | [Publication](https://bsapubs.onlinelibrary.wiley.com/doi/full/10.3732/ajb.1200380)     | GBIF dataset          |   [OpenTree Study](https://tree.opentreeoflife.org/curator/study/view/pg_2057/?tab=home)
[4-Simon-2011](?tree=4-Simon-2011) | Mimosa | Publication     | GBIF dataset          |   OpenTree Study
[5-Mishler-2014](?tree=5-Mishler-2014) | Acacia | Publication     | GBIF dataset          |   OpenTree Study
[7-Achimon-2018](?tree=7-Achimon-2018) | Anarthrophyllum | Publication     | GBIF dataset          |   OpenTree Study
[10-Delgado-Salinas](?tree=10-Delgado-Salinas) | Fabaceae | Publication     | GBIF dataset          |   OpenTree Study
[11-Farruggia-2011](?tree=11-Farruggia-2011) | Fabaceae | Publication     | GBIF dataset          |   OpenTree Study
[12-Sousa-2013](?tree=12-Sousa-2013) | Calliandra | Publication     | GBIF dataset          |   OpenTree Study
[13-Saslis-Lagoudakis](?tree=13-Saslis-Lagoudakis) | Fabaceae | Publication     | GBIF dataset          |   OpenTree Studye
[14-Cardosa-2012](?tree=14-Cardosa-2012) | Bowdichia | Publication     | GBIF dataset          |   OpenTree Study
[15-Boatwright-2008](?tree=15-Boatwright-2008) | Crotalarieae | Publication     | GBIF dataset          |   OpenTree Study
[16-Ramos-2016](?tree=16-Ramos-2016) | Aldina | Publication     | GBIF dataset          |   OpenTree Study
[17-Schutte-Vlok-2011](?tree=17-Schutte-Vlok-2011) | Podalyria | Publication     | GBIF dataset          |   OpenTree Study
[22-Schire-2009](?tree=22-Schire-2009) | Indigofereae | Publication     | GBIF dataset          |   OpenTree Study
[23-Sinou-2020](?tree=23-Sinou-2020) | Cercidoideae | Publication     | GBIF dataset          |   OpenTree Study
[24-Simpson-2006](?tree=24-Simpson-2006) | Pomaria | Publication     | GBIF dataset          |   OpenTree Study

## About this tool

We use the recent [Ringelberg et al. 2023](https://www.science.org/doi/10.1126/sciadv.ade4954) phylogeny and match GBIF occurrence data to the tree.  The visualization tool matched the tree tip terminals and some internal nodes to the GBIF taxonomy.  We then use the taxonomic match to map occurrence data from GBIF for that taxon.  For an individual species this is identical to a species map on GBIF.org.  The novelty is that an entire clade can be mapped with a single click and that multiple clades, such as sister clades, can be mapped in different colors.  We have included several tools to navigate the tree, change maps views and colors and to download the resulting occurrences from a clade

## How to use?

First, we suggest using a full-screen on a large monitor. It works on my iphone but we don’t recommend the experience.  Larger phylogenies are more difficult to navigate.   

We recommend using the sizing menu to best fit the tree to your screen.  “L” works best for me with this tree on my Macbook screen.  The tip labels may not show up on the tree until you choose a larger size and zoom in.
 
When you hover over a tip or node the tips are highlighted and the tip label or range will float in a black box in the lower left.  This will help navigating later. 

Use the Search Tree Box. Type in a species binomial or a genus name, that you think is in the tree and choose the selection as it appears. Try typing Erythrophleum into the box as it has an interesting distribution.  Choose one of the two species that it recognizes from the search. The tree will move to show that species in a box. Click on the circle to the left of the name and its distribution will be displayed on the map. 

After clicking a line with a color circle and icons will appear in a table under the map. Click on the color circle to change color.

This tool is often the most valuable investigating sister species occurrences relationships. Now go back to the tree and click on the other Erythrophleum species. Its distributkon will show up with a different color and a second line will appear in the table.

Now click on the circle at the node that contains the two Erythrophleum species. Now a third line will occur in the table. This will be labeled by the top and bottom species in the clade as seen in the tree; however, but the dots on the map did not change color. Now hover the cursor over the three horizontal lines in front of this new line in the table. A hand will appear and you can click and slide this line to the top of the table. Watch how the color changes on the map. Also see the that there are three colors on the phylogeny, each representing the taxa in the table.

That is a brief overview of the basic functionality. Click around and have fun.

## Legend for the Table

{: .legend-prose}
- {% include icon-burger.html %} : Change the layer order of the dots. Move a clade to better view as many dots may be on top of each other.
- {% include icon-color.html %} : change the color of dots. Please remember that there is also limit to the number of colors that can be displayed (or recognized by our eyes).
- {% include icon-eye.html %} : hide or unhide that selection on the map
- {% include icon-nodes.html %} : Move the tree to that clade.  This helps if you get lost.
- {% include icon-funnel.html %} : takes this clade and shows them on the legume portal map for further investigation and download.
- Clade: name of clade or the bounding species in the phylogeny

## Other notes
- Mulitple nodes can be selected – even non-sister nodes 
-	If you select a node that has more than 200 species you will receive a waring message that only the first 200 will show on the map, please choose a smaller node or be aware that not all are mapped. There is also limit to the number of colors that can be displayed (or recognized by our eyes).
-	This visualization only maps the species that are in the tree. It does not impute other species that are part of the genus but not in the tree. There are some exceptions to this rule.  I have coded a few genera such as Acacia, were coded in at nodes. If you click on that node you get all the species of that node not just the ones in the tree.  In this case it is using GBIF taxonomic hierarchy not the tree hierarchy.  We are investigating how we can make these internal nodes stand out from the others.
-	On the map: There are four baselayers, try them out. Zoom in and  out as you normally would, either with the +/- or your mouse.

Thank you for your understanding and for helping us to improve this tool by providing feedback on your experiences and any issues you encounter. Thanks to Morten Høfft and Thomas Stjernegaard Jeppesen of the GBIF Secretariat for programing.  Please write jmiller@gbif.org if you have any comments or ideas.


