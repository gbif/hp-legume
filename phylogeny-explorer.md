---
layout: compose
lang: en
lang-ref: phylogeny-explorer
title: Phylogeny explorer
description: |
  This tool allows the user to explore legume phylogeny in combination with occurrence data from GBIF, and geography. We would like to remind you that this tool is still an experiment, and as such, there may be some limitations and potential errors in the data and functionality.
  <div class="feature-cta">
    <a href="/about-phylogeny-explorer" class="button is-primary" style="text-decoration: none;">Learn more</a>
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
        <iframe id="phylotreeiframe" seamless frameborder="150" src="https://phylogeny-tool.gbif-staging.org/explore?explore={{ site.url | url_encode}}{{ site.phylo.treePath | url_encode}}&template={{ site.url | url_encode}}{{ site.phylo.template | url_encode}}" height = '790' width="1370" style="height: calc(100vh - 68px);" scrolling='yes' ></iframe> 
  - type: pageMarkdown
---

<script>
  var elem = document.getElementById("phylotreeiframe");
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