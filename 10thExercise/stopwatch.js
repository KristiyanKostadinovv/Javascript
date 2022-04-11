class StopWatch {

    startTime;
    endTime;
    isRunning = false;
    duration = 0;


    start() {
        if (this.isRunning) {
            throw new Error("Timer already started");
        }

        this.isRunning = true;
        this.startTime = new Date();

    }

    stop() {
        if (!this.isRunning) {
            throw new Error("Timer is not started");
        }
        this.isRunning = false;
        this.endTime = new Date();
        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration = this.duration + seconds;
    }

    durationn() {
        return this.duration;
    }

    reset() {
        this.duration = 0;
        this.startTime = null;
        this.endTime = null;
        this.isRunning = false;
    }
}

const timer = new StopWatch();
timer.start();

setTimeout(function (){
    timer.stop();
    timer.durationn();
}, 3000);


