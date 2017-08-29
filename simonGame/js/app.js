$(document).ready(() => {

    var sounds = [];
    // Assign mp3's to array with num corresponding to colors
    sounds[0] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    sounds[1] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    sounds[2] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    sounds[3] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

    var switchOn = false;

    $(".toggle").on("click", () => {
        // If on, then switch off and reset game
        if (switchOn) {
            $(".count").text("--")
            gameApp.reset();
        }
        // Toggle display and switch CSS classes
        switchOn = !switchOn;
        $(this).toggleClass("toggle-on");
        $(".count").toggleClass("count-on");
    });
    // Start new game on button click if switch on
    $(".start").on("click", () => {
        if (switchOn) {
            $(".btn").css("cursor", "pointer")
            newGame();
        }
    });

    $(".strict").on("click", () => {
        if (switchOn) {
            $(".light").toggleClass("light-on")
        }
    });

    const newGame = () => {
        // Flash symbol, start new game, and have comp take turn
        flashAlert("--");
        gameApp.reset();
        compTurn();
    }

    const flashAlert = message => {
        // Use recursive function to loop through
        var i = 0;

        let flashLoop = () => {
            // Delay running each iteration of the loop
            setTimeout(() => {
                $(".count").removeClass("count-on");
                $(".count").text(message);
                i++;
                // Within the loop, delay the toggle of the diplay class
                setTimeout(() => {
                    $(".count").addClass("count-on");
                }, 250);
                // Rerun if true, else when done update the count
                if (i < 3) {
                    flashLoop();
                } else {
                    displayCount();
                }
            }, 500);
        }
        flashLoop();
    }
    // Create new object for storing game variables
    var gameApp = {};
    // Runs when new game is started to assign initial variables
    gameApp.reset = () => {
        this.moves = [];
        this.count = 0;
        this.index = 0;
        this.running = true;
        this.lock = false;
        this.strict = false;
    }

    const compTurn = () => {
        // On comp turn, lock the gameboard, start loop at 0, increase count, and push
        // random color to moves array
        gameApp.lock = true;
        gameApp.index = 0;
        gameApp.count++;
        gameApp
            .moves
            .push(Math.floor(Math.random() * 4));
        // Delay displaying result for a seconc
        setTimeout(() => {
            displayMoves();
        }, 1000)
    }

    const displayMoves = () => {

        var i = 0;

        let displayLoop = () => {
            setTimeout(() => {
                // Assign i'th entry in moves array to variable
                var move = gameApp.moves[i];
                // Play corresponding sound
                sounds[move].play();
                // Light up the color with matching ID
                $("#" + move).addClass('light-up');
                setTimeout(function () {
                    $("#" + move).removeClass('light-up');
                }, 500);
                // Iterate by one through the moves array
                i++
                // Rerun function for each entry
                if (i < gameApp.moves.length) {
                    displayLoop();
                } else {
                    // Unlock for player once comp done
                    gameApp.lock = false;
                }
            }, 1000);
        }
        displayLoop();
    }

    const displayCount = () => {
        // If less than 10, add a leading 0. Display current turn
        var tens = (gameApp.count < 10)
            ? "0"
            : "";
        $("#turn").text(tens + gameApp.count.toString());
    }

    $(".btn").on("click", () => {
        // Game must be unlocked
        if (!gameApp.lock) {
            // Clicked button ID assigned to variable
            var clickedBtn = $(this).attr("id");
            $("#" + clickedBtn).addClass('light-up');
            setTimeout(function () {
                $("#" + clickedBtn).removeClass('light-up');
            }, 250);
            // Compare clicked button with array value and if matched, advance to next entry
            // in moves array
            var correctBtn = gameApp
                .moves[gameApp.index]
                .toString();
            if (clickedBtn === correctBtn) {
                gameApp.index++;
                // Player wins if 15 correct moves!
                if (gameApp.index === 15) {
                    flashAlert("W");
                    $(".btn").addClass('light-up')
                    setTimeout(function () {
                        $(".btn").removeClass('light-up');
                    }, 250);
                    gameApp.reset();
                }
                // If not matched, game over and reset
            } else if (clickedBtn !== correctBtn) {
                flashAlert("!!");
                gameApp.reset();
            }
            // When player matches all current moves, have comp take another turn
            if (gameApp.index === gameApp.moves.length) {
                displayCount();
                compTurn();
            }
        }
    });
});