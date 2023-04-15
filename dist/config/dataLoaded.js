"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let config = { dataLoaded: false };
const configFile = path_1.default.join(__dirname, "../config/config.json");
try {
    const data = fs_1.default.readFileSync(configFile);
    config = JSON.parse(data.toString());
}
catch (error) {
    console.error(`Error reading config file: ${error}`);
}
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!config.dataLoaded) {
        return false;
    }
    else {
        return true;
    }
});
const setLoaded = (value) => {
    config.dataLoaded = value;
    fs_1.default.writeFileSync(configFile, JSON.stringify(config));
};
exports.default = {
    loadData,
    setLoaded,
};
