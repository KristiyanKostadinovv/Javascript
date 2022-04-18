"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//autobind Decorator
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFunc = originalMethod.bind(this);
            return boundFunc;
        }
    };
    return adjDescriptor;
}
//class ProjectInput
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = "user-input";
        this.titleInputElement = this.formElement.querySelector("#title");
        this.descrInputElement = this.formElement.querySelector("#description");
        this.peopleInputElement = this.formElement.querySelector("#people");
        this.configure();
        this.attach();
    }
    clearInput() {
        this.titleInputElement.value = "";
        this.descrInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    gatherUI() {
        let title = this.titleInputElement.value;
        let descr = this.descrInputElement.value;
        let people = this.peopleInputElement.value;
        if (title.length === 0 && descr.length === 0 && people.length === 0) {
            alert("Invalid INPUT. Please enter real values");
            return;
        }
        else {
            return [title, descr, +people];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUI();
        if (Array.isArray(userInput)) {
            const [title, descr, people] = userInput;
            console.log(title, descr, people);
        }
        this.clearInput();
    }
    configure() {
        this.formElement.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
