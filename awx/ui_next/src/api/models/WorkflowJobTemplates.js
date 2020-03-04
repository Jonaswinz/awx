import Base from '../Base';

class WorkflowJobTemplates extends Base {
  constructor(http) {
    super(http);
    this.baseUrl = '/api/v2/workflow_job_templates/';
  }

  readWebhookKey(id) {
    return this.http.get(`${this.baseUrl}${id}/webhook_key/`);
  }

  updateWebhookKey(id) {
    return this.http.post(`${this.baseUrl}${id}/webhook_key/`);
  }

  associateLabel(id, label, orgId) {
    return this.http.post(`${this.baseUrl}${id}/labels/`, {
      name: label.name,
      organization: orgId,
    });
  }

  createNode(id, data) {
    return this.http.post(`${this.baseUrl}${id}/workflow_nodes/`, data);
  }

  disassociateLabel(id, label) {
    return this.http.post(`${this.baseUrl}${id}/labels/`, {
      id: label.id,
      disassociate: true,
    });
  }

  launch(id, data) {
    return this.http.post(`${this.baseUrl}${id}/launch/`, data);
  }

  readLaunch(id) {
    return this.http.get(`${this.baseUrl}${id}/launch/`);
  }

  readNodes(id, params) {
    return this.http.get(`${this.baseUrl}${id}/workflow_nodes/`, {
      params,
    });
  }

  readScheduleList(id, params) {
    return this.http.get(`${this.baseUrl}${id}/schedules/`, {
      params,
    });
  }
}

export default WorkflowJobTemplates;
