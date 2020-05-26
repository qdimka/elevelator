/* tslint:disable:no-unused-expression */
import { expect } from "chai";
import ConfigurationService from "../../main/configuration/ConfigurationService";
import Configuration from "../../main/configuration/Configuration";

describe("ConfigurationService", () => {
    it("getConfiguration should return non-empty configuration", () => {
        const configuration = ConfigurationService.getConfiguration();
        const defaultConfiguration = Configuration.Default();

        expect(configuration).to.be.not.null;
        expect(configuration.directory).to.be.eq(defaultConfiguration.directory);
    });
});