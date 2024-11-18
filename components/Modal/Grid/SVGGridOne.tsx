import {SvgXml} from 'react-native-svg';

const xml = `
<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'>
    <rect width='60' height='20' fill='gray' y='0' />
    <rect width='60' height='20' fill='black' y='20' />
    <rect width='60' height='20' fill='gray' y='40' />
</svg>
`;

export default function SVGGridOne() {
  return <SvgXml xml={xml} />;
}
