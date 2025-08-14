var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

//var siteConfig = {
//  routes: {
//    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
//      route: '/data'
//    }
//  },
//  occurrence: {
//    rootPredicate: {
//      "type": "and",
//      "predicates": [
//        { "type": "equals", "key": "taxonKey", "value": "5386" },
//        { "type": "equals", "key": "hasGeospatialIssue", "value": "false" }
//      ]
//    },
//    highlightedFilters: ['taxonKey', 'recordedBy', 'country', 'stateProvince', 'gadmGid', 'datasetKey', 'basisOfRecord', 'isInCluster', 'occurrenceIssue'],
//    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'CLUSTERS', 'DASHBOARD']
//  }
//};


var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'literature'], // what widgets do you include on your site. If not included we will link to gbif.org (for showing individual datasets for example)
    alwaysUseHrefs: true, // if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
  },
  availableCatalogues: ['OCCURRENCE', 'LITERATURE', 'SPECIES'],
  
  occurrence: {
    // excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    availableTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],

    rootPredicate: {
       "type": "and",
       "predicates": [
        { "type": "equals", "key": "taxonKey", "value": "5386" },
        { "type": "equals", "key": "hasGeospatialIssue", "value": "false" }
      ]
     },
     occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS', "CLUSTERS", "DASHBOARD"] // what tabs should be shown
  },

  species: {
    rootFilter: {
      predicate: {type: 'in', key: 'taxonKey',values: '5386'}
    }
  }

  literature: {
    rootFilter: {
      predicate: {type: 'in', key: 'taxonKey', value: '5386'}
    },
    highlightedFilters: ['q', 'scientificName', 'year']
  },
};