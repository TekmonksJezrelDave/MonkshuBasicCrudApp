/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "sample";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;

export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, APP_NAME,
    MESSAGE_HTML: APP_PATH + "/message.html",
    RANDOM_HTML: APP_PATH + "/random.html",
    CRUD_HTML: APP_PATH + "/crud.html",

    SESSION_NOTE_ID: "com_monkshu_ts",

    API_MESSAGE: `${BACKEND}/apis/message`,
    API_RANDOM: `${BACKEND}/apis/random`,
    API_CRUD: `${BACKEND}/apis/crud`,
    API_ADD: `${BACKEND}/apis/addUser`,
    API_GET: `${BACKEND}/apis/getUsers`,
    API_VIEW: `${BACKEND}/apis/viewUser`,
    API_UPDATE: `${BACKEND}/apis/updateUser`,
    API_DELETE: `${BACKEND}/apis/deleteUser`,


    USERID: "id",
    USER_ROLE: "user",
    GUEST_ROLE: "guest",
    PERMISSIONS_MAP: {
        user: [APP_PATH + "/message.html", $$.MONKSHU_CONSTANTS.ERROR_THTML],
        guest: [APP_PATH + "/random.html", APP_PATH + "/crud.html" , APP_PATH + "/message.html", $$.MONKSHU_CONSTANTS.ERROR_THTML]
    },
    API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
    KEY_HEADER: "X-API-Key"
}
