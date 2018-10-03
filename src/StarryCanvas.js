import React, { PureComponent } from 'react';
import Particle from './Particle';
import { lineToAngle, randomRange, degreesToRads } from './Helpers';

export default class StarryCanvas extends PureComponent {
    constructor(props) {
        super(props);

        const canvas = React.createRef();

        this.state = {
            canvas,
            context: null,
            width: null,
            height: null,
            stars: [],
            shootingStars: [],
            layers: [
                { speed: 0.0, scale: 0.2, count: 320 },
                { speed: 0.0, scale: 0.5, count: 50 },
                { speed: 0.0, scale: 0.75, count: 10 }
            ],
            starsAngle: 145,
            shootingStarSpeed: {
                min: 5,
                max: 12
            },
            shootingStarOpacityDelta: 0.01,
            trailLengthDelta: 0.01,
            shootingStarEmittingInterval: 2000,
            shootingStarLifeTime: 350,
            maxTrailLength: 300,
            starBaseRadius: 2,
            shootingStarRadius: 3,
            paused: false
        };

        this.start = this.start.bind(this);
        this.update = this.update.bind(this);
        this.createShootingStar = this.createShootingStar.bind(this);
        this.createStars = this.createStars.bind(this);
    }

    start() {
        const canvas = this.state.canvas.current;
        const context = canvas.getContext('2d');
        const width = (canvas.width = window.innerWidth);
        const height = (canvas.height = window.innerHeight);

        this.setState(
            {
                context,
                width,
                height
            },
            () => {
                this.update();

                setInterval(() => {
                    if (this.state.paused) return;
                    this.createShootingStar();
                }, this.state.shootingStarEmittingInterval);

                window.onfocus = () => this.setState({ paused: false });

                window.onblur = () => this.setState({ paused: true });
            }
        );

        this.createStars();
    }

    createStars() {
        const {
            width,
            height,
            layers,
            starBaseRadius,
            starsAngle
        } = this.state;

        for (let j = 0; j < layers.length; j += 1) {
            const layer = layers[j];
            for (let i = 0; i < layer.count; i += 1) {
                var star = new Particle(
                    randomRange(0, width + 50),
                    randomRange(-50, height),
                    0,
                    0
                );
                star.radius = starBaseRadius * layer.scale;
                star.setSpeed(layer.speed);
                star.setHeading(degreesToRads(starsAngle));
                this.state.stars.push(star);
            }
        }
    }

    createShootingStar() {
        const {
            width,
            height,
            shootingStarSpeed,
            starsAngle,
            shootingStarRadius
        } = this.state;

        const shootingStar = new Particle(
            randomRange(width / 2, width),
            randomRange(0, height / 2),
            0,
            0
        );
        shootingStar.setSpeed(
            randomRange(shootingStarSpeed.min, shootingStarSpeed.max)
        );
        shootingStar.setHeading(degreesToRads(starsAngle));
        shootingStar.radius = shootingStarRadius;
        shootingStar.opacity = 0;
        shootingStar.trailLengthDelta = 0;
        shootingStar.isSpawning = true;
        shootingStar.isDying = false;
        this.state.shootingStars.push(shootingStar);
    }

    killShootingStar(shootingStar) {
        const { shootingStarLifeTime } = this.props;

        setTimeout(() => {
            shootingStar.isDying = true;
        }, shootingStarLifeTime);
    }

    update() {
        const {
            stars,
            shootingStars,
            width,
            height,
            paused,
            context,
            shootingStarOpacityDelta,
            trailLengthDelta
        } = this.state;

        if (!paused) {
            context.clearRect(0, 0, width, height);
            context.fillStyle = 'transparent';
            context.fillRect(0, 0, width, height);
            context.fill();

            for (let i = 0; i < stars.length; i += 1) {
                const star = stars[i];
                star.update();
                this.drawStar(star);
                if (star.x > width) {
                    star.x = 0;
                }
                if (star.x < 0) {
                    star.x = width;
                }
                if (star.y > height) {
                    star.y = 0;
                }
                if (star.y < 0) {
                    star.y = height;
                }
            }

            for (let i = 0; i < shootingStars.length; i += 1) {
                const shootingStar = shootingStars[i];
                if (shootingStar.isSpawning) {
                    shootingStar.opacity += shootingStarOpacityDelta;
                    if (shootingStar.opacity >= 1.0) {
                        shootingStar.isSpawning = false;
                        this.killShootingStar(shootingStar);
                    }
                }
                if (shootingStar.isDying) {
                    shootingStar.opacity -= shootingStarOpacityDelta;
                    if (shootingStar.opacity <= 0.0) {
                        shootingStar.isDying = false;
                        shootingStar.isDead = true;
                    }
                }
                shootingStar.trailLengthDelta += trailLengthDelta;

                shootingStar.update();
                if (shootingStar.opacity > 0.0) {
                    this.drawShootingStar(shootingStar);
                }
            }

            //Delete dead shooting shootingStars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                if (shootingStars[i].isDead) {
                    shootingStars.splice(i, 1);
                }
            }
        }
        requestAnimationFrame(this.update);
    }

    drawStar(star) {
        const { context } = this.state;
        context.fillStyle = 'rgb(255, 255, 255)';
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fill();
    }

    drawShootingStar(p) {
        const { context, maxTrailLength } = this.state;

        const x = p.x,
            y = p.y,
            currentTrailLength = maxTrailLength * p.trailLengthDelta,
            pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

        context.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
        var starLength = 5;
        context.beginPath();
        context.moveTo(x - 1, y + 1);

        context.lineTo(x, y + starLength);
        context.lineTo(x + 1, y + 1);

        context.lineTo(x + starLength, y);
        context.lineTo(x + 1, y - 1);

        context.lineTo(x, y + 1);
        context.lineTo(x, y - starLength);

        context.lineTo(x - 1, y - 1);
        context.lineTo(x - starLength, y);

        context.lineTo(x - 1, y + 1);
        context.lineTo(x - starLength, y);

        context.closePath();
        context.fill();

        //trail
        context.fillStyle = 'rgba(255, 221, 157, ' + p.opacity + ')';
        context.beginPath();
        context.moveTo(x - 1, y - 1);
        context.lineTo(pos.x, pos.y);
        context.lineTo(x + 1, y + 1);
        context.closePath();
        context.fill();
    }

    componentDidMount() {
        setTimeout(this.start, 200);
    }

    render() {
        return <canvas id="starfield" ref={this.state.canvas} />;
    }
}
