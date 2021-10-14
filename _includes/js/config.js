var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { 
    "type": "or",
    "predicates": [
      {type: 'equals',
       key: 'taxonKey', 
       value: 5386 
      },
      {"type": "and",
        "predicates": [
          {
            key: 'taxonKey',
            type: 'equals',
            value: 5386
          },
          {
            key: "notIssues",
            type: "equals",
            value: "COUNTRY_COORDINATE_MISMATCH"
          }
        ]
      }
  ]
 } 
  highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'basisOfRecord', 'typeStatus', 'cluster', 'recordedBy','publishingOrg', 'datasetName','occurrenceIssue'],
  occurrenceSearchTabs: ['TABLE', 'MAP','GALLERY', 'DATASETS']
};
