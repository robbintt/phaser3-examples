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

    var graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

    var line = new Phaser.Geom.Line(400, 300, 550, 300);

    var text = this.add.text(50, 50, '');

    this.input.on('pointermove', function (pointer) {

        line.x2 = pointer.x;
        line.y2 = pointer.y;

        redraw();
    });

    redraw();

    function redraw()
    {
        graphics.clear();

        graphics.strokeLineShape(line);

        var normalAngle = Phaser.Geom.Line.NormalAngle(line);

        graphics.lineStyle(2, 0x00aa00);
        graphics.lineBetween(400, 300, 400 + Math.cos(normalAngle) * 100, 300 + Math.sin(normalAngle) * 100);

        text.setText("Line Normal Angle: " + Phaser.Math.RadToDeg(normalAngle));
    }
}
