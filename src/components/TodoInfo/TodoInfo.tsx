import classNames from 'classnames';
import { useState } from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
  } = todo;

  const [todoDone, setTodoDone] = useState(completed);

  const handleStatus = () => {
    setTodoDone(!todoDone);
  };

  return (
    <div
      data-cy="Todo"
      className={classNames('todo',
        { completed: todoDone === true })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          defaultChecked
          onClick={handleStatus}
        />

        {/* <form>
          <input
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            defaultValue="JS"
          />
        </form> */}
      </label>
      <span data-cy="TodoTitle" className="todo__title">{title}</span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDeleteButton"
      >
        ×
      </button>
      <div data-cy="TodoLoader" className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>

  // <div data-cy="Todo" className="todo">
  //   <label className="todo__status-label">
  //     <input
  //       data-cy="TodoStatus"
  //       type="checkbox"
  //       className="todo__status"
  //     />
  //   </label>

  //   <span data-cy="TodoTitle" className="todo__title">CSS</span>

  //   <button
  //     type="button"
  //     className="todo__remove"
  //     data-cy="TodoDeleteButton"
  //   >
  //     ×
  //   </button>

  //   <div data-cy="TodoLoader" className="modal overlay">
  //     <div className="modal-background has-background-white-ter" />
  //     <div className="loader" />
  //   </div>
  // </div>

  // <div data-cy="Todo" className="todo">
  //   <label className="todo__status-label">
  //     <input
  //       data-cy="TodoStatus"
  //       type="checkbox"
  //       className="todo__status"
  //     />
  //   </label>

  //   <form>
  //     <input
  //       data-cy="TodoTitleField"
  //       type="text"
  //       className="todo__title-field"
  //       placeholder="Empty todo will be deleted"
  //       defaultValue="JS"
  //     />
  //   </form>

  //   <div data-cy="TodoLoader" className="modal overlay">
  //     <div className="modal-background has-background-white-ter" />
  //     <div className="loader" />
  //   </div>
  // </div>

  // <div data-cy="Todo" className="todo">
  //   <label className="todo__status-label">
  //     <input
  //       data-cy="TodoStatus"
  //       type="checkbox"
  //       className="todo__status"
  //     />
  //   </label>

  //   <span data-cy="TodoTitle" className="todo__title">React</span>
  //   <button
  //     type="button"
  //     className="todo__remove"
  //     data-cy="TodoDeleteButton"
  //   >
  //     ×
  //   </button>

  //   <div data-cy="TodoLoader" className="modal overlay">
  //     <div className="modal-background has-background-white-ter" />
  //     <div className="loader" />
  //   </div>
  // </div>

  // <div data-cy="Todo" className="todo">
  //   <label className="todo__status-label">
  //     <input
  //       data-cy="TodoStatus"
  //       type="checkbox"
  //       className="todo__status"
  //     />
  //   </label>

  //   <span data-cy="TodoTitle" className="todo__title">Redux</span>
  //   <button
  //     type="button"
  //     className="todo__remove"
  //     data-cy="TodoDeleteButton"
  //   >
  //     ×
  //   </button>

  //   <div data-cy="TodoLoader" className="modal overlay is-active">
  //     <div className="modal-background has-background-white-ter" />
  //     <div className="loader" />
  //   </div>
  // </div>
  );
};
