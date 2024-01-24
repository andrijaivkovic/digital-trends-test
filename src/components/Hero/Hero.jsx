import LottieAnimation from "../LottieAnimation/LottieAnimation";

const ANIMATION_BASE_DELAY = 150;

const WAVEFORM_ANIMATION_DELAY = ANIMATION_BASE_DELAY + 800;
const CREDITS_ANIMATION_DELAY = ANIMATION_BASE_DELAY + 1250;
const SCROLL_INDICATOR_ANIMATION_DELAYS = [
  ANIMATION_BASE_DELAY + 350,
  ANIMATION_BASE_DELAY + 1750,
];

const Hero = () => {
  return (
    <article className="hero">
      <LottieAnimation
        className="hero__text-animation-container"
        path={
          "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/hero_text.json"
        }
        loop={false}
        autoplay={false}
        delay={ANIMATION_BASE_DELAY}
      />
      <LottieAnimation
        style={{ animationDelay: `${WAVEFORM_ANIMATION_DELAY}ms` }}
        className="hero__waveform-animation-container"
        path={
          "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/hero_waveform.json"
        }
        loop={true}
        autoplay={false}
        delay={0}
      />
      <div
        style={{ animationDelay: `${CREDITS_ANIMATION_DELAY}ms` }}
        className="hero__credits"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="298.704"
          height="88.367"
          viewBox="0 0 298.704 88.367"
        >
          <defs>
            <clipPath id="a">
              <rect width="298.704" height="88.367" fill="#fff" />
            </clipPath>
          </defs>
          <g transform="translate(0 0)" clipPath="url(#a)">
            <path
              d="M0,0H10.8Q17.877.175,21.5,4.022T25.133,15.6q0,7.738-3.628,11.581T10.8,31.208H0ZM2.973,28.674H9.311a20.453,20.453,0,0,0,5.791-.722,9.247,9.247,0,0,0,4-2.295,9.449,9.449,0,0,0,2.317-4.064,21.184,21.184,0,0,0,.743-5.988,21.184,21.184,0,0,0-.743-5.988A9.449,9.449,0,0,0,19.1,5.552a9.247,9.247,0,0,0-4-2.295,20.453,20.453,0,0,0-5.791-.722H2.973Z"
              transform="translate(0 -0.001)"
              fill="#fff"
            />
            <path
              d="M23.506.036h2.753v4.37H23.506Zm0,8.61h2.753V31.2H23.506Z"
              transform="translate(5.953 0.008)"
              fill="#fff"
            />
            <path
              d="M49.211,27.757a17.342,17.342,0,0,1-.546,4.546,8.79,8.79,0,0,1-1.726,3.409,7.529,7.529,0,0,1-3.082,2.142A12.846,12.846,0,0,1,39.2,38.6,13.954,13.954,0,0,1,35.88,38.2a9.428,9.428,0,0,1-2.908-1.224,7.267,7.267,0,0,1-2.142-2.119,6.317,6.317,0,0,1-.983-3.081H32.6a4.9,4.9,0,0,0,.852,2.119,5.125,5.125,0,0,0,1.53,1.377,6.835,6.835,0,0,0,1.989.764,10.408,10.408,0,0,0,2.228.241q3.846,0,5.552-2.187t1.7-6.337V24.7H46.37a8,8,0,0,1-2.841,3.366A7.551,7.551,0,0,1,39.2,29.331a10.91,10.91,0,0,1-4.632-.9,8.607,8.607,0,0,1-3.17-2.47,10.056,10.056,0,0,1-1.813-3.693,17.37,17.37,0,0,1-.569-4.524,14.041,14.041,0,0,1,.678-4.391,10.9,10.9,0,0,1,1.966-3.629,9.183,9.183,0,0,1,3.191-2.446,10.083,10.083,0,0,1,4.349-.9,7.561,7.561,0,0,1,4.414,1.335,7.684,7.684,0,0,1,2.755,3.212h.088V7.039h2.753ZM39.2,27.013a6.3,6.3,0,0,0,3.148-.764,7.184,7.184,0,0,0,2.272-2.012A8.846,8.846,0,0,0,46,21.375a12.113,12.113,0,0,0,.459-3.321,14.324,14.324,0,0,0-.394-3.322A9.6,9.6,0,0,0,44.8,11.715,6.883,6.883,0,0,0,42.545,9.53,6.354,6.354,0,0,0,39.2,8.7a6.637,6.637,0,0,0-3.366.808,7.175,7.175,0,0,0-2.315,2.121,8.886,8.886,0,0,0-1.335,2.993,14.345,14.345,0,0,0-.415,3.433,12.7,12.7,0,0,0,.437,3.321,8.51,8.51,0,0,0,1.355,2.862,7.007,7.007,0,0,0,2.317,2.012,6.819,6.819,0,0,0,3.321.764"
              transform="translate(7.349 1.616)"
              fill="#fff"
            />
            <path
              d="M49.349.036H52.1v4.37H49.349Zm0,8.61H52.1V31.2H49.349Z"
              transform="translate(12.499 0.008)"
              fill="#fff"
            />
            <path
              d="M60.605,8.274h4.589v2.317H60.605V25.8a4.93,4.93,0,0,0,.372,2.121q.37.765,1.856.851a21.3,21.3,0,0,0,2.361-.13V31c-.409,0-.816.014-1.223.044s-.817.043-1.224.043Q59.993,31.09,58.9,30T57.852,26.02V10.591H53.918V8.274h3.934V1.5h2.753Z"
              transform="translate(13.656 0.379)"
              fill="#fff"
            />
            <path
              d="M66.074,13.944q.218-3.978,2.733-5.77a10.761,10.761,0,0,1,6.4-1.793,15.818,15.818,0,0,1,2.973.286,7.184,7.184,0,0,1,2.666,1.07,5.829,5.829,0,0,1,1.924,2.207,7.969,7.969,0,0,1,.743,3.693V25.614a1.448,1.448,0,0,0,1.617,1.661,2.352,2.352,0,0,0,.876-.174v2.316q-.483.088-.853.132a8.365,8.365,0,0,1-.94.044,4.149,4.149,0,0,1-1.683-.284,2.248,2.248,0,0,1-.983-.808,2.994,2.994,0,0,1-.459-1.246,10.543,10.543,0,0,1-.109-1.6h-.089A18.322,18.322,0,0,1,79.384,27.6a8.019,8.019,0,0,1-1.7,1.443,7.423,7.423,0,0,1-2.164.9,11.818,11.818,0,0,1-2.84.306,10.658,10.658,0,0,1-2.95-.394,6.886,6.886,0,0,1-2.405-1.2A5.654,5.654,0,0,1,65.7,26.6a6.85,6.85,0,0,1-.589-2.95,5.83,5.83,0,0,1,1.049-3.693,6.6,6.6,0,0,1,2.775-2.033,15.89,15.89,0,0,1,3.89-.984q2.164-.282,4.393-.545a13.072,13.072,0,0,0,1.508-.242,3.132,3.132,0,0,0,1.115-.459,1.974,1.974,0,0,0,.678-.874,3.882,3.882,0,0,0,.239-1.486,5.027,5.027,0,0,0-.459-2.295,3.637,3.637,0,0,0-1.268-1.421A5.141,5.141,0,0,0,77.155,8.9a12.788,12.788,0,0,0-2.295-.2A6.971,6.971,0,0,0,70.6,9.944a4.85,4.85,0,0,0-1.771,4Zm14.687,3.321h-.086a1.581,1.581,0,0,1-1.006.7,10.04,10.04,0,0,1-1.311.306q-1.75.306-3.606.546a19.843,19.843,0,0,0-3.388.721,6.631,6.631,0,0,0-2.514,1.377,3.289,3.289,0,0,0-.983,2.557,3.992,3.992,0,0,0,.415,1.859,4.531,4.531,0,0,0,1.115,1.4,4.845,4.845,0,0,0,1.617.9,5.9,5.9,0,0,0,1.88.306,9.467,9.467,0,0,0,3.015-.481,7.436,7.436,0,0,0,2.513-1.4,6.66,6.66,0,0,0,2.339-5.2Z"
              transform="translate(16.492 1.615)"
              fill="#fff"
            />
            <rect
              width="2.753"
              height="31.208"
              transform="translate(105.557)"
              fill="#fff"
            />
            <path
              d="M105.176,8.274h4.589v2.317h-4.589V25.8a4.93,4.93,0,0,0,.372,2.121q.37.765,1.856.851a21.3,21.3,0,0,0,2.361-.13V31c-.409,0-.816.014-1.223.044s-.817.043-1.224.043q-2.754,0-3.846-1.093t-1.049-3.977V10.591H98.489V8.274h3.934V1.5h2.753Z"
              transform="translate(24.945 0.379)"
              fill="#fff"
            />
            <path
              d="M110.66,6.969h2.534v5.289h.089a8.657,8.657,0,0,1,3.255-4.24,8.54,8.54,0,0,1,5.269-1.355V9.417a8.322,8.322,0,0,0-3.41.5,7.672,7.672,0,0,0-2.646,1.683,7.553,7.553,0,0,0-1.725,2.622,8.721,8.721,0,0,0-.613,3.279v12.02H110.66Z"
              transform="translate(28.027 1.684)"
              fill="#fff"
            />
            <path
              d="M122.866,19.059a11.581,11.581,0,0,0,.436,3.1A9.373,9.373,0,0,0,124.614,25a7.066,7.066,0,0,0,2.295,2.1,7.584,7.584,0,0,0,8.107-.766,8.383,8.383,0,0,0,2.361-4.173h2.753a11.129,11.129,0,0,1-3.213,5.967,9.514,9.514,0,0,1-6.622,2.119,10.268,10.268,0,0,1-4.632-.961,8.738,8.738,0,0,1-3.148-2.6,11.249,11.249,0,0,1-1.813-3.8,17.323,17.323,0,0,1-.59-4.567,16.419,16.419,0,0,1,.59-4.37,11.771,11.771,0,0,1,1.813-3.825,9.177,9.177,0,0,1,3.148-2.71A9.714,9.714,0,0,1,130.3,6.382a8.916,8.916,0,0,1,7.759,3.957,11.9,11.9,0,0,1,1.727,4.066,17.808,17.808,0,0,1,.436,4.655Zm14.6-2.317a9.95,9.95,0,0,0-.546-3.015,8.242,8.242,0,0,0-1.42-2.557,7.037,7.037,0,0,0-2.23-1.792A6.385,6.385,0,0,0,130.3,8.7a6.482,6.482,0,0,0-3.015.678,7.032,7.032,0,0,0-2.228,1.792,8.916,8.916,0,0,0-1.465,2.578,12.583,12.583,0,0,0-.721,2.994Z"
              transform="translate(30.421 1.616)"
              fill="#fff"
            />
            <path
              d="M139.084,7.037h2.753v3.89h.088a6.564,6.564,0,0,1,1.114-1.857,6.966,6.966,0,0,1,1.683-1.443,8.492,8.492,0,0,1,2.1-.919,8.332,8.332,0,0,1,2.316-.327,11.135,11.135,0,0,1,3.957.612,6.272,6.272,0,0,1,2.557,1.727A6.444,6.444,0,0,1,157,11.451a15.35,15.35,0,0,1,.394,3.628V29.591h-2.753V15.517a13.093,13.093,0,0,0-.262-2.688,5.715,5.715,0,0,0-.917-2.163,4.468,4.468,0,0,0-1.771-1.443,6.511,6.511,0,0,0-2.776-.525,7.014,7.014,0,0,0-2.95.59,6.637,6.637,0,0,0-2.208,1.618,6.962,6.962,0,0,0-1.4,2.448,10.358,10.358,0,0,0-.525,3.081V29.591h-2.753Z"
              transform="translate(35.226 1.616)"
              fill="#fff"
            />
            <path
              d="M177.883,31.208h-2.534V26.924h-.086a6.531,6.531,0,0,1-1.291,2.011,8.839,8.839,0,0,1-1.945,1.573,9.525,9.525,0,0,1-2.339,1.005,9.1,9.1,0,0,1-2.469.35,9.818,9.818,0,0,1-4.48-.961,9.182,9.182,0,0,1-3.168-2.6,11.039,11.039,0,0,1-1.88-3.8,17.366,17.366,0,0,1,0-9.136,11.05,11.05,0,0,1,1.88-3.8,9.2,9.2,0,0,1,3.168-2.6A9.818,9.818,0,0,1,167.219,8a9.369,9.369,0,0,1,4.72,1.267A7.516,7.516,0,0,1,173.8,10.8a6.544,6.544,0,0,1,1.246,2.142h.088V0h2.752ZM159.832,19.931a14.786,14.786,0,0,0,.415,3.474,9.56,9.56,0,0,0,1.312,3.082,7.209,7.209,0,0,0,2.295,2.208,6.347,6.347,0,0,0,3.365.852,7.408,7.408,0,0,0,3.693-.852,7.3,7.3,0,0,0,2.448-2.208,9.06,9.06,0,0,0,1.355-3.082,14.712,14.712,0,0,0,0-6.948,9.071,9.071,0,0,0-1.355-3.082,7.28,7.28,0,0,0-2.448-2.207,7.4,7.4,0,0,0-3.693-.853,6.336,6.336,0,0,0-3.365.853,7.191,7.191,0,0,0-2.295,2.207,9.572,9.572,0,0,0-1.312,3.082,14.793,14.793,0,0,0-.415,3.474"
              transform="translate(39.784 -0.001)"
              fill="#fff"
            />
            <path
              d="M191.628,13.638a5.19,5.19,0,0,0-.525-2.208,4.5,4.5,0,0,0-1.288-1.552,5.4,5.4,0,0,0-1.859-.9,8.54,8.54,0,0,0-2.228-.283,8.935,8.935,0,0,0-1.857.2,5.7,5.7,0,0,0-1.727.659,3.716,3.716,0,0,0-1.267,1.208,3.336,3.336,0,0,0-.481,1.847,2.6,2.6,0,0,0,.459,1.56,4.073,4.073,0,0,0,1.158,1.077,7.29,7.29,0,0,0,1.53.726q.829.286,1.53.46l3.671.83a10.51,10.51,0,0,1,2.339.63,7.563,7.563,0,0,1,2.054,1.2,5.865,5.865,0,0,1,1.465,1.829,5.5,5.5,0,0,1,.568,2.57,5.618,5.618,0,0,1-.831,3.117,6.78,6.78,0,0,1-2.119,2.092,9.413,9.413,0,0,1-2.908,1.176,14.262,14.262,0,0,1-3.191.371,10.264,10.264,0,0,1-6.446-1.9q-2.472-1.9-2.82-6.053h2.753a5.431,5.431,0,0,0,2.033,4.219,7.371,7.371,0,0,0,4.611,1.42,10.352,10.352,0,0,0,2.055-.219,6.639,6.639,0,0,0,2.01-.742,4.754,4.754,0,0,0,1.508-1.333,3.278,3.278,0,0,0,.59-1.989A3.2,3.2,0,0,0,192,21.986a3.552,3.552,0,0,0-1.115-1.158,7.021,7.021,0,0,0-1.6-.764q-.9-.306-1.813-.525l-3.54-.787a19.849,19.849,0,0,1-2.492-.807,7.983,7.983,0,0,1-1.989-1.138,4.75,4.75,0,0,1-1.332-1.661,5.487,5.487,0,0,1-.481-2.425,5.41,5.41,0,0,1,.765-2.929,5.971,5.971,0,0,1,1.989-1.968,9.269,9.269,0,0,1,2.732-1.093,13.283,13.283,0,0,1,2.993-.35,11.015,11.015,0,0,1,3.17.439,7.245,7.245,0,0,1,2.578,1.355,6.623,6.623,0,0,1,1.771,2.272,8.168,8.168,0,0,1,.743,3.191Z"
              transform="translate(44.792 1.616)"
              fill="#fff"
            />
            <path
              d="M204.336,0h2.753V12.938h.087a6.545,6.545,0,0,1,1.246-2.142,7.494,7.494,0,0,1,1.859-1.53A9.369,9.369,0,0,1,215,8a9.819,9.819,0,0,1,4.48.961,9.2,9.2,0,0,1,3.168,2.6,11.071,11.071,0,0,1,1.88,3.8,17.365,17.365,0,0,1,0,9.136,11.06,11.06,0,0,1-1.88,3.8,9.182,9.182,0,0,1-3.168,2.6,9.819,9.819,0,0,1-4.48.961,9.293,9.293,0,0,1-4.917-1.311,7.509,7.509,0,0,1-3.126-3.628h-.088v4.284h-2.534Zm18.051,19.931a14.793,14.793,0,0,0-.415-3.474,9.652,9.652,0,0,0-1.311-3.082,7.23,7.23,0,0,0-2.295-2.207A6.346,6.346,0,0,0,215,10.314a7.4,7.4,0,0,0-3.693.853,7.292,7.292,0,0,0-2.448,2.207,9.071,9.071,0,0,0-1.355,3.082,14.755,14.755,0,0,0,0,6.948,9.061,9.061,0,0,0,1.355,3.082,7.309,7.309,0,0,0,2.448,2.208,7.408,7.408,0,0,0,3.693.852,6.357,6.357,0,0,0,3.366-.852,7.247,7.247,0,0,0,2.295-2.208,9.64,9.64,0,0,0,1.311-3.082,14.786,14.786,0,0,0,.415-3.474"
              transform="translate(51.753 -0.001)"
              fill="#fff"
            />
            <path
              d="M222.33,6.905h2.929l7.431,19.233L239.64,6.905h2.753L232.6,32.912c-.409.963-.78,1.755-1.114,2.382a4.975,4.975,0,0,1-1.158,1.486,4.058,4.058,0,0,1-1.508.787,8.2,8.2,0,0,1-2.164.239c-.554-.029-.984-.051-1.29-.065a2.665,2.665,0,0,1-.808-.153V35.273c.32.058.634.109.94.153a6.6,6.6,0,0,0,.939.065,3.748,3.748,0,0,0,1.509-.262,3.2,3.2,0,0,0,1.028-.722,4.227,4.227,0,0,0,.743-1.114q.3-.656.655-1.443l.961-2.578Z"
              transform="translate(56.31 1.748)"
              fill="#fff"
            />
            <path
              d="M57.788,42.91c10.274,0,17.76,6.649,17.76,17.2,0,10.274-7.486,17.388-17.76,17.388-10.135,0-17.621-7.114-17.621-17.388,0-10.554,7.486-17.2,17.621-17.2m.046,29.337c6.741,0,11.345-5.115,11.345-12.134,0-6.789-4.511-12.043-11.345-12.043-6.788,0-11.3,5.254-11.3,12.043,0,7.02,4.6,12.134,11.3,12.134"
              transform="translate(10.173 10.867)"
              fill="#fff"
            />
            <path
              d="M67.378,43.577h6.556L83,68.916h.185l9.159-25.339h6.323l-13.2,32.917H80.4Z"
              transform="translate(17.065 11.036)"
              fill="#fff"
            />
            <path
              d="M102.443,43.577h5.067l14.181,32.917H115l-3.069-7.531H97.653l-2.975,7.531H88.123Zm7.438,20.364-5.068-13.39-5.16,13.39Z"
              transform="translate(22.319 11.036)"
              fill="#fff"
            />
            <path
              d="M120.671,48.691H110.582V43.577h26.035v5.115H126.528v27.8h-5.858Z"
              transform="translate(28.007 11.036)"
              fill="#fff"
            />
            <rect
              width="5.858"
              height="32.917"
              transform="translate(167.733 54.613)"
              fill="#fff"
            />
            <path
              d="M159.121,42.91c10.274,0,17.76,6.649,17.76,17.2,0,10.274-7.486,17.388-17.76,17.388-10.135,0-17.621-7.114-17.621-17.388,0-10.554,7.486-17.2,17.621-17.2m.046,29.337c6.741,0,11.345-5.115,11.345-12.134,0-6.789-4.511-12.043-11.345-12.043-6.788,0-11.3,5.254-11.3,12.043,0,7.02,4.6,12.134,11.3,12.134"
              transform="translate(35.838 10.867)"
              fill="#fff"
            />
            <path
              d="M172.581,43.577h7.764l15.3,24.642h.093V43.577h5.859V76.494h-7.439L178.532,51.063h-.093V76.494h-5.858Z"
              transform="translate(43.71 11.036)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div
        style={{
          animationDelay: `${SCROLL_INDICATOR_ANIMATION_DELAYS.at(
            0
          )}ms, ${SCROLL_INDICATOR_ANIMATION_DELAYS.at(1)}ms`,
        }}
        className="hero__scroll-indicator"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="109.356"
          height="117.136"
          viewBox="0 0 109.356 117.136"
        >
          <g
            id="Group_484"
            data-name="Group 484"
            transform="translate(1.414 1)"
          >
            <line
              id="Line_3"
              data-name="Line 3"
              y2="114.722"
              transform="translate(53.264)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              x2="53.264"
              y2="53.264"
              transform="translate(0 61.458)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="53.264"
              y2="53.264"
              transform="translate(53.264 114.722) rotate(-90)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </article>
  );
};

export default Hero;
