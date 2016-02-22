/**
example bridge state:


bridges:
{
  is_fetching: false                                 // boolean: if a bridge update is happening
  ids: [12, 57, 2]                            // string: bridge provided bridge ID
  usernames: {12: 'abc', 57: 'def'} // key(id): value(bridge provided username from registration)
  statuses:  {12: true, 57: false}  // key(id): value(boolean: if the user has enabled the bridge for use)
}

**/

import {FETCH_BRIDGES, FETCH_BRIDGES_SUCCESS, FETCH_BRIDGES_FAILURE} from '../actions/bridges.js';

const initial_state = {
                        is_fetching: false,
                        ids: [],
                        ips: {},
                        usernames: {},
                        statuses: {}
                      };

export default function Bridges(state = initial_state, action) {
  switch(action.type) {
    case FETCH_BRIDGES:
      return {...state, is_fetching: true}
    case FETCH_BRIDGES_SUCCESS:
      return {...state, ids: action.bridge_info.map((bridge) => bridge.id),
                        ips: action.bridge_info.reduce((map, bridge) => { map[bridge.id] = bridge.ipaddress; return map}, {}),
                        is_fetching: false
      };
    case FETCH_BRIDGES_FAILURE:
      return {...state, ids: [],
                        is_fetching: false
             };
/*
    case REGISTER_BRIDGE:
      return {...state, bridge_ids: [...state.bridge_ids, action.bridge_id],
                        bridge_usernames: {...state.bridge_usernames, {action.bridge_id: action.username}},
                        bridge_statuses: {...state.bridge_statuses, {action.bridge_id: true}}
      };
    case UNREGISTER_BRIDGE:
      let new_usernames = Object.assign({}, state.bridge_usernames);
      delete new_usernames[action.id];
      let new_statuses = Object.assign({}, state.bridge_statuses);
      delete new_statuses[action.id];

      return {...state, bridge_ids: bridge_ids.filter((id) => {id != action.id}),
                        bridge_usernames: new_usernames,
                        bridge_statuses:  new_statuses

      };
    case ENABLE_BRIDGE:
      return {...state, bridge_statuses: {...state.bridge_statuses, {action.bridge_id: true}}
    };
    case DISABLE_BRIDGE:
      return {...state, bridge_statuses: {...state.bridge_statuses, {action.bridge_id: false}}
    };
*/
    default:
      return state;
  }
};
