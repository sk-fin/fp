export default {

  onlyNumbers : (str) => {
    return str.replace(/[^\d;]/g,'');
  },

  onlyInQuotes : (str) => {
    return str.match(/"(.*?)"/g);
  },

  inArray : (arr, item) => {
    if (arr.indexOf(item) != -1) {
      return true;
    } else {
      return false;
    }
  },

  onlyUnique : (array) => {
    return array.filter((x, i, a) => a.indexOf(x) == i)
  },

  findObjectInArray : (arr, field, val) => {
    return arr.filter(x => x[field] === val).shift();
  },

  setTitle : (title = '') => {
    if (title != '') {
      document.title = title + ' - Финансовая платформа';
    } else {
      document.title = 'Финансовая платформа';
    }
  }

};