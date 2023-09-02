PALLETTES = [
    {
        name: "Vacancy",
        ball: "109,162,203",
        strike: "254,94,135",
        one: "225,218,205",
        two: "244,140,41",
        three: "155,210,164",
        four: "78,75,72",
        five: "204,132,95",
        six: "255,246,239",
        seven: "126,84,54"
    },
    {
        name: "Zuka",
        ball: "43, 169, 180",
        strike: "196, 93, 159",
        one: "147, 212, 181",
        two: "227, 154, 172",
        three: "240, 218, 177",
        four: "240, 246, 232",
        five: "100, 97, 194",
        six: "34, 16, 57",
        seven: "99, 75, 125"
    },
    {
        name: "Raincoats",
        ball: "254,186,62",
        strike: "237,136,69",
        one: "122,193,209",
        two: "216,95,117",
        three: "245,228,74",
        four: "30,36,59",
        five: "219,233,245",
        six: "147,168,164",
        seven: "211,207,197"
    },
    {
        name: "Beachset",
        ball: "115,136,153",
        strike: "246,161,60",
        one: "254,248,103",
        two: "154,93,46",
        three: "246,224,181",
        four: "56,66,72",
        five: "63,38,22",
        six: "190,152,87",
        seven: "252,192,27"
    },
    {
        name: "58th St.",
        ball: "73,148,113",
        strike: "127,227,254",
        one: "82,123,184",
        two: "169,162,163",
        three: "254,186,89",
        four: "167,185,195",
        five: "0,123,158",
        six: "253,240,190",
        seven: "243,27,89"
    },
    {
        name: "Nozawa",
        ball: "145,155,158",
        strike: "234,223,217",
        one: "20,23,31",
        two: "45,43,46",
        three: "1,20,40",
        four: "208,212,215",
        five: "49,68,102",
        six: "182,125,29",
        seven: "87,67,49"
    },
    {
        name: "Vaulted",
        ball: "164,163,159",
        strike: "201,197,190",
        one: "146,141,129",
        two: "158,154,144",
        three: "202,200,194",
        four: "131,125,113",
        five: "192,188,180",
        six: "147,142,130",
        seven: "177,176,174"
    },
    {
        name: "O'Briens",
        ball: "0,242,222",
        strike: "247,179,63",
        one: "125,112,123",
        two: "255,254,255",
        three: "178,92,53",
        four: "210,130,117",
        five: "241,214,195",
        six: "0,148,133",
        seven: "13,8,4"
    },
    {
        name: "Mantle",
        ball: "246,211,1",
        strike: "248,82,20",
        one: "73,69,73",
        two: "213,206,196",
        three: "163,134,98",
        four: "149,160,170",
        five: "227,176,143",
        six: "31,21,21",
        seven: "117,87,62"
    },
    {
        name: "Unicorn",
        ball: "220,64,137",
        strike: "87,176,161",
        one: "57,135,125",
        two: "136,73,100",
        three: "166,149,140",
        four: "8,23,45",
        five: "78,88,106",
        six: "225,221,208",
        seven: "118,185,249"
    },
    {
        name: "Bronx",
        ball: "140,184,81",
        strike: "252,210,147",
        one: "112,153,52",
        two: "207,152,97",
        three: "248,246,241",
        four: "176,109,76",
        five: "242,222,5",
        six: "237,109,74",
        seven: "32,52,78"
    },
]
function setup() {
    createCanvas(612, 828)
    angleMode(DEGREES);
    THEME = PALLETTES[Math.floor(random(0, PALLETTES.length))]
    textFont('Georgia');
    inning = new Inning();
    noLoop();
}

function pitchType() {
    var type = Math.floor(random(1,7))
    switch (type) {
        case 1:
            return 'CURVE'
        case 2:
            return 'SINKER'
        case 3:
            return 'FOUR_SEAM'
        case 4:
            return 'KNUCKLE'
        case 5:
            return 'SLIDER'
        case 6:
            return 'SCREWBALL'
        default:
            return ''
    }
}

