const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Cols,
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="conservationNumber" />

            <Field name="conservationStatusGroupList">
              <Field name="conservationStatusGroup">
                <Field name="status" />
                <Field name="statusDate" />
              </Field>
            </Field>

            <Field name="treatmentPurpose" />
          </Col>

          <Col>
            <Field name="treatmentsPerformed" subpath="ns2:conservation_bonsai">
              <Field name="treatmentPerformed" />
            </Field>

            <Field name="conservators">
              <Field name="conservator" />
            </Field>

            <Field name="otherPartyGroupList">
              <Field name="otherPartyGroup">
                <Field name="otherParty" />
                <Field name="otherPartyRole" />
                <Field name="otherPartyNote" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="proposedTreatment" />

        <Row>
          <Field name="approvedBy" />
          <Field name="approvedDate" />
          <Field name="treatmentStartDate" />
          <Field name="treatmentEndDate" />
        </Row>

        <Field name="treatmentSummary" />
      </Panel>

      <Panel name="objectAnalysisInfo" collapsible collapsed>
        <Field name="futureTreatmentGroupList" subpath="ns2:conservation_bonsai">
          <Field name="futureTreatmentGroup">
            <Field name="futureTreatment" />
            <Field name="futureTreatmentDate" />
            <Field name="futureTreatmentNote" />
          </Field>
        </Field>

        <Field name="destAnalysisGroupList">
          <Field name="destAnalysisGroup">
            <Panel>
              <Row>
                <Field name="destAnalysisApprovedDate" />
                <Field name="destAnalysisApprovalNote" />
                <Field name="sampleBy" />
                <Field name="sampleDate" />
              </Row>

              <Field name="sampleDescription" />

              <Row>
                <Field name="sampleReturned" />
                <Field name="sampleReturnedLocation" />
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="analysisMethod" />
        <Field name="analysisResults" />
      </Panel>

      {extensions.livingplant.conservation.form}
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
