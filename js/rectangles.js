import { Particles } from 'svg-particles-alpha';

const svg = `
    <svg
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
    >
        <g>
            <g>
                <path
                    d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667v298.667C0,411.221,4.779,416,10.667,416h490.667
   c5.888,0,10.667-4.779,10.667-10.667V106.667C512,100.779,507.221,96,501.333,96z M490.667,394.667H21.333V117.333h469.333
   V394.667z"
                />
            </g>
        </g>
    </svg>`;
const rectanglesContainer = document.querySelector('#rectangles');
const rectangles = new Particles(rectanglesContainer, svg, {
    // Size
    minWidth: 100,
    maxWidth: 200,

    // Color
    r: 0,
    g: 200,
    b: 200,
    minOpacity: 0.8,
    maxOpacity: 1,

    // Speed
    minSpeed: 50,
    maxSpeed: 75,

    // Duration
    minDuration: 500,
    maxDuration: 1000,

    // Max particles
    maxParticles: 50,

    // Timeout
    timeout: 100,
});

rectangles.start();

setTimeout(() => rectangles.stop(), 10000);