function createPitch(type) {
    switch (type) {
        case "CURVE":
            return curveBall()
        case "SINKER":
            return sinker()
        case "FOUR_SEAM":
            return fourSeam()
        case "KNUCKLE":
            return knuckle()
        case "SLIDER":
            return slider()
        case "SCREWBALL":
            return screwBall()
        default:
            return []
    }
}

function curveBall() {
    var pitchSteps = []
    var ballX = random(15, width - 15)
    var ballY = random(0, height - 35)

    for(var x = 1; x < 47; x++){
        if(x < 10) {
            ballX-=2
            ballY-=3
        } else if (x < 20) {
            ballX-=1
            // ballY+=4
        } else if (x < 35) {
            ballX-=1
            ballY+=7
        } else {
            ballY+=9
        }

        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.one, "CURVE", pitchSpeed("CURVE")))
    }
    return pitchSteps
}

function sinker() {
    var pitchSteps = []
    var ballX = random(15, width - 15)
    var ballY = random(15, height - 15)

    for(var x = 1; x < 47; x++){
        if(x < 14) {
            ballX-=3
        } else if(x < 30) {
            ballX-=3
            ballY+=3
        } else {
            ballX-=3
            ballY+=2
        }
        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.two, "SINKER", pitchSpeed("SINKER")))
    }
    return pitchSteps
}

function fourSeam() {
    var pitchSteps = []
    var ballX = random(15, width - 15)
    var ballY = random(15, height - 15)

    for(var x = 1; x < 47; x++){
        if(x < 15) {
            ballX-=3
            ballY+=1
        } else if(x < 35) {
            ballX-=1
            ballY+=2
        } else {
            ballY+=2
        }
        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.three, "FOUR_SEAM", pitchSpeed("FOUR_SEAM")))
    }
    return pitchSteps
}

function knuckle() {
    var pitchSteps = []
    var ballX = random(15, width - 15)
    var ballY = random(15, height - 15)

    for(var x = 1; x < 47; x++){
        if(x < 7) {
            ballX-=2
            ballY+=1
        } else if (x < 15) {
            ballX+=1
            ballY-=1
        } else if (x < 23) {
            ballX-=2
            ballY+=1
        }else if (x < 31) {
            ballX+=1
            ballY-=1
        } else if (x < 39) {
            ballX-=2
            ballY+=2
        } else if (x < 47) {
            ballX+=2
            ballY-=1
        } else {
            ballX-=1
            ballY+=2
        }

        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.four, "KNUCKLE", pitchSpeed("KNUCKLE")))
    }
    return pitchSteps
}

function slider() {
    var pitchSteps = []
    var ballX = random(15, width - 25)
    var ballY = random(15, height - 15)

    for(var x = 1; x < 47; x++){
        if(x < 15) {
            ballX-=2
            ballY+=2
        } else if (x < 30){
            ballY +=3
        } else {
            ballX += 4
            ballY+=3
        }
        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.five, "SLIDER", pitchSpeed("SLIDER")))
    }
    return pitchSteps
}

function screwBall() {
    var pitchSteps = []
    var ballX = random(15, width - 15)
    var ballY = random(0, height - 35)

    for(var x = 1; x < 47; x++){
        if(x < 15) {
            ballX-=2
            ballY-=3
        } else if (x < 20) {
            ballX-=2
            // ballY+=4
        } else if (x < 32) {
            ballX-=3
            ballY+=7
        } else {
            ballX-=5
            ballY+=9
        }

        pitchSteps.push(new PitchStep(ballX, ballY, x, THEME.six, "SCREWBALL", pitchSpeed("SCREWBALL")))
    }
    return pitchSteps
}

const sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis))
}

async function drawPitchSteps(pitchSteps) {
    var color = 250;
    for (let i = 0; i < pitchSteps.length; i++) {
        var pitchStep = pitchSteps[i];
        await sleep(pitchStep.speed);
        pitchStep.display(color, i == pitchSteps.length - 1);
        color -= 5;
    }

    await sleep(75);
}

