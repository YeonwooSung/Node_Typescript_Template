import fs from 'fs';

export const INVALID_FILE_PATH = "not_exist";

export const readJsonFile = (path: string) => {
    if (!fs.existsSync(path)) {
        // file not exist
        return null;
    }
    let rawdata = fs.readFileSync(path);        // read file
    let json = JSON.parse(rawdata.toString());  // parse json
    return json;
};

export const writeJsonFileSync = (path: string, json: object) => {
    // write json to file
    let obj_str:string = JSON.stringify(json, null, 2);
    fs.writeFileSync(path, obj_str);
}

export const writeJsonFileAsync = (path: string, json: object) => {
    // write json to file
    let obj_str:string = JSON.stringify(json, null, 2);
    fs.writeFile(path, obj_str, (err: any) => {
        if (err) console.log(err);
    });
}

export const validateFilePath = (path: string) => {
    return fs.existsSync(path) ? path : INVALID_FILE_PATH;
}
