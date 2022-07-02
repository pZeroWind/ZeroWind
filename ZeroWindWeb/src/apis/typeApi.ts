import axios from "../plugins/axios";

const url = "/Type"

export interface OptionModel {
    value: string | number,
    label: string
}

export class Type {
    Get(out: Function) {
        axios.get(url, {}).then(res => {
            out(res)
        })
    }
}