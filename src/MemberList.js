import React from "react";

const MemberList = (props) => {
  const team = [
    {
      id: Date.now() + 1,
      name: "Kyle N",
      email: "kyle@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 3,
      name: "Valerie V",
      email: "valerie@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 5,
      name: "William S",
      email: "william@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 7,
      name: "Annemarie A",
      email: "annemarie@developer.com",
      role: "Web Developer",
    },
  ];

  console.log(props.team);
  console.log(team);
  return (
    <div className="member-list">
      {team.map((member) => (
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
