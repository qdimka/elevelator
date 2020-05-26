import {IOptions} from "nconf";

class Configuration implements IOptions{
    public directory: string;

    public static Default(): Configuration {
        return {
            directory: "files"
        };
    }
}

export default Configuration;