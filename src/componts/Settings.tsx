// import React, { useState } from "react";

// // User Management Settings
// const UserManagementSettings: React.FC = () => {
//   const [userRole, setUserRole] = useState<string>("user");
//   const [passwordPolicy, setPasswordPolicy] = useState<string>("strong");
//   const [accountExpiry, setAccountExpiry] = useState<boolean>(false);

//   const handleSaveUserSettings = () => {
//     // User settings save logic (API call can be used here)
//     alert("User Management Settings Saved!");
//   };

//   return (
//     <div className="section">
//       <h3>User Management Settings</h3>

//       {/* User Role */}
//       <div className="section-item">
//         <label>
//           Select Role:
//           <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//             <option value="manager">Manager</option>
//           </select>
//         </label>
//       </div>

//       {/* Account Settings */}
//       <div className="section-item">
//         <label>
//           Password Policy:
//           <select value={passwordPolicy} onChange={(e) => setPasswordPolicy(e.target.value)}>
//             <option value="weak">Weak</option>
//             <option value="medium">Medium</option>
//             <option value="strong">Strong</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Account Expiry:
//           <input
//             type="checkbox"
//             checked={accountExpiry}
//             onChange={() => setAccountExpiry(!accountExpiry)}
//           />
//           Enable account expiry after a certain period
//         </label>
//       </div>

//       {/* Save User Settings */}
//       <button onClick={handleSaveUserSettings}>Save User Settings</button>
//     </div>
//   );
// };

// // Notification Settings
// const NotificationSettings: React.FC = () => {
//   const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
//   const [smsNotifications, setSmsNotifications] = useState<boolean>(false);
//   const [pushNotifications, setPushNotifications] = useState<boolean>(true);

//   const handleSaveNotificationSettings = () => {
//     // Notification settings save logic (API call can be used here)
//     alert("Notification Settings Saved!");
//   };

//   return (
//     <div className="section">
//       <h3>Notification Settings</h3>

//       {/* Email Notifications */}
//       <div className="section-item">
//         <label>
//           Enable Email Notifications:
//           <input
//             type="checkbox"
//             checked={emailNotifications}
//             onChange={() => setEmailNotifications(!emailNotifications)}
//           />
//         </label>
//       </div>

//       {/* SMS Notifications */}
//       <div className="section-item">
//         <label>
//           Enable SMS Notifications:
//           <input
//             type="checkbox"
//             checked={smsNotifications}
//             onChange={() => setSmsNotifications(!smsNotifications)}
//           />
//         </label>
//       </div>

//       {/* Push Notifications */}
//       <div className="section-item">
//         <label>
//           Enable Push Notifications:
//           <input
//             type="checkbox"
//             checked={pushNotifications}
//             onChange={() => setPushNotifications(!pushNotifications)}
//           />
//         </label>
//       </div>

//       {/* Save Notification Settings */}
//       <button onClick={handleSaveNotificationSettings}>Save Notification Settings</button>
//     </div>
//   );
// };

// // Main Settings Page
// const Settings: React.FC = () => {
//   return (
//     <div className="settings-container">
//       <h2>Settings</h2>
//       <UserManagementSettings />
//       <NotificationSettings />
//     </div>
//   );
// };

// export default Settings;
