import Member from "./Member";

const MemberList = (props) => {
  const { list, handleEdit } = props;
  return (
    <>
      {list.map((item) => (
        <Member key={item.id} member={item} handleEdit={handleEdit} />
      ))}
    </>
  );
};

export default MemberList;
