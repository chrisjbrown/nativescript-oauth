"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var auth_helper_1 = require("./auth-helper");
var AuthHelperGoodreads = (function (_super) {
    __extends(AuthHelperGoodreads, _super);
    function AuthHelperGoodreads(clientId, clientSecret, scope) {
        var _this = _super.call(this) || this;
        var scopeStr = scope.join('%20');
        _this.credentials = {
            authority: 'https://www.goodreads.com/dialog',
            tokenEndpointBase: 'https://graph.goodreads.com',
            authorizeEndpoint: '/oauth',
            tokenEndpoint: '/v2.3/oauth/access_token',
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: 'https://www.goodreads.com/connect/login_success.html',
            scope: scopeStr
        };
        return _this;
    }
    AuthHelperGoodreads.prototype.logout = function (successPage) {
        var cookieDomains = [".goodreads.com"];
        return this._logout(successPage, cookieDomains);
    };
    return AuthHelperGoodreads;
}(auth_helper_1.AuthHelper));
exports.AuthHelperGoodreads = AuthHelperGoodreads;
