import xml2js from 'xml2js';

export default async function parseXml_async(xml_str:string):Promise<any> {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml_str, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
