import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {props.members.map((member) => (
        <Card className='cards' variant="outlined">
          <CardContent>
            <Typography>
              Member Name: {member.name}
            </Typography>
            <br/>
            <Typography>Email: {member.email}</Typography>
            <br/>
            <Typography>
              Role: {member.role}
            </Typography>
            <br/>
            <Typography>
              ID Number: {member.id}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// import React from "react";
// import "./MemberListTest.css"

// const MemberListTest = (props) => {

//   return (
//     <div className="member-list">
//       {props.members.map((member) => (
//         <div className="member" key={member.id}>
//           <h2>Member Name: {member.name}</h2>
//           <p>Email: {member.email}</p>
//           <p>Role: {member.role}</p>
//           <p>ID Number: {member.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MemberListTest;
