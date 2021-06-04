import React from "react";
import { DyteMeeting, Meeting } from "dyte-client";
import { useHistory } from "react-router-dom";

export const CustomLayoutButton: React.FC<{}> = () => {
  let history = useHistory();
  let auth = sessionStorage.getItem("auth");
  let roomName = sessionStorage.getItem("roomName");

  const onDyteInit = (meeting: Meeting): void => {
    //meeting joined event
    meeting.on(meeting.Events.meetingJoined, () => {
      meeting.controlBar.addButton({
        icon: <div>😀</div>,
        label: "React 😀",
        position: "center",
        onClick: () => {
          alert("Reaction Click");
        },
      });
    });

    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history.push("/");
    });
  };

  return (
    <React.Fragment>
      {auth && roomName && process.env.REACT_APP_DYTE_ORG_ID && (
        <DyteMeeting
          onInit={onDyteInit}
          clientId={process.env.REACT_APP_DYTE_ORG_ID}
          meetingConfig={{
            roomName: roomName,
            authToken: auth,
            apiBase: process.env.REACT_APP_DYTE_BASE_URL,
            showSetupScreen: true,
          }}
        />
      )}
    </React.Fragment>
  );
};
