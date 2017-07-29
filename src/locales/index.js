import I18n from 'react-native-i18n'
import en from './en'
import th from './th'

I18n.fallbacks = true
I18n.translations = {
  en,
  th
}
I18n.getTrashText = (textObj) => {
  const myLocale = I18n.locale.split('-')[0]
  return textObj[myLocale]
}
export default I18n
