---
layout: documentation
sideNavigation: fr.sidenav.taxonomy
title: Taxon
permalink: /fr/taxonomy/taxon
---

<!--react and gbif component-->
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="taxon"></div>
<div id="gbifTaxonLinks"></div>

<script>
'use strict';
const e = React.createElement;
class Taxon extends React.Component {

    render() {

      return e(
        ColBrowser.Taxon,
        { 
          catalogueKey: '{{site.col.catalogueKey}}',
          pathToTree: '/fr/taxonomy/browse',
          pathToSearch: '/fr/taxonomy/search',
          pathToTaxon: '/fr/taxonomy/taxon/',
          pathToDataset: '/sourcedatasets/',
          pageTitleTemplate: 'Legume | __taxon__',
          citation: 'top'
        }
      );
    }
  }

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(Taxon), domContainer);
</script>

<script>
  const taxonUrl = `//api.gbif.org/v1/species?datasetKey=f382f0ce-323a-4091-bb9f-add557f3a9a2&sourceId=${ location.pathname.substr(location.pathname.lastIndexOf('/') + 1)}`;
  fetch(taxonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
        if (jsonResponse.results[0] && jsonResponse.results[0].nubKey) {
          var el = document.getElementById('gbifTaxonLinks');
          var filter = `{"must":{"taxonKey":[${jsonResponse.results[0].nubKey}]}}`;
          var link = `../../occurrence/search?filter=${encodeURIComponent(btoa(filter))}`;
          el.innerHTML = `<a class="button is-primary" href="${link}">{{site.data.translations.searchOccurrences.fr}}</a>`;
        }
      })
      .catch(function(err) {

      });
</script>
