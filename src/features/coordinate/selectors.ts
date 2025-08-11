import type { RootState } from "../../app/store";


export const selectCoordinate = (state: RootState) => state.coordinate.coordinate;
export const selectCoordinateHisto = (state: RootState) => state.coordinate.coordinateHisto;

