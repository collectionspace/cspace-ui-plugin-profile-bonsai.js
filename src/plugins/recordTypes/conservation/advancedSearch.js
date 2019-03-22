export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
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
        path: 'ns2:conservation_common/conservationNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_common/conservationStatusGroupList/conservationStatusGroup/status',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_common/treatmentPurpose',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_bonsai/treatmentsPerformed/treatmentPerformed',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_common/conservators/conservator',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_common/approvedBy',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conservation_common/approvedDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conservation_common/treatmentStartDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conservation_common/treatmentEndDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_bonsai/futureTreatmentGroupList/futureTreatmentGroup/futureTreatment',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conservation_bonsai/futureTreatmentGroupList/futureTreatmentGroup/futureTreatmentDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:conservation_common/destAnalysisGroupList/destAnalysisGroup/sampleBy',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conservation_livingplant/nextRepotting',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
