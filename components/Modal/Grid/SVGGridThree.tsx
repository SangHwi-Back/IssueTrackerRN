import {SvgXml} from 'react-native-svg';

const xml = `
<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'>
    <rect width='20' height='20' fill='gray' x='0' y='0' />
    <rect width='20' height='20' fill='black' x='20' y='0' />
    <rect width='20' height='20' fill='gray' x='40' y='0' />
    <rect width='20' height='20' fill='black' x='0' y='20' />
    <rect width='20' height='20' fill='gray' x='20' y='20' />
    <rect width='20' height='20' fill='black' x='40' y='20' />
</svg>
`;

export default function SVGGridThree() {
  return <SvgXml xml={xml} />;
}
