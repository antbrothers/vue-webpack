function makeAction(type) {
    return ({dispatch},...args) => dispatch(type,...args);
};

const initNode ={
    id: +new  Date(),
    title :'我的笔记',
    content: '第一篇笔记内容',
    favorite: false
};

// 模拟初始化数据
const  initData = {
    show: 'all',
    notes : [initNode],
    activeNote : initNode
};

export  const  initStore = ({ dispatch }) =>{
    dispatch('INIT_STORE',initData);
};

// 更新当前的activeNote 对象
export const updateActiveNode = makeAction('SET_ACTIVE_NODE');

//添加一个note对象
export const newNote = makeAction('NEW_NOTE');

//删除一个node对象
export const deleteNote = makeAction('DELETE_NOTE');
export const  toggleFavorite = makeAction('TOGGLE_FAVORITE');
export  const  editNote = makeAction('EDIT_NOTE');

//跟新列表展示
export const updateShow = makeAction('SET_SHOW_ALL');



