import {SvgXml} from 'react-native-svg';

const xml = `
<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
  <rect width='20' height='20' fill='gray' stroke='black' stroke-width='2'/>
  <rect x='3' y='3' width='14' height='14' fill='none' stroke='black' stroke-width='2'/>
</svg>
`;

export default function SVGGrayChk() {
  return <SvgXml xml={xml} />;
}
