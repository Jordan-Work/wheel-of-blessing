export const state = () => ({
  defaultStatement: 'ALL MY DAYS WERE WRITTEN IN YOUR BOOK BEFORE THEY CAME TO BE',
  minimumGridSize: 12,
  lettersFound: []
})

export const mutations = {
  updateStatement(state) {
    let i = 0
    let space = 0;
    let addedSpace = 0;
    let statement = state.defaultStatement;

    let addSpaces = (num) => {
      let str = ''
      for (i =0; i < num; i++) {
        str += ' '
      }
		  return str;
    }

    let spaceUpdate = (statement) => {
      for (i = 0; i < statement.length; i++) {
        if (statement[i] === ' ') {
          space = i;
        }
        if (i % 12 === 0 && statement[i-1] !== ' ' && statement[i-1] !== undefined) { 
           if(statement[i] !== ' '){ 
             addedSpace = i - space;
             return `${statement.slice(0, space)}${addSpaces(addedSpace)}${statement.slice(space)}`;
            }
        }
       }
    }
    
     state.defaultStatement = spaceUpdate(statement);
  },
  addLettersFound(state, letter) {
    state.lettersFound.push(letter)
  }
}

export const getters = {
  
}