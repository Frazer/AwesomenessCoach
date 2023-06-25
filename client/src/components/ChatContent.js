import PropTypes from "prop-types";
import moment from "moment";
import ChatMessage from "../types/ChatMessage";
import ChatMessageGroup from "./ChatMessageGroup";
import { useEffect, useRef } from "react";

function ChatContent({ chatHistory, userInfoMap }) {
  const contentContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on load
    contentContainerRef.current.scrollTop =
      contentContainerRef.current.scrollHeight;
  }, [contentContainerRef, chatHistory]);

  // Group messages by time (max 5 min time gap), this is for display time
  const timeGrouped = groupMessagesByTime(chatHistory);
  const contentList = [];

  for (let i = 0; i < timeGrouped.length; i++) {
    const currGroup = timeGrouped[i];
    const formattedTime = formatDateTime(currGroup.time);
    const currGroupContent = [
      <div className="time-marker" key={currGroup.time}>
        {formattedTime}
      </div>,
    ];
    // Group messages again by user and 1 min time gap, this is for bubble display
    const msgGroupsBySender = groupByUserAndShortTime(currGroup.messages);
    for (let j = 0; j < msgGroupsBySender.length; j++) {
      currGroupContent.push(
        <ChatMessageGroup
          messageGroup={msgGroupsBySender[j]}
          userInfoMap={userInfoMap}
          key={
            msgGroupsBySender[j].messages[0].id + msgGroupsBySender[j].senderId
          }
        />
      );
    }
    contentList.push(
      <div key={`timeGroup${i}`} className="time-group">
        {currGroupContent}
      </div>
    );
  }

  return (
    <div className="chat-content-container" ref={contentContainerRef}>
      {contentList}
    </div>
  );
}

/**
 * Given a list of ChatMessages, group them into sections by time.
 * Groupping is done by scanning for time gap between messages. Any two messages
 * > 5 min apart will be in different groups. Assume inputs are sorted by time.
 * Output a list of sections like the following
 * [{
 *    time: timestamp,
 *    messages: [ChatMessage]
 * }, ...]
 */
function groupMessagesByTime(chatMessages) {
  if (chatMessages.length === 0) {
    return [];
  }
  const timeGap = 5 * 60;
  const groups = [];
  let currGroup = { time: chatMessages[0].time, messages: [chatMessages[0]] };

  for (let i = 1; i < chatMessages.length; i++) {
    // Create new group
    if (chatMessages[i].time - chatMessages[i - 1].time > timeGap) {
      groups.push(currGroup);
      currGroup = { time: chatMessages[i].time, messages: [chatMessages[i]] };
    }
    // Continue current group
    else {
      currGroup.messages.push(chatMessages[i]);
    }
  }
  groups.push(currGroup);
  return groups;
}

/**
 * Group messages by sender id and time (1 min).
 * @param {[ ChatMessage ]} chatMessages
 * @returns {[ {senderId: string, messages: [ ChatMessage ] } ]}
 */
function groupByUserAndShortTime(chatMessages) {
  if (chatMessages.length === 0) {
    return [];
  }
  const timeGap = 60;
  const groups = [];
  let currGroup = {
    senderId: chatMessages[0].senderId,
    messages: [chatMessages[0]],
  };

  for (let i = 1; i < chatMessages.length; i++) {
    // Create new group
    if (chatMessages[i].time - chatMessages[i - 1].time > timeGap) {
      groups.push(currGroup);
      currGroup = {
        senderId: chatMessages[i].senderId,
        messages: [chatMessages[i]],
      };
    }
    // Continue current group
    else {
      currGroup.messages.push(chatMessages[i]);
    }
  }
  groups.push(currGroup);
  return groups;
}

/**
 * Format time (e.g. 11/23/2020 02:03 PM) based on the following rules:
 *   within today: 2:03 PM
 *   within last week: Tue, 2:03 PM
 *   everything else: 11/23/20, 2:03 PM
 * @param {number} timestamp
 */
function formatDateTime(timestamp) {
  return moment.unix(timestamp).calendar(null, {
    sameDay: "h:m A",
    nextDay: "M/D/YY, h:mm A",
    nextWeek: "M/D/YY, h:mm A",
    lastDay: "ddd, h:mm A",
    lastWeek: "ddd, h:mm A",
    sameElse: "M/D/YY, h:mm A",
  });
}

ChatContent.propTypes = {
  chatHistory: PropTypes.arrayOf(PropTypes.shape(ChatMessage)).isRequired,
  userInfoMap: PropTypes.any.isRequired,
};

export default ChatContent;
