import React from 'react';

// this is a JSX.Element, which i guess makes sense
const LoggedOffHelp = (
  <div>
    <p>If this is an actual plea for help in response to a hazardous material spill, an explosion, a fire on your person, radiation poisoning, a choking gas of unknown origin, eye trauma resulting from the use of an emergency eye wash station on floors three, four, or eleven, an animal malfunction, or any other injurious experimental equipment failure, please remain at your workstation. A Crisis Response Team has already been mobilized to deliberate on a response to your crisis.</p>
    <p>If you need help accessing the system, please refer to your User Handbook.</p>
  </div>
);

const AdminHelp = (
    <div>
        <ul>
            <p>LIB</p>
            <li>NOTES</li>
            <li>APPEND</li>
            <li>ATTRIB</li>
            <li>COPY</li>
            <li>DIR</li>
            <li>ERASE</li>
            <li>FORMAT</li>
            <li>INTERROGATE</li>
            <li>LIB</li>
            <li>PLAY</li>
            <li>RENAME</li>
            <li>TAPEDISK</li>
        </ul>
    </div>
);

const UserHelp = (
    <div>
        <ul>
            <p>LIB</p>
            <li>APPEND</li>
            <li>ATTRIB</li>
            <li>COPY</li>
            <li>DIR</li>
            <li>ERASE</li>
            <li>FORMAT</li>
            <li>INTERROGATE</li>
            <li>LIB</li>
            <li>PLAY</li>
            <li>RENAME</li>
            <li>TAPEDISK</li>
        </ul>
    </div>
)

export {LoggedOffHelp, AdminHelp, UserHelp};