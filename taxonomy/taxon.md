---
layout: documentation
sideNavigation: sidenav.taxonomy
title: Taxon
permalink: /taxonomy/taxon
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
          pathToTree: '/taxonomy/browse',
          pathToSearch: '/taxonomy/search',
          pathToTaxon: '/taxonomy/taxon/',
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
  const taxonUrl = `//api.gbif.org/v1/species?datasetKey={{site.col.gbifDatasetKey}}&sourceId=${ location.pathname.substr(location.pathname.lastIndexOf('/') + 1)}`;
  fetch(taxonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
        if (jsonResponse.results[0] && jsonResponse.results[0].nubKey) {
          var el = document.getElementById('gbifTaxonLinks');
          var filter = `{"must":{"taxonKey":[${jsonResponse.results[0].nubKey}]}}`;
          var link = `../../data?filter=${encodeURIComponent(btoa(filter))}`;
          el.innerHTML = `<a class="button is-primary" href="${link}">{{site.data.translations.searchOccurrences.en}}</a>`;
        }
      })
      .catch(function(err) {

      });
</script>
