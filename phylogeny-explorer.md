---
layout: compose
lang: en
lang-ref: phylogeny-explorer
title: Phylogeny explorer
description: |
  This tool allows the user to explore legume phylogeny in combination with occurrence data from GBIF, and geography. We would like to remind you that this tool is still an experiment, and as such, there may be some limitations and potential errors in the data and functionality.
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
        <iframe id="phylotreeiframe" seamless frameborder="150" src="{{ site.phylo.tool }}/explore?explore={{ site.url | url_encode}}{{ site.phylo.treePath | url_encode}}&template={{ site.url | url_encode}}{{ site.phylo.template | url_encode}}" height = '790' width="1370" style="height: calc(100vh - 68px);" scrolling='yes' ></iframe> 
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

## About this tool

Thank you for using our tool to explore phylogenies, occurrence data from GBIF, and geography. We would like to remind you that this tool is still an experiment, and as such, there may be some limitations and potential errors in the data and functionality.

Please be aware that the results you obtain from this tool should be considered preliminary and subject to change as we continue to refine and improve the tool. We are continuously working to improve the accuracy and reliability of the data and functionality, but we cannot guarantee that the information you obtain from this tool is entirely error-free.

Furthermore, while we strive to provide the most up-to-date and accurate information available, the data we use is subject to potential biases and inaccuracies inherent in the sources we draw from. We recommend that you carefully consider the results and interpretations you obtain from this tool and use them in conjunction with other sources of information to make informed decisions.

Thank you for your understanding and for helping us to improve this tool by providing feedback on your experiences and any issues you encounter.