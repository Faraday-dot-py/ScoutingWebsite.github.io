var val = 0;

class ButtonHandler {
    
    static plus() {
        val += 1;
        console.log(this.getVal());
    }

    static minus(){
        val -= 1;
        console.log(this.getVal());
    }

    static getVal(){
      return val;
    }
 }