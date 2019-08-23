import {AppAction} from "src/state/model";
import {Vehicle} from "src/state/vehicle/model";

export enum VehicleActionTypes {
    VehicleReceived = 'VEHC_RECEIVED'
}

export function vehicleReceived(vehicle: Vehicle): AppAction<VehicleActionTypes, Vehicle> {
    return {
        type: VehicleActionTypes.VehicleReceived,
        payload: vehicle
    };
}
