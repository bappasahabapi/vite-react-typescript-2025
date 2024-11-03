export default function Navigation() {
  return (
    <div style={{ display: "flex", placeItems: "center", gap: "15px", fontSize:"25px"}}>
      <div>
        <a style={{ color: "yellow" }} href="/">
          Home
        </a>
      </div>
      <div>
        {" "}
        <a style={{ color: "lime" }} href="/props">
         PROPS
        </a>
      </div>
      <div>
        {" "}
        <a style={{ color: "aqua" }} href="/state">
          STATE
        </a>
      </div>
      <div>
        {" "}
        <a style={{ color: "orange" }} href="/events">
          EVENTS HANDLER
        </a>
      </div>
      
    </div>
  );
}
