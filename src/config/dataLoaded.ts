import fs from "fs";
import path from "path";

interface Config {
  dataLoaded: boolean;
}

let config: Config = { dataLoaded: false };
const configFile = path.join(__dirname, "../config/config.json");

try {
  const data = fs.readFileSync(configFile);
  config = JSON.parse(data.toString());
} catch (error) {
  console.error(`Error reading config file: ${error}`);
}

const loadData = async () => {
  if (!config.dataLoaded) {
    return false;
  } else {
    return true;
  }
};

const setLoaded = (value: boolean) => {
  config.dataLoaded = value;
  fs.writeFileSync(configFile, JSON.stringify(config));
};

export default {
  loadData,
  setLoaded,
};
