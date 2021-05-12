import React from "react";
import { DyteMeeting, Meeting } from "dyte-client";
import { useHistory } from "react-router-dom";

export const MeetingComponent: React.FC<{}> = () => {
  let history = useHistory();
  let auth = sessionStorage.getItem("auth");
  let roomName = sessionStorage.getItem("roomName");

  const onDyteInit = (meeting: Meeting) => {
    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history.push("/");
    });
  };
  return (
    <React.Fragment>
      {auth && roomName && process.env.REACT_APP_ORG_ID && (
        <DyteMeeting
          onInit={onDyteInit}
          clientId={process.env.REACT_APP_ORG_ID}
          meetingConfig={{
            roomName: roomName,
            authToken: auth,
            apiBase: process.env.REACT_APP_BASE_URL,
          }}
        />
      )}
    </React.Fragment>
  );
};
