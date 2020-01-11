# Change Log

 # Change Log

## v3.0.0

### Breaking Changes

- v3.0.0 requires cspace-ui version 4, because it uses cspace-ui-plugin-record-taxon version 2.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

- A new field, `fieldCollectionFeature`, has been added to the record editor form for object records. This field exists in CollectionSpace 5.2, but not in prior versions of CollectionSpace. To use this version of cspace-ui with an older version of the CollectionSpace server, this new field should be hidden; otherwise, any value entered will not be saved.
