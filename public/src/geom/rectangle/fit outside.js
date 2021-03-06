var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics({ fillStyle: { color: 0x0000aa }, lineStyle: { color: 0xaa0000 } });

    var rectangles = [];

    for(var x = 0; x < 4; x++)
    {
        rectangles[x] = [];
        for(var y = 0; y < 3; y++)
        {
            var width = Phaser.Math.Between(50, 100);
            var height = Phaser.Math.Between(50, 100);

            rectangles[x][y] = new Phaser.Geom.Rectangle(0, 0, width, height);
            Phaser.Geom.Rectangle.CenterOn(rectangles[x][y], x * 200, y * 200);
        }
    }

    var rect = new Phaser.Geom.Rectangle(0, 0, 150, 100);

    this.input.on('pointermove', function (pointer) {

        var x = Math.floor(pointer.x / 200);
        var y = Math.floor(pointer.y / 200);

        Phaser.Geom.Rectangle.FitOutside(rect, rectangles[x][y]);

        redraw();
    });

    redraw();

    function redraw ()
    {
        graphics.clear();

        graphics.fillRectShape(rect);

        for(var x = 0; x < 4; x++)
        {
            for(var y = 0; y < 3; y++)
            {
                graphics.strokeRectShape(rectangles[x][y]);
            }
        }
    }
}
