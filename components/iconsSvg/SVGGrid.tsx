import {SvgXml} from 'react-native-svg';

const xml = `
  <svg
        width='35'
        height='35'
        viewBox='-5 -5 35 35'
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H8V8H4V4Z" fill="black"/>
    <path d="M10 4H14V8H10V4Z" fill="black"/>
    <path d="M16 4H20V8H16V4Z" fill="black"/>
    <path d="M4 10H8V14H4V10Z" fill="black"/>
    <path d="M10 10H14V14H10V10Z" fill="black"/>
    <path d="M16 10H20V14H16V10Z" fill="black"/>
    <path d="M4 16H8V20H4V16Z" fill="black"/>
    <path d="M10 16H14V20H10V16Z" fill="black"/>
    <path d="M16 16H20V20H16V16Z" fill="black"/>
</svg>
`;

export default function SVGGrid() {
  return <SvgXml xml={xml} />;
}
