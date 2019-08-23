import {AppAction} from "src/state/model";
import {Vehicle} from "src/state/vehicle/model";
import {VehicleActionTypes} from "src/state/vehicle/actions";


export interface VehicleState {
    currentVehicle: Vehicle;
}

export const initialState: VehicleState = {
    currentVehicle: null
};

export function vehicleReducer(state: VehicleState = initialState, action: AppAction<VehicleActionTypes, any>): VehicleState {
    switch (action.type) {
        case VehicleActionTypes.VehicleReceived:
            return onVehicleReceived(state, action.payload);
        default:
            break;
    }
    return state;
}

function onVehicleReceived(state, vehicle: Vehicle): VehicleState {
    return {
        ...state,
        currentVehicle: vehicle
    }
}