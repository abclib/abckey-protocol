import Json from './0xabc1.json'
import Messages from './Messages'

export default class Pabc1 {
  static json = Json
  static conf = {
    enumname: 'Types',
    prefix: '',
    headString: '$',
    flagString: '##'
  }
  static device = [
    {
      vendorId: 0x1209,
      productId: 0xABC1
    }
  ]
  static messages = () => new Messages(Pabc1.json, Pabc1.conf)
}
