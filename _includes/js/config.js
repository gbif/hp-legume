var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        { "type": "equals", "key": "taxonKey", "value": "5386" },
        { "type": "equals", "key": "hasGeospatialIssue", "value": "false" }
      ]
    },
    highlightedFilters: ['taxonKey', 'recordedBy', 'country', 'stateProvince', 'gadmGid', 'datasetKey', 'basisOfRecord', 'isInCluster', 'occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'CLUSTERS']
  }
};
