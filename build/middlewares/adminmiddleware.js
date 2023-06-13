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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminnverify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtSecret = process.env.JWT_KEY;
        if (jwtSecret) {
            const decode = jsonwebtoken_1.default.verify(req.headers.authorization, jwtSecret);
            const isAdmin = decode.admin;
            if (isAdmin) {
                next();
            }
        }
        else {
            throw new Error("no jwt");
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = adminnverify;
