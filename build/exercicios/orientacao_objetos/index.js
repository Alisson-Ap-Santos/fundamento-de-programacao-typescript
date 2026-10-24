"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
let guitarra = new Produto_1.default();
guitarra.nome = "Guitarra";
guitarra.preco = 1500;
console.log(guitarra);
