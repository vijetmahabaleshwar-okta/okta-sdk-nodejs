/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class GroupMembershipMediationActions
 */
class GroupMembershipMediationActions {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }


  delete() {
    return this.client.http.http(this._links.self.href, {
      method: 'delete'
    });
  }
}

module.exports = GroupMembershipMediationActions;