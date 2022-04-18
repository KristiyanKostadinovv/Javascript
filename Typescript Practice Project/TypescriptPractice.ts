//autobind Decorator
function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
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
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descrInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.formElement.id = "user-input";
        this.titleInputElement = this.formElement.querySelector("#title") as HTMLInputElement;
        this.descrInputElement = this.formElement.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.formElement.querySelector("#people") as HTMLInputElement;
        this.configure();
        this.attach();
    }

    private clearInput(){
        this.titleInputElement.value = "";
        this.descrInputElement.value = "";
        this.peopleInputElement.value = "";
    }

    private gatherUI(): [string, string, number] | void {
        let title = this.titleInputElement.value;
        let descr = this.descrInputElement.value;
        let people = this.peopleInputElement.value;

        if (title.length === 0 && descr.length === 0 && people.length === 0 ) {
            alert("Invalid INPUT. Please enter real values");
            return;
        } else {
            return [title, descr, +people];
        }
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUI();
        if (Array.isArray(userInput)) {
            const [title, descr, people] = userInput;
            console.log(title, descr, people);
        }
        this.clearInput();
    }

    private configure() {
        this.formElement.addEventListener("submit", this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}

const projectInput = new ProjectInput();