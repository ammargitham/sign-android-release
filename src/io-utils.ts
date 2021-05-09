// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.findReleaseFile = exports.getReleaseFile = void 0;
import * as fs_1 from 'fs';

export function getReleaseFile(files) {
    if (files.length > 0) {
        return files;
    }
}    

export function findReleaseFile(releaseDir) {
    const releaseFiles = fs_1.readdirSync(releaseDir, { withFileTypes: true })
        .filter(item => !item.isDirectory())
        .filter(item => item.name.endsWith(".apk") || item.name.endsWith(".aab"));
    console.log("Found " + releaseFiles.length + " release files.");
    return getReleaseFile(releaseFiles);
}