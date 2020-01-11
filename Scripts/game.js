// IIFE - Immediately Invoked Function Expression
// what this means is an IIFE is like an 
// Anonymous Self-Executing Function
(function () {
    let canvas = document.getElementById("canvas");
    let stage;
    let helloLabel;
    function Start() {
        console.log("Game Started...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // FPS = 60
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("Starting Main...");
        helloLabel = new createjs.Text("Hello, World!", "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredLineHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map