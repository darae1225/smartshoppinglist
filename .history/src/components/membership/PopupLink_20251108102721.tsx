import { useNavigate } from "react-router-dom";

export default function PopupLink({ children }) {
  const navigate = useNavigate();
  const openPopup = (e) => {
    e.preventDefault();
    const popup = window.open(
      "/flybuys",
      "Popup",
      "width=450,height=600,left=300, top=150"
    );
    if (!popup) {
      alert("Please enable popups for this site.");
      return;
    }
  };
  return (
    <a href="/flybuys" onClick={openPopup}>
      {children}
    </a>
  );
}
