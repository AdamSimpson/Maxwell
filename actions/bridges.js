// ActionTypes
export const FETCH_BRIDGES = 'FETCH_BRIDGES'
export const FETCH_BRIDGES_FAILURE = 'FETCH_BRIDGES_FAILURE'
export const FETCH_BRIDGES_SUCCESS = 'FETCH_BRIDGES_SUCCESS'
export const REGISTER_BRIDGE = 'REGISTER_BRIDGE'
export const UNREGISTER_BRIDGE = 'UNREGISTER_BRIDGE'
export const ENABLE_BRIDGE = 'ENABLE_BRIDGE'
export const DISABLE_BRIDGE = 'DISABLE_BRIDGE'

// Action Creators
export function fetch_bridges() {
  return {
    type: FETCH_BRIDGES
  }
}

export function fetch_bridges_success(bridge_response) {
  return {
    type: FETCH_BRIDGES_SUCCESS,
    bridge_info: bridge_response
  }
}

export function fetch_bridges_failure(failure_response) {
  return {
    type: FETCH_BRIDGES_FAILURE,
    bridge_failure: failure_response
  }
}

/*
export function register_bridge(id, username) {
    return {
        type:      ADD_BRIDGE,
        bridge_id: id,
        username:  username
    }
}

export function unregister_bridge(id) {
    return {
        type:      REMOVE_BRIDGE,
        bridge_id: id
    }
}

export function enable_bridge(id) {
  return {
    type: ENABLE_BRIDGE,
    bridge_id: id
  }
}

export function disable_bridge(id) {
  return {
    type: DISABLE_BRIDGE,
    bridge_id: id
  }
}
*/
