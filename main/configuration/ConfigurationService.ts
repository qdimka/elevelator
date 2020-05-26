import nconf from "nconf";
import Configuration from "./Configuration";

class ConfigurationService {
    constructor() {
        const environment = nconf.get("NODE_ENV") || "development";
        nconf
            .file("configuration.json")
            .file(environment, `configuration.${environment}.json`)
            .defaults(Configuration.Default())
            .env();
    }

    public get(section: string): any {
        return nconf.get(section);
    }

    public getConfiguration(): Configuration {
        const configuration:any = Configuration.Default();
        for (const key of Object.keys(configuration)) {
            configuration[key] = nconf.get(key);
        }
        return configuration as Configuration;
    }
}

export default new ConfigurationService();