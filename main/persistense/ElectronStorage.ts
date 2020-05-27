class ElectronStorage {
    async get(key: string): Promise<any> {
        return Promise.resolve([
            {
                type: "network",
                path: "tcp://localhost:5000"
            },
            {
                type: "local",
                path: "./path/to/database"
            },
            {
                type: "local",
                path: "./path/to/database"
            }
        ])
    }
}

export default ElectronStorage;