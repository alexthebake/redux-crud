import {
  handleAjaxAction,
  addOrUpdateById,
  unionById,
  removeById,
} from '@thebasement/redux-boilerplate';

function defineShowActionHandler(actionType) {
  return handleAjaxAction({
    actionType,
    dataUpdater: addOrUpdateById,
  });
}

function defineIndexActionHandler(actionType) {
  return handleAjaxAction({
    actionType,
    dataUpdater: unionById,
  });
}

function defineCreateActionHandler(actionType) {
  return handleAjaxAction({
    actionType,
    dataUpdater: addOrUpdateById,
  });
}

function defineUpdateActionHandler(actionType) {
  return handleAjaxAction({
    actionType,
    dataUpdater: addOrUpdateById,
  });
}

function defineDeleteActionHandler(actionType) {
  return handleAjaxAction({
    actionType,
    dataUpdater: removeById,
  });
}

const boilerplate = {
  show: defineShowActionHandler,
  index: defineIndexActionHandler,
  create: defineCreateActionHandler,
  update: defineUpdateActionHandler,
  delete: defineDeleteActionHandler,
};

export default function defineCRUDReducer(actionName, actionType) {
  return boilerplate[actionName](actionType);
}
