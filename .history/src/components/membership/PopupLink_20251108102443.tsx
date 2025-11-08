export default function PopupLink({ children }) {
  return (
    <a href="/flybuys" onclick={openPopup}>
      {children}
    </a>
  );
}
