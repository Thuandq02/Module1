class mobile {
    constructor(name) {
        this.name = name;
        this.battery = battery;
        this.draft = '';
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }
    Ison(){
       return this.status;
    }
    turnOff(){
        this.status = false;
    }
    changBatterry(){
        if (this.battery<100){
            this.battery += 1;

        }
    }
    writeMsg(message){
        this.message = message;
    }
    takeMessage(){
        this.takeMessage = message;
    }
    sendMessage(phone){
        phone.inbox.push(message);
        this.outbox.push(message);
    }
}