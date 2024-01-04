import "./employers-list-item.css";

const EmployersListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, like } = props;
  let className = "list-group-item d-flex justify-content-between";
  if (increase) {
    className += " increase";
  }
  if (like) {
    className += " like";
  }
  return (
    <li className={className}>
      <span onClick={onToggleProp} className="list-group-item-label" data-toggle="like">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={onToggleProp}
          data-toggle="increase"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployersListItem;
