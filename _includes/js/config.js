var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { 
    "type":"and",
    "predicates": [
      {"type":"equals","key":"taxonKey","value":"5386"},
      {"type":"equals","key":"hasGeospatialIssue","value":"false"},
      {"type":"equals","key":"basisOfRecord", "value":"preservedSpecimen"},
    ]
  },
  highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'basisOfRecord', 'typeStatus', 'isInCluster', 'recordedBy', 'datasetKey','occurrenceIssue'],
  occurrenceSearchTabs: ['TABLE', 'MAP','GALLERY', 'DATASETS']
};