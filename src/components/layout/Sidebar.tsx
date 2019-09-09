import React from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt
} from 'react-icons/fa'
const Sidebar = () => {
  return (
    <aside className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox/>
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaChevronDown/>
          </span>
          <span>
            Today
          </span>
        </li>
        <li>
          <span><FaRegCalendarAlt/></span>
          <span>Next 7 days</span>
        </li>
      </ul>
    </aside>
  )
};
export default Sidebar;
