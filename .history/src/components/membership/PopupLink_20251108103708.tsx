import { useNavigate } from "react-router-dom";

export default function PopupLink({ children }) {
  const navigate = useNavigate();
  const openPopup = (e) => {
    e.preventDefault();
    // Fixes dual-screen position                             ↓ current monitor
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    // Get browser window width/height
    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    // Calculate center position
    const left = width / 2 - 450 / 2 + dualScreenLeft;
    const top = height / 2 - 300 / 2 + dualScreenTop;

    const popup = window.open(
      "/flybuys",
      "Flybuys Membership Number",
      `scrollbars=yes, width=450, height=300, top=${top}, left=${left}`
    );
    if (popup) popup.focus();
    else alert("Please enable popups for this app");
  };
  return (
    <a href="/flybuys" onClick={openPopup}>
      {children}
    </a>
  );
}
