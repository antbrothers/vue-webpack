// 获取noteList,这里将会根据state.show的状态进行过滤
export  const filteredNotes = (state) =>{
    if (state.show ==='all'){
        return state.notes || {};
    }else  if (state.show === 'favorite'){
        return state.notes.filter(note => note.favorite) || {};
    }
};

// 获取类别展示转态 ： all or favorite
export  const show =(state) =>{
    return state.show;
}

//获取当前激活note
export const activeNote = (state) =>{
    return state.activeNote;
}