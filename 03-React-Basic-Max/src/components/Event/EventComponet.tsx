const EventComponet = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    console.log(e?.target.value);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement> | undefined) => {
    console.log(e);
  };

  const onCopy = () => {
    navigator.clipboard
      .writeText("Copy the text ")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const onFocus = (e:React.FocusEvent<HTMLDivElement> | undefined) => {
    console.log(e);
  };

  return (
    <div>
      <h3>Event Componet</h3>
      <input
        onChange={onChange}
        type="text"
        name=""
        id=""
        placeholder="input Event"
      />
      {/* <input onChange={e=>console.log(e.target)} type="text" name="" id="" /> */}
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onClick={onCopy}
      >
        Copy me
      </div>
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onFocus={onFocus}
      >
        On Focus
      </div>
    </div>
  );
};

export default EventComponet;
