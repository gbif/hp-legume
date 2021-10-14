var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'taxonKey', value: 5386 },
  
  highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'basisOfRecord', 'typeStatus', 'cluster', 'recordedBy','publishingOrg', 'datasetName','occurrenceIssue'],
  occurrenceSearchTabs: ['TABLE', 'MAP','GALLERY', 'DATASETS']
};
