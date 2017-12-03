import { ajaxActionType } from '@thebasement/redux-boilerplate';

function CRUDActionType(actionType, resourceName) {
  return ajaxActionType(`[${actionType}][${resourceName}]`);
}

function resourceActionTypes(resourceName) {
  return {
    show: CRUDActionType('show', resourceName),
    index: CRUDActionType('index', resourceName),
    create: CRUDActionType('create', resourceName),
    update: CRUDActionType('update', resourceName),
    delete: CRUDActionType('delete', resourceName),
  };
}

export {
  CRUDActionType,
  resourceActionTypes,
};
