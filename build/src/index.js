"use strict";
/*
Exercício 1
REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
let pessoas = 0;
let refrigeranteMl = 0;
let qtdGarrafa = 0;
const garrafaMl = 2000;
pessoas = readline_sync_1.default.questionInt("Digite a quantidade de pessoas: ");
refrigeranteMl = pessoas * 300;
qtdGarrafa = Math.ceil(refrigeranteMl / garrafaMl);
console.log(qtdGarrafa + " Garrafas devem ser compradas");
