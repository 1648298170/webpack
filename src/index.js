import _ from 'lodash'

function component(){
    const element = document.createElement('div');

    //- lodash（目前通过一个 script 引入）对于执行这一行是必需的
    //+ lodash 在当前script 中使用 import引入
    element.innerHTML = _.join(['Hello','webpack'],'');

    return element;
}

document.body.appendChild(component());