async function draw() {
    let swapped = false
    background(`rgba(${swapped ? THEME.seven : THEME.six}, ${random(0.5, 1)})`);
    fill(`rgba(${swapped ? THEME.six : THEME.seven}, ${random(0.5, 1)})`);
    stroke('#f0f6e8')
    rect(150, 150, 312, 528)
    stroke(`rgba(${THEME.four}, 0.5)`)
    line(254, 150, 254, 678)
    line(358, 150, 358, 678)
    line(150, 326, 462, 326)
    line(150, 502, 462, 502)

    let outs = 0
    let runners = 0
    for (var atBat of inning.atBats){
        for (var pitch of atBat.pitches) {
            await drawPitchSteps(pitch.pitchSteps)
        }

        var result = atBat.result()

        if (result === 'STRIKEOUT' || result === 'OUT') {
            outs++
            push()
            noStroke()
            fill(`rgba(${THEME.strike}, 0.25)`)
            const strikeoutHeight = height / 3
            switch (outs) {
                case 1:
                    rect(0, 0, width, strikeoutHeight);
                    break;
                case 2:
                    rect(0,strikeoutHeight, width, strikeoutHeight);
                    break;
                default:
                    rect(0, strikeoutHeight * 2, width, strikeoutHeight)
                    break;
            }
            pop()
        }

        if (result === 'WALK' || result === 'HIT') {
            runners++
            push()
            noStroke()
            fill(`rgba(${THEME.ball}, 0.25)`)
            switch (runners) {
                case 1:
                    triangle(width, 0, width, height, width / 2, height / 2)
                    break;
                case 2:
                    triangle(width, 0, 0, 0, width / 2, height / 2)
                    break;
                case 3:
                    triangle(0, 0, 0, height, width / 2, height / 2)
                    break
                default:
                    triangle(0, height, width, height, width / 2, height / 2)
                    break;
            }
            pop()
        }
    }

    inning.displayRecap()

    await sleep(10000)
    clear()
    redraw()
}

function pitchSpeed(type) {
    switch (type) {
        case 'CURVE':
            return Math.floor(random(21,31));
        case 'FOUR_SEAM':
            return Math.floor(random(1,15));
        case 'SINKER':
            return Math.floor(random(15,25));
        case 'KNUCKLE':
            return Math.floor(random(31,41));
        case 'SLIDER':
            return Math.floor(random(11,21));
        case 'SCREWBALL':
            return Math.floor(random(25,35));
        default:
            return 25
    }
}

function pitchResult(x, y, diameter) {
    var xRange = x + (diameter / 2)
    var xRange2 = x - (diameter / 2)
    var yRange = y + (diameter / 2)
    var yRange2 = y - (diameter / 2)
    var swingRandom = Math.floor(random(0, 101))
    var swingResult = Math.floor(random(0, 101))
    var contactResult = Math.floor(random(0, 1001))

    // 32,67,102 (balls) 66,88,266 (strikes)
    if (xRange < 150 || xRange2 > width - 150) {
        if (swingRandom < 16) {
            if (swingResult < 67) {
                if (contactResult < 204) {
                    return { result: 'HIT', color: `rgb(${THEME.three})` }
                }
                return { result: 'OUT', color: `rgb(${THEME.two})` }
            }
            return { result: 'SWINGING_STRIKE', color: `rgb(${THEME.one})` }
        }
        return { result: 'BALL', color: `rgb(${THEME.ball})` }
    } else if (yRange < 150 || yRange2 > height - 150) {
        if (swingRandom < 16) {
            if (swingResult < 67) {
                if (contactResult < 204) {
                    return { result: 'HIT', color: `rgb(${THEME.three})` }
                }
                return { result: 'OUT', color: `rgb(${THEME.two})` }
            }
            return { result: 'SWINGING_STRIKE', color: `rgb(${THEME.one})` }
        }
        return { result: 'BALL', color: `rgb(${THEME.ball})` }
    } else {
        if (swingRandom < 33) {
            if (swingResult < 88) {
                if (contactResult < 532){
                    return { result: 'HIT', color: `rgb(${THEME.three})` }
                }
                return { result: 'OUT', color: `rgb(${THEME.two})` }
            }
            return { result: 'SWINGING_STRIKE', color: `rgb(${THEME.one})` }
        }
        return { result: 'STRIKE', color: `rgb(${THEME.strike})` }
    }
}

