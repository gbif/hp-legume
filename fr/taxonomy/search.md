---
layout: documentation
sideNavigation: fr.sidenav.taxonomy
title: Taxon
permalink: /fr/taxonomy/search
description: Faire une recherche dans la checklist des Fabaceae
klass: fullwidth
lang-ref: species-search
---

<!--react and gbif component-->
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="search"></div>

<script >
'use strict';
const e = React.createElement;
class Search extends React.Component {

    render() {

      return e(
        ColBrowser.Search,
        { 
          catalogueKey: '{{site.col.catalogueKey}}',
          pathToTree: '/fr/taxonomy/browse',
          pathToSearch: '/fr/taxonomy/search',
          pathToTaxon: '/fr/taxonomy/taxon/',
          defaultTaxonKey: '{{site.col.defaultTaxonKey}}',
          citation: 'top' 
        }
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(Search), domContainer);
</script>
