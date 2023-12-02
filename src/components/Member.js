const Member = (props) => {
  const { member, handleEdit } = props;
  const { name, id } = member;
  return (
    <div>
      {id} - {name} [<span onClick={() => handleEdit(id)}>Edit</span>]
    </div>
  );
};

export default Member;
