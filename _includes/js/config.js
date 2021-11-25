var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { 
    "type":"and",
    "predicates": [
      {"type":"equals","key":"taxonKey","value":"5386"},
      {"type":"equals","key":"hasGeospatialIssue","value":"false"}
    ]
  },
  highlightedFilters: ['taxonKey', 'recordedBy', 'country', 'stateProvince', 'gadmGid', 'datasetKey', 'basisOfRecord', 'typeStatus', 'isInCluster','occurrenceIssue'],
  occurrenceSearchTabs: ['TABLE', 'MAP','GALLERY', 'DATASETS']
};