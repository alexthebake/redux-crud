import { dispatchAjaxAction } from '@thebasement/redux-boilerplate';

function defineShowAction(ajaxActionType, endpoint, backend) {
  return (id, params = {}, options = {}) => dispatchAjaxAction({
    ajaxActionType,
    ajaxCallback: () => backend.getResource(`${endpoint}/${id}`, params, options),
  });
}

function defineIndexAction(ajaxActionType, endpoint, backend) {
  return (params = {}, options = {}) => dispatchAjaxAction({
    ajaxActionType,
    ajaxCallback: () => backend.getResource(endpoint, params, options),
  });
}

function defineCreateAction(ajaxActionType, endpoint, backend) {
  return (attributes = {}, options = {}) => dispatchAjaxAction({
    ajaxActionType,
    ajaxCallback: () => backend.createResource(endpoint, attributes, options),
  });
}

function defineUpdateAction(ajaxActionType, endpoint, backend) {
  return (id, updates = {}, options = {}) => dispatchAjaxAction({
    ajaxActionType,
    ajaxCallback: () => backend.updateResource(endpoint, id, updates, options),
  });
}

function defineDeleteAction(ajaxActionType, endpoint, backend) {
  return (id, options = {}) => dispatchAjaxAction({
    ajaxActionType,
    ajaxCallback: () => backend.deleteResource(endpoint, id, options),
  });
}

const boilerplate = {
  show: defineShowAction,
  index: defineIndexAction,
  create: defineCreateAction,
  update: defineUpdateAction,
  delete: defineDeleteAction,
};

export default function defineCRUDAction(actionName, ...args) {
  return boilerplate[actionName](...args);
}
