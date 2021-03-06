"use strict";
var applicationSettingsModule = require("application-settings");
var TNS_OAUTH_KEY = "TNS_OAUTH_KEY";
var TnsOAuthTokenCache = (function () {
    function TnsOAuthTokenCache() {
    }
    TnsOAuthTokenCache.hasToken = function () {
        return applicationSettingsModule.hasKey(TNS_OAUTH_KEY);
    };
    TnsOAuthTokenCache.getToken = function () {
        if (applicationSettingsModule.hasKey(TNS_OAUTH_KEY)) {
            var trStr = applicationSettingsModule.getString(TNS_OAUTH_KEY);
            var tr = JSON.parse(trStr);
            tr.accessTokenExpiration = new Date(tr.accessTokenExpiration.toString());
            tr.refreshTokenExpiration = new Date(tr.refreshTokenExpiration.toString());
            return tr;
        }
        else
            return null;
    };
    TnsOAuthTokenCache.setToken = function (token) {
        applicationSettingsModule.setString(TNS_OAUTH_KEY, JSON.stringify(token));
    };
    TnsOAuthTokenCache.removeToken = function () {
        applicationSettingsModule.remove(TNS_OAUTH_KEY);
    };
    return TnsOAuthTokenCache;
}());
exports.TnsOAuthTokenCache = TnsOAuthTokenCache;
