export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bonsai/taxon',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bonsai/commonName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bonsai/japaneseName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bonsai/sponsor',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bonsai/treeType',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
