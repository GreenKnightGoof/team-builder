import React from "react";

const MemberList = (props) => {
  const members = [
    {
      id: Date.now(),
      name: "Kyle N",
      email: "kyle@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now(),
      name: "Valerie V",
      email: "valerie@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now(),
      name: "William S",
      email: "william@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now(),
      name: "Annemarie A",
      email: "annemarie@developer.com",
      role: "Web Developer",
    },
  ];

 
  return (
    <div className="member-list">
      {members.map((member) => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <p>{member.id}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
