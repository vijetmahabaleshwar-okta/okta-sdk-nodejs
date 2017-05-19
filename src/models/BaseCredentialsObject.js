/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class BaseCredentialsObject
 */
class BaseCredentialsObject {
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

module.exports = BaseCredentialsObject;