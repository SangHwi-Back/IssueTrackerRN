import {SvgXml} from 'react-native-svg';

const xml = `
<svg
        width='35'
        height='35'
        viewBox='-5 -5 35 35'
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
    <path
            d="M4 4H20V6H4V4ZM8 11H16V13H8V11ZM6 18H18V20H6V18Z"
            fill="black"
    />
</svg>
`;

export default function SVGFilter() {
  return <SvgXml xml={xml} />;
}
