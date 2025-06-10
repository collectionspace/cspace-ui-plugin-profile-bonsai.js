# Change Log

## v7.1.0

v7.1.0 adds support for CollectionSpace 8.2

### Changes

- On the record editor form for Object records:
  - The field Object Production Agent (`objectProductionAgents/objectProductionAgent`) has been added. If this verison of the bonsai profile is used with a CollectionSpace server older than 8.2.0, values entered in the repeating field will not be saved.

## v7.0.0

v7.0.0 adds support for CollectionSpace 8.1, and requires cspace-ui version 10.

### Breaking Changes

- On the record editor form for Object records:
  - The field group Published Related Link Group (`publishedRelatedLinkGroupList/publishedRelatedLinkGroup`) has been added. If this version of the bonsai profile is used with an older CollectionSpace server, values entered in the repeating field will not be saved.

## v6.0.0

v6.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The field collection place field (`fieldCollectionPlace`) has been replaced with the repeating field collection places (`fieldCollectionPlaces/fieldCollectionPlace`). If this version of the bonsai profile is used with an older CollectionSpace server, values entered in the repeating field will not be saved.

## v5.0.0

### Breaking Changes

- v5.0.0 requires cspace-ui version 6. On the record editor form for Object records, the annotation field group (`annotationGroupList`) has been added. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-bonsai with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

## v4.1.0

- Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).

## v4.0.0

### Breaking Changes

- v4.0.0 upgrades cspace-ui-plugin-ext-livingplant to version 2. If you have customized this profile, see the changelog for cspace-ui-plugin-ext-livingplant v2.0.0 for changes that may be needed to your configuration.

## v3.0.0

### Breaking Changes

- v3.0.0 requires cspace-ui version 4.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

- A new field, `fieldCollectionFeature`, has been added to the record editor form for object records. This field exists in CollectionSpace 5.2, but not in prior versions of CollectionSpace. To use this version of cspace-ui-plugin-profile-bonsai with an older version of the CollectionSpace server, this new field should be hidden; otherwise, any value entered will not be saved.
