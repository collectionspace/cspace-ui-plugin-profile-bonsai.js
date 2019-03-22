const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible>
        <Cols>
          <Col>
            <Field name="conditionCheckRefNumber" />
            <Field name="conditionCheckAssessmentDate" />
          </Col>
          <Col>
            <Field name="conditionChecker" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectConditionAndTechAssessmentInfo" collapsible collapsed>
        <Row>
          <Field name="objectAuditCategory" />
          <Field name="conservationTreatmentPriority" />
          <Field name="nextConditionCheckDate" />
        </Row>

        <Field name="completenessGroupList">
          <Field name="completenessGroup">
            <Field name="completeness" />
            <Field name="completenessDate" />
            <Field name="completenessNote" />
          </Field>
        </Field>

        <Field name="techAssessmentGroupList">
          <Field name="techAssessmentGroup">
            <Field name="techAssessment" />
            <Field name="techAssessmentDate" />
          </Field>
        </Field>

        <Field name="conditionCheckGroupList">
          <Field name="conditionCheckGroup">
            <Field name="condition" />
            <Field name="conditionDate" />
            <Field name="conditionNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="envRecommendations" />
          </Col>

          <Col>
            <Field name="specialRequirements" />
            <Field name="legalRequirements" />
          </Col>
        </Cols>

        <Field name="legalReqsHeldGroupList">
          <Field name="legalReqsHeldGroup">
            <Field name="legalReqsHeld" />
            <Field name="legalReqsHeldBeginDate" />
            <Field name="legalReqsHeldEndDate" />
            <Field name="legalReqsHeldNumber" />
            <Field name="legalReqsHeldRenewDate" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="salvagePriorityCodeGroupList">
              <Field name="salvagePriorityCodeGroup">
                <Field name="salvagePriorityCode" />
                <Field name="salvagePriorityCodeDate" />
              </Field>
            </Field>
          </Col>

          <Col />
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
