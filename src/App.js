import "./App.css";
import memberList from "./SahteVeri";
import MemberList from "./components/MemberList";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState(memberList);
  const [editMember, setEditMember] = useState(null);

  const handleEdit = (id) => {
    const member = members.find((item) => item.id === id);
    setEditMember(member);
  };

  const addMember = (member) => {
    if (member.id) {
      const updatedMemberList = members.map((item) => {
        if (item.id === member.id) {
          return member;
        } else {
          return item;
        }
      });
      setMembers(updatedMemberList);
    } else {
      const newMember = { ...member, id: Math.floor(Math.random() * 100000) };
    }

    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <MemberList list={members} handleEdit={handleEdit} />
      <Form addMember={addMember} editMember={editMember} />
    </div>
  );
}

export default App;
