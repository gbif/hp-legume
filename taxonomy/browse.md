---
layout: documentation
sideNavigation: sidenav.taxonomy
title: Browse
permalink: /taxonomy/browse
description: Browse the checklist of Fabaceae
klass: fullwidth
lang-ref: species-browse
---

You can download the latest version of the WCVP-Fabaceae list in .txt (with DarwinCore fields) from the [Catalogue of Life ChecklistBank](https://data.catalogueoflife.org/dataset/2304/about) and in Word format [here](/media/WCVP_Fabaceae_checklist_May_2022.docx).


<!--react and gbif component-->
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="tree"></div>

<script>
'use strict';
const e = React.createElement;
class Tree extends React.Component {

    render() {

      return e(
        ColBrowser.Tree,
        { 
          catalogueKey: '{{site.col.catalogueKey}}',
          pathToTree: '/taxonomy/browse',
          pathToSearch: '/taxonomy/search',
          pathToTaxon: '/taxonomy/taxon/',
          defaultTaxonKey: '{{site.col.defaultTaxonKey}}',
          citation: 'top'
        }
      );
    }
  }

const domContainer = document.querySelector('#tree');
ReactDOM.render(e(Tree), domContainer);
</script>
