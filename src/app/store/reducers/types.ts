import { Columns } from "../../types";

export interface ColumnState {
    cols: Columns[],
    status: "Loading" | "Loaded" | "Error"
    errorMessage?: string
}