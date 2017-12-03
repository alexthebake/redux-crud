import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { createReducer } from '@thebasement/redux-boilerplate';
import { resourceActionTypes } from './actionTypes';
import defineCRUDAction from './defineCRUDAction';
import defineCRUDReducer from './defineCRUDReducer';

const INITIAL_RESOURCE_STATE = {
  data: {},
  error: null,
  loaded: false,
  loading: false,
};

class Resource {
  constructor({ name, endpoint, customActions = {} }) {
    if (_.isNil(Resource.backend)) {
      throw new Error('`Resource.backend` is not defined.');
    }
    this.name = name;
    this.endpoint = endpoint;
    this.actionTypes = resourceActionTypes(this.name);
  }

  bindActionCreators(dispatch) {
    const actions = {};
    _.forEach(this.actionTypes, (type, actionName) => {
      actions[actionName] = defineCRUDAction(actionName, type, this.endpoint, Resource.backend);
    });
    _.forEach(this.customActions, (actionCreator, actionName) => {
      actions[actionName] = actionCreator;
    });
    return bindActionCreators(actions, dispatch);
  }

  createReducer() {
    let actionHandlers = {};
    _.forEach(this.actionTypes, (actionType, actionName) => {
      actionHandlers = {
        ...actionHandlers,
        ...defineCRUDReducer(actionName, actionType),
      };
    });
    return createReducer(INITIAL_RESOURCE_STATE, actionHandlers);
  }
}

export default Resource;
