class Component {
    constructor(hostElId, insertBefore = false) {
        if (hostElId) {
            this.hostEl = document.getElementById(hostElId);
        } else {
            this.hostEl = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) {

            this.element.remove();
            //this.element.parentElement.removeChild(this.element);
        }

    }

    attach() {
        this.hostEl.insertAdjacentElement(this.insertBefore ? "afterend" : "beforeend", this.element);
        //document.body.append(this.element);
    }
}


class Tools extends Component {

    constructor(closeNotifierFunc) {
        super("active-projects", true);
        this.closeNotifierHandler = closeNotifierFunc;
        this.create();
    }

    closeTool = () => {
        this.detach();
        this.closeNotifierHandler();
    }

    create() {
        const toolEl = document.createElement("div");
        toolEl.className = "card";
        toolEl.textContent = "DUMMY";
        toolEl.addEventListener("click", this.closeTool); //this.detach.bind(this)
        this.element = toolEl;
    }


}

class DOMHelper {
    static clearEventElements(element) {
        const cloneElement = element.cloneNode(true);
        element.replaceWith(cloneElement);
        return cloneElement;
    }

    static moveElement(elId, newDestSelector) {
        const element = document.getElementById(elId);
        const destElement = document.querySelector(newDestSelector);
        destElement.append(element);
    }
}

class ProjectItem {
    hasActiveTool = false;

    constructor(id, updateProjectListFunc) {
        this.id = id;
        this.updateProjectListHandler = updateProjectListFunc;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn();
    }


    showMoreInfo() {

        if (this.hasActiveTool) {
            return;
        }

        const tooltip = new Tools(() => {
            this.hasActiveTool = false;
        });
        tooltip.attach();
        this.hasActiveTool = true;
    }

    connectMoreInfoBtn() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector("button:first-of-type");
        moreInfoBtn.addEventListener("click", this.showMoreInfo);
    }

    connectSwitchBtn(type) {
        const btnElement = document.getElementById(this.id);
        let btnSwitch = btnElement.querySelector("button:last-of-type");
        btnSwitch = DOMHelper.clearEventElements(btnSwitch);
        btnSwitch.textContent = type === "active" ? "Finish" : "Activate";
        btnSwitch.addEventListener("click", this.updateProjectListHandler.bind(null, this.id));
    }

    update(updateProjectListFunc, type) {
        this.updateProjectListHandler = updateProjectListFunc;
        this.connectSwitchBtn(type);
    }

}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const items = document.querySelectorAll(`#${type}-projects li`);
        console.log(items);
        for (const item of items) {
            this.projects.push(new ProjectItem(item.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);

    }

    setSwitchHandler(switchFunctionHandler) {
        this.switchHandler = switchFunctionHandler;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        /*
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        this.projects.splice(projectIndex, 1);
        */

        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjects = new ProjectList("active");
        const finishedProjects = new ProjectList("finished");
        activeProjects.setSwitchHandler(finishedProjects.addProject.bind(finishedProjects));
        finishedProjects.setSwitchHandler((activeProjects.addProject.bind(activeProjects)));
    }
}

App.init();