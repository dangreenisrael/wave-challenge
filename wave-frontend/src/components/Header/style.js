import iconFile from './wave-icon.svg';
const main = {
  backgroundColor: '#337ab7',
  width: '100%',
  textAlign: 'center',
  paddingTop: 30,
  paddingBottom: 30
};
const title = {
  backgroundImage: `url(${iconFile})`,
  backgroundPosition: 'left center',
  backgroundRepeat: 'no-repeat',
  paddingLeft: 50
};

const h1 = {
  margin: 0,
  color: 'white'
};
export {main as mainStyle, title as titleStyle, h1 as h1Style};
