import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;

  // 👇 show a solid color in older browsers (e.g., IE11)
  color: darkblue;

  // 👇 show the text gradient in modern browsers
  @supports (--css: variables) {
    //background: linear-gradient(to right, darkblue, darkorchid);
    background: linear-gradient(to right, #247e8b, #b1d3c9);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const Main = styled.main`
  img {
    mix-blend-mode: multiply;
  }
  /* background-color: lightgrey; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 100vh;
  margin: auto;
  max-width: 400px;
  padding: 1rem 2rem;

  input[type="range"] {
    width: 100%;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: #449ba3;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -14px;
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #3d7e84;
  }
  input[type="range"]::-moz-range-track {
    background: #449ba3;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 14.8px 0;
    color: transparent;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #449ba3;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #449ba3;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-thumb {
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #367ebd;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align: auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type="range"] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
`;

export const Slider = styled.input`
  width: 100%;
  cursor: pointer;
  margin-top: 2rem;
`;