class Inning {
    constructor() {
        this.outs = 0
        this.strikeouts = 0
        this.walks = 0
        this.hits = 0
        this.runners = 0
        this.atBats = []

        while(this.outs < 3) {
            var atBat = new AtBat();
            var result = atBat.result();
            this.atBats.push(atBat)

            if (result == 'STRIKEOUT') {
                this.outs++;
                this.strikeouts++;
            } else if (result == 'OUT') {
                this.outs++
            } else if (result == 'HIT') {
                this.hits++
                this.runners++
            } else if (result == 'WALK') {
                this.walks++
                this.runners++
            }
        }
    }

    displayRecap() {
        let runsScored = 0
        if(this.runners > 3) {
            runsScored = this.runners - 3
        }

        textSize(128)
        textAlign(CENTER, CENTER)
        fill(255)
        text(`${THEME.name}\nWalks: ${this.walks}\nHits: ${this.hits}\nK's: ${this.strikeouts}\nRuns: ${runsScored}`, 0, 0, width, height)
    }
}

class AtBat {
    constructor() {
        this.pitches = []
        this.strikes = 0;
        this.balls = 0;
        this.out = false;
        this.hit = false;

        while(this.strikes < 3 && this.balls < 4 && !this.out && !this.hit) {
            var pitch = new Pitch()
            var result = pitch.result()
            this.pitches.push(pitch)
            if (result == 'STRIKE' || result == 'SWINGING_STRIKE') {
                this.strikes++;
            } else if (result == 'BALL') {
                this.balls++;
            } else if (result == 'HIT') {
                this.hit = true;
            } else if (result == 'OUT') {
                this.out = true
            }
        }
    }

    result() {
        if(this.hit) {
            return "HIT"
        }
        if(this.out) {
            return "OUT"
        }
        if(this.strikes === 3) {
            return "STRIKEOUT"
        }
        if (this.balls === 4) {
            return "WALK"
        }

        return "IN_PROGRESS"
    }
}

class Pitch {
    constructor() {
        this.type = pitchType();
        this.speed = pitchSpeed(this.type);
        this.pitchSteps = createPitch(this.type);
    }

    result() {
        var lastStep = this.pitchSteps[this.pitchSteps.length - 1]
        return lastStep.landingSpot().result
    }
}

class PitchStep {
    constructor(x, y, diameter, color, type, speed) {
        this.x = x;
        this.y = y;
        this.diameter = diameter * 1.5;
        this.color = color;
        this.type = type;
        this.speed = speed;
    }

    landingSpot() {
        if (!this.pitchResult) {
            this.pitchResult = pitchResult(this.x, this.y, this.diameter)
        }
        return this.pitchResult
    }

    display(color, last) {
        push()
        stroke(color)
        if (last){
            fill(this.landingSpot().color)
            ellipse(this.x, this.y, this.diameter, this.diameter);
            this.displaySpeed()
        } else {
            fill(`rgb(${this.color})`)
            ellipse(this.x, this.y, this.diameter, this.diameter);
        }
        pop()
    }

    async displaySpeed() {
        var mph = 100 - this.speed;
        var newDiam = (this.diameter * 15) / mph;
        var radius = this.diameter / 2
        let newX;
        let newY;
        push();
        textAlign(CENTER, CENTER)
        textSize(radius)
        fill(65)
        text(mph, this.x - radius, this.y - radius, this.diameter, this.diameter)
        pop();


        await sleep(1000)

        for(let i = 0; i < mph; i++){
            push()
            newX = Math.floor(random(this.x - radius, this.x + radius))
            newY = Math.floor(random(this.y - radius, this.y + radius))
            await sleep(this.speed + 20)
            fill(this.landingSpot().color)
            if(i % 4 == 0) {
                textAlign(CENTER, BOTTOM)
                textSize(radius/5)
                text(this.landingSpot().result, newX, newY, newDiam, newDiam)
            } else if(i % 3 == 0) {
                ellipse(newX, newY, newDiam, newDiam)
            } else if (i % 2 == 0) {
                triangle(newX, newY, newX + newDiam, newY, newX + newDiam / 2, newY - newDiam)
            } else {
                rect(newX, newY, newDiam, newDiam)
            }
            pop()
        }
    }
}