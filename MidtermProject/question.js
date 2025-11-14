function favChar() {
    let Character =
    document.getElementById('character').value;
    let result = document.getElementById("formResult")
    let paragraph = document.getElementById("comment")
    let answer = "";
    switch (Character) {
        //robots!
        case "Amor":
            answer = "Looks can be deceiving...";
            break;
        case "c0nnie":
            answer = "The most levelheaded, good choice!";
            break;
        case "C0nnie":
            answer = "The most levelheaded, good choice!";
            break;
        case "SAI":
            answer = "Everyone loves a morally grey character!";
            break;
        case "N":
            answer = "Get in line buddy.";
            break;
        case "Assistant":
            answer = "Really??? I mean... alright...";
            break;
        //computers!
        case "Aqua":
            answer = "As the number one Aqua fan, I approve.";
            break;
        case "Dav3":
            answer = "Assistant is that you? Just kidding, Dav3's awesome.";
            break;
        case "Ch33se":
            answer = "I've got some bad news for you...";
            break;
        case "002":
            answer = "YOU DON'T EVEN KNOW ANYTHING ABOUT HIM YET!";
            break;
        case "Silva":
            answer = "(Don't tell anyone I told you this, but I actually designed her...)";
            break;
        //humans!
        case "Leo":
            answer = "Grown ass man using :3";
            break;
        case "Victor":
            answer = "Nobody thinks you're cool dude.";
            break;
        case "Amber":
            answer = "As the number one Aqua fan, really?!?!";
            break;
        case "Simon":
            answer = "There's actually no way";
            break;
        case "Nalani":
            answer = "You should see more of her soon!";
            break;
        //easter eggs
        case "Chime":
            answer = "Dude that's my sona... ALSO SHE'S NOT CANON!";
            break;
        case "Yes Man":
            answer = "Shroomsie get off my website.";
            break;
        case "Radon":
            answer = "WRONG ACCOUNT!!!";
            break;
        case "Gerson":
            answer = "As long as we don't give up, we can save them all.";
            break;
        case "Bacon":
            answer = "That's right everybody... it's your favorite boy...";
            break;
        case "/01":
            answer = "DO NOT LET AQUA FIND OUT!!!";
            break;
        case "01":
            answer = "DO NOT LET AQUA FIND OUT!!!";
            break;
        case "Noodle":
            answer = "Don't trust her...";
            break;
        case "Shroomsie":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "Shr00msi3":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "Shr00msie":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "Jimmy":
            answer = "That makes you the #1 amor hater by default";
            break;
        case "The Lunch Machine":
            answer = "I'm guessing you're a joe addict...";
            break;
        case "Cup":
            answer = "YOU GET IT!!!";
            break;
        default:
            answer = "Character not recognized! Please don't forget the numbers and capitalization!";
            break;
    }
paragraph.innerHTML = answer;
result.style.display = "block";

}


