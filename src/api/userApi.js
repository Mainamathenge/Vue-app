import axios from "@/api/config";

export function getUser(id) {
  return axios.get(`/api/v1/users/${id}`);
}

export function getUsers() {
  return axios.get(`/api/v1/dashboards/user/explorer`);
}

export function searchUsers(payload) {
  return axios.get(
    `/api/v1/searches/search/exproler?page=${payload.pageNumber}&term=${payload.query}`
  );
}

export function filterUsers(payload) {
  return axios.get(
    `/api/v1/searches/filter/exproler?page=${payload.pageNumber}&value=${payload.query}&field=${payload.value}`
  );
}

export function updateUser(data) {
  return axios.patch(`/api/v1/users/${data.id}`, data.values);
}

export function activateUser(id) {
  return axios.patch(`/api/v1/users/${id}`, { active: true });
}

export function deactivateUser(id) {
  return axios.patch(`/api/v1/users/${id}`, { active: false });
}
