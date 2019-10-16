window.onload = function(e) {
  /* Dom Library Start */
  const $ = selector => {
    const els = document.querySelectorAll(selector);
    return els.length > 1 ? els : els[0];
  };

  const getElementIndex = element => {
    let index = 0;
    let previousElement = element.previousElementSibling;
    while (previousElement) {
      index++;
      previousElement = previousElement.previousElementSibling;
    }

    return index;
  };

  /* Dom Library End */

  const handleTodoDrag = e => {
    console.log(e.target);
  };

  const handleTodoDrop = e => {};

  const handleColumnDragStart = e => {
    // console.log('drag start');

    //TODO: column도 key값이 아닌 index로 설정 변경하기
    e.dataTransfer.setData('from', e.currentTarget.getAttribute('key'));
    e.dataTransfer.setData('todo', e.target.outerHTML);
    e.dataTransfer.setData('todoIndex', getElementIndex(e.target));
  };

  const handleTodoDragEnd = e => {
    // console.log('drag end');
  };

  const handleColumnDragOver = e => {
    // console.log('drag over');
    e.preventDefault();
  };

  //TODO: dragEnter가 todo-card에 발생하는 경우 그림자 생성 하는 형태로 가면 todo-card 와 todo-card사이에서도 끼워넣기 가능하다.
  const handleColumnDragEnter = e => {
    console.log('dragenter: taget', e.target);
  };

  const handleColumnDragLeave = e => {
    // console.log('drag leave');
  };

  const handleColumnDrop = e => {
    // console.log('drop');
    /** Drop된 시점을 생각하여 코드를 작성하였다. */

    const prevColumnKey = e.dataTransfer.getData('from'); // 이전 컬럼 key 값
    const curColumnKey = e.currentTarget.getAttribute('key'); // 현재 컬럼 key 값
    const prevColumnEl = $(`.column[key="${prevColumnKey}"]`);
    const curColumEl = $(`.column[key="${curColumnKey}"]`);

    const targetTodo =
      e.target.closest('.column-card') ||
      e.target.closest('.column-head') ||
      e.target.closest('.column-add-card');

    const todoHtml = e.dataTransfer.getData('todo'); // drag된 todo html
    const prevTodoIndex = Number(e.dataTransfer.getData('todoIndex')); // drag된 todo의 key 값
    const curTodoIndex = targetTodo
      ? getElementIndex(targetTodo)
      : curColumEl.childElementCount - 1; // drag된 todo가 가고자하는 key 위치
    const prevTodoEl = $(
      `.column[key="${prevColumnKey}"] > :nth-child(${prevTodoIndex + 1})`
    );
    const curTodoEl = $(
      `.column[key="${curColumnKey}"] > :nth-child(${curTodoIndex + 1})`
    );

    /* 같은 컬럼에서의 이동인 경우 */
    if (curColumnKey === prevColumnKey) {
      if (prevTodoIndex !== curTodoIndex) {
        /* todo의 위치가 변경된 경우
         * 현재 컬럼 하위 todo를 대상으로 아래 내요을 수행한다.
         * 1. prevTodoIndex의 todo를 삭제한다.
         * 2. curTodoIndex 위치에 after에 todo를 삽입한다.
         */
        prevTodoEl.remove();
        curTodoEl.insertAdjacentElement('afterend', prevTodoEl);
      }
    } else {
      /* 다른 컬럼으로의 이동인 경우
       * 1. 이전 컬럼에서 Todo를 삭제한다.
       * 2. 현재 컬럼의 해당 index값 위치에 Todo를 넣어준다.
       */

      prevTodoEl.remove();
      curTodoEl.insertAdjacentElement('afterend', prevTodoEl);
    }
  };

  const columnEls = $('.column');
  columnEls.forEach(columnEl => {
    columnEl.addEventListener('dragstart', handleColumnDragStart);
    columnEl.addEventListener('dragover', handleColumnDragOver);
    columnEl.addEventListener('drop', handleColumnDrop);
    // columnEl.addEventListener('drag', handleTodoDrag);
    columnEl.addEventListener('dragenter', handleColumnDragEnter);
    // columnEl.addEventListener('dragleave', handleColumnDragLeave);
    // columnEl.addEventListener('dragend');
  });
};
