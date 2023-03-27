class AppConfig {
    public isDevelopment = true;
    public isProduction = false;
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "holidays";
    public port = 3001;
}

const appConfig =  new AppConfig();

export default appConfig;