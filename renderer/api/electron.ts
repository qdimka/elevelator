import {ipcRenderer} from "electron";

export const ipcGet = async (channel: string): Promise<any[]> => {
    return await ipcRenderer.invoke(channel)
}