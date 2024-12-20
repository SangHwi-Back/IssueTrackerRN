import {SvgXml} from 'react-native-svg';

const xml = `
  <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="sort-ascending" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="secondary" d="M10.71,14.29a1,1,0,0,0-1.42,0L7,16.59V4A1,1,0,0,0,5,4V16.59l-2.29-2.3a1,1,0,0,0-1.42,1.42l4,4a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,10.71,14.29Z" style="fill: rgb(44, 169, 188);"></path><path id="primary" d="M20,17H15a1,1,0,0,1,0-2h5a1,1,0,0,1,0,2Zm0-5H13a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Zm0-5H10a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" style="fill: rgb(0, 0, 0);"></path></svg>
`;

export default function SVGDateDesc() {
  return <SvgXml xml={xml} />;
}
