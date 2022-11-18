
function updatePostion(teamInfo, teamSprites) {
    for (let i = 0; i < teamInfo.tanks.length; i++) {
        t = teamInfo.tanks[i];
        teamSprites[i].x = teamInfo.tanks[i].x * blockWidth + blockWidth;
        teamSprites[i].y = teamInfo.tanks[i].y * blockHeight + blockHeight;
    }
}

function InitialDrawing(teamInfo, teamSprites) {
    for (let i = 0; i < teamInfo.tanks.length; i++) {
        t = teamInfo.tanks[i];
        teamSprites[i] = PIXI.Sprite.from(teamInfo.spriteImage);
        teamSprites[i].x = teamInfo.tanks[i].x * blockWidth + blockWidth;
        teamSprites[i].y = teamInfo.tanks[i].y * blockHeight + blockHeight;
        app.stage.addChild(teamSprites[i]);
    }
}

function drawWalls() {
    for (let y = blockHeight; y < height - blockHeight; y = y + blockHeight) {

        //left wall
        let tmpSprite = PIXI.Sprite.from('images/brick.png');
        tmpSprite.x = 0;
        tmpSprite.y = y;
        app.stage.addChild(tmpSprite);

        //right wall
        tmpSprite = PIXI.Sprite.from('images/brick.png');
        tmpSprite.x = width - blockWidth;
        tmpSprite.y = y;
        app.stage.addChild(tmpSprite);

    }

    // bottom border wall
    for (let x = 0; x < width; x = x + blockWidth) {
        const tmpSprite = PIXI.Sprite.from('images/brick.png');
        tmpSprite.x = x;
        tmpSprite.y = height - blockHeight;
        app.stage.addChild(tmpSprite);
    }

    // Top border wall
    for (let x = 0; x < width; x = x + blockWidth) {
        const tmpSprite = PIXI.Sprite.from('images/brick.png');
        tmpSprite.x = x;
        tmpSprite.y = 0;
        app.stage.addChild(tmpSprite);
    }
}

function drawFloor() {
    for (x = blockWidth; x < width - blockWidth; x = x + blockWidth) {
        for (y = blockHeight; y < height - blockHeight; y = y + blockHeight) {
            const tmpSprite = PIXI.Sprite.from('images/floor.png');
            tmpSprite.x = x;
            tmpSprite.y = y;
            app.stage.addChild(tmpSprite);
        }
    }
}