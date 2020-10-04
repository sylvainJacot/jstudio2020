import {keyframes} from "styled-components";

export const transitions = {
    basic1 : "0.3s all;",
    basic2 : " 0.6s all;",
    easeOut: "all 0.5s cubic-bezier(.17,.67,.83,.67)"
};

export const UpDown = keyframes`
  0% {
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -o-transform:translate(-50%,-50%);
  }
  50% {
  transform: translate(-50%,-48%);
  -webkit-transform: translate(-50%,-48%);
  -moz-transform: translate(-50%,-48%);
  -o-transform:translate(-50%,-48%);
  }
  100% {
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -o-transform:translate(-50%,-50%);
  }
`;

export const Breathe = keyframes`
  0% {width: 60%; opacity: 70%; -moz-opacity: 70%;}
  50% {width: 80%; opacity: 100%; -moz-opacity: 100%;}
  100% {width: 60%; opacity: 70%; -moz-opacity: 70%;}
`;


