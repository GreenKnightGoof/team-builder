import React from "react";
import "./MemberList.css"

const MemberList = (props) => {

  return (
    <div className="member-list">
      {props.members.map((member) => (
        <div className="member" key={member.id}>
          <h2>Member Name: {member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <p>ID Number: {member.id}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
