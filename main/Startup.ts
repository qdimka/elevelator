import { App, BrowserWindow, Screen, GlobalShortcut } from "electron";
import path from "path";
import Configuration from "./configuration/Configuration";
import {ipcMain} from "electron";
import ElectronStorage from "./persistense/ElectronStorage";

class Startup {
    public static application: App;
    public static screen: Screen;
    public static globalShortcut: GlobalShortcut;
    public static window: BrowserWindow;

    public static configuration: Configuration;
    public static store: ElectronStorage;

    public static run(application: App,
                      screen: Screen,
                      globalShortcut: GlobalShortcut,
                      configuration: Configuration): void {

        this.application = application;
        this.screen = screen;
        this.globalShortcut = globalShortcut;
        this.configuration = configuration;
        this.store = new ElectronStorage();

        if(!this.application.requestSingleInstanceLock()) {
            this.application.quit();
        } else {
            this.registerEvents();
        }
    }

    private static registerEvents(): void {
        this.application.on("ready", this.onReady.bind(this));
        this.application.on("window-all-closed", this.onWindowAllClosed.bind(this));
        this.application.on("will-quit", this.onWillQuit.bind(this));
    }

    private static async onReady(): Promise<void> {
        this.registerIpc();

        this.window = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
            }
        });

        await this.window.loadURL(!this.application.isPackaged
            ? "http://localhost:8080"
            :`file://${path.join(__dirname,"../static/index.html")}`);
    }

    private static registerIpc(): void {
        ipcMain.handle("connection_history", async () => {
            return await this.store.get("connection_history")
        })
    }

    private static onWindowAllClosed(): void {
        if (process.platform !== "darwin")
            this.application.quit();
    }

    private static onWillQuit(): void {
        // todo
    }
}

export default Startup;