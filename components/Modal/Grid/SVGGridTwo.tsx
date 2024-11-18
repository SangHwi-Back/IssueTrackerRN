import {SvgXml} from 'react-native-svg';

const xml = `
<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'>
    <rect width='30' height='30' fill='gray' x='0' y='0' />
    <rect width='30' height='30' fill='black' x='30' y='0' />
    <rect width='30' height='30' fill='gray' x='0' y='30' />
    <rect width='30' height='30' fill='black' x='30' y='30' />
</svg>
`;

export default function SVGGridTwo() {
  return <SvgXml xml={xml} />;
}
