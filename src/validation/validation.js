import Stack from '../utils/Stack';
import { validationPayload, validateStringExists } from './common';

const correspondingClosingChar = (char) => {
  if(char === '{') return '}';
  if(char === '[') return ']';
  if(char === '(') return ')';
  if(char === '<') return '>';
};

function balancedGrouping(value){
  const stack = new Stack();
  const openingCharacters = ['{', '(', '[', '<'];
  const closeningCharacters = ['}', ')', ']','>'];
  const quotesCount = (value.match(/'/g) || []).length;
  if(quotesCount % 2 !== 0) return false;
  const doubleQuotesCount = (value.match(/"/g) || []).length;
  if(doubleQuotesCount % 2 !== 0) return false;
  const hashTagsCount = (value.match(/#/g) || []).length;
  if(hashTagsCount % 2 !== 0) return false;
  for (let i = 0; i < value.length; i++) {
    if(openingCharacters.includes(value.charAt(i))) {
      stack.push(value.charAt(i));
    }
    if(closeningCharacters.includes(value.charAt(i))){
      const onTop = stack.pop();
      if(correspondingClosingChar(onTop) !== value.charAt(i)) {return false;}
    }
  }
  return stack.size === 0;
};

function balancedTags(value) {
  const stack = new Stack();
  const selfClosing = ['<img', '<area', '<base', '<br', '<embed', '<hr', '<iframe', '<input', '<link', '<meta', '<param','<source','<track'];
  const reg = /<(.*?)>/g;
  const textAttributes =  /^(\s*(\w+=('(\S+)'|"(\S+)"))|\w*\s*)*$/;
  let matches = Array.from( value.matchAll(reg) );
  for(let i =0; i < matches.length; i++) {
    const tag = matches[i][1];
    if(tag.charAt(0) === '/') {
      const onTop = stack.pop();
      const withOutTag = ('/' + onTop).replace(tag,'');
      if( '/' + onTop !== tag && !textAttributes.test(withOutTag)) {
        return false;
      }
    } else if(!selfClosing.some(selfClosingTag => matches[i][0].includes(selfClosingTag))){
      stack.push(tag);
    }
  }
  return stack.size === 0;
};

const removeComments = (value) => {
  const regex = /<!--(.*?)-->/g;
  return value.replace(regex, '');
};

const validateJSPixel = (value) => validateStringExists(value) && /<script/.test(value) && /<\/script>/.test(value);

export default function validatePixelString(value) {
  const newStr = removeComments(value);
  let valid = validateJSPixel(newStr) && balancedTags(newStr) && balancedGrouping(newStr);
  if(!valid) {
    return validationPayload(false, `The pixel provided is invalid. Please check braces, square brackets, quotes, double quotes, hashtags and HTML tags.`);
  }
  return validationPayload(true, '');
}