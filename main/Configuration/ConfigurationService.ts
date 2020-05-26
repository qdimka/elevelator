import Configuration from "./Configuration";

class ConfigurationService {
    public getConfiguration(): Configuration {
        return new Configuration();
    }
}

export default ConfigurationService;