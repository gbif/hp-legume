var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "literature"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "fr",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "pt",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "taxonKey",
          "value": "5386"
        },
        {
          "type": "equals",
          "key": "hasGeospatialIssue",
          "value": "false"
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "availableTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "map",
      "table",
      "gallery",
      "datasets",
      "clusters",
      "dashboard",
      "download"
    ]
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "equals",
      "key": "gbifTaxonKey",
      "value": "5386"
    },
    "highlightedFilters": [
      "q",
      "scientificName",
      "year"
    ]
  }
}