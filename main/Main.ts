import {app, globalShortcut, screen} from "electron";
import Startup from "./Startup";
import ConfigurationService from "./configuration/ConfigurationService";

(async () => {
    const configuration = ConfigurationService.getConfiguration();
    Startup.run(
        app,
        screen,
        globalShortcut,
        configuration
    );
})();