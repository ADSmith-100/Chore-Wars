import config from "../config";
import TokenService from "./token-service";

const ChildrenApiService = {
  getChildren() {
    return fetch(`${config.API_ENDPOINT}/children`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getChildren(childId) {
    return fetch(`${config.API_ENDPOINT}/child/${childId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getChildChores(childId) {
    return fetch(`${config.API_ENDPOINT}/children/${childId}/chores`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postChore(childId, title) {
    return fetch(`${config.API_ENDPOINT}/chores`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        child_id: childId,
        title: title,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ChildrenApiService;
