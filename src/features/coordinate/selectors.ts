import type { RootState } from "../../app/store";


export const selectCoordinate = (state: RootState) => state.coordinate.coordinate